import { sortProductList } from "@modules/product/store/api/helper";
import { nimLog } from "@modules/general/libraries/helpers";
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import path from "path";
import {
  ProductCriteria,
  Product,
  ProductListEntity,
} from "@modules/product/libraries/product-types";
import {
  Sorting,
  SORTING_TYPES,
} from "@modules/general/libraries/general-types";

const filePath = path.join(process.cwd(), "data/dev-data/products.json");
const data: Product[] = JSON.parse(
  fs.readFileSync(filePath, { encoding: "utf-8" })
);

const sliceByPaging = (arr: any[], limit: number, paging: number) =>
  arr.slice(limit * paging - limit, limit * paging);

const hasMoreItem = (arr: any[], limit: number, paging?: number): boolean => {
  if (paging) return !!sliceByPaging(arr, limit, paging).length;
  else return sliceByPaging(arr, limit, 1).length === arr.length;
};

export const getInternalProductList = async function (
  criteria: ProductCriteria
): Promise<ProductListEntity> {
  const { brandIds, categoryIds, limit, searchKeywords, sorting, paging } =
    criteria;
  nimLog("criteria in api", criteria)()
  let productList: Product[] = data;

  // brandIds ______________________________
  if (brandIds && brandIds.length > 0)
    productList = productList.filter(({ brand_id }) =>
      brandIds.some((id) => String(id) === String(brand_id))
    );

  // categoryIds ______________________________
  if (categoryIds && categoryIds.length > 0)
    productList = productList.filter(({ category }) =>
      categoryIds.some((id) => String(id) === String(category.id))
    );

  // searchKeywords ______________________________
  if (searchKeywords)
    productList = productList.filter(
      ({ title }) => title.toLowerCase() === searchKeywords.toLowerCase()
    );

  // limit / paging ______________________________
  if (limit) {
    if (paging === undefined || paging === 1)
      productList = productList.slice(0, limit);
    else if (paging > 1)
      productList = sliceByPaging(productList, limit, paging);
  }

  // sorting ______________________________
  if (sorting && sorting.expression && sorting.ascending) {
    const { expression } = sorting;
    switch (expression) {
      case SORTING_TYPES.cheapest:
        productList = sortProductList(productList, sorting, "price");
        break;
      case SORTING_TYPES.expensive:
        productList = sortProductList(productList, sorting, "price").reverse();
        break;
      case SORTING_TYPES.likeCount:
        productList = sortProductList(productList, sorting, "like_count");
        break;
      case SORTING_TYPES.promotion:
        productList = sortProductList(
          productList,
          sorting,
          "like_count"
        ).reverse();
        break;
      case SORTING_TYPES.new:
        productList = productList.filter((el) => el.is_new);
        break;
      case SORTING_TYPES.none:
        productList = productList;
      default:
        productList = productList;
    }
  }

  const response: ProductListEntity = {
    criteria,
    data: productList,
    paging: {
      has_more: hasMoreItem(productList, limit, paging),
      limit,
      page: paging || 1,
      returned: productList.length,
      total: data.length,
    },
    sorting,
    status_code: "200",
    error: null,
    message: "null",
  };
  return new Promise((resolve) => resolve(response));
};

const getArrCriteria = (
  query: string | string[] | undefined
): string[] | undefined =>
  query ? (Array.isArray(query) ? query : [query]) : undefined;

const handler = function (req: NextApiRequest, res: NextApiResponse) {
  const criteria: ProductCriteria = {
    limit: Number(req.query.limit) || 2,
    brandIds: getArrCriteria(req.query.brandIds),
    categoryIds: getArrCriteria(req.query.categoryIds),
    paging: Number(req.query.paging) || 1,
    searchKeywords: Array.isArray(req.query.searchKeywords)
      ? req.query.searchKeywords.join("")
      : req.query.searchKeywords,
    sorting:
      req.query.ascending && req.query.expression
        ? {
            ascending: Boolean(req.query.ascending),
            expression: req.query.expression as SORTING_TYPES,
          }
        : undefined,
  };

  getInternalProductList(criteria)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
};

export default handler;
