import { nimLog } from "@modules/general/libraries/helpers";
import { arrToQuery, getSortingQuery } from "./helper";
import axios from "axios";
import {
  ProductCriteria,
  ProductListEntity,
} from "../../libraries/product-types";

export const fetchProductsList = async function (
  criteria: ProductCriteria
): Promise<ProductListEntity> {
  const { limit, brandIds, categoryIds, paging, searchKeywords, sorting } =
    criteria;
  const strBrandIds = arrToQuery("brandIds", brandIds);
  const strCategoryIds = arrToQuery("categoryIds", categoryIds);
  const strKeywords = searchKeywords;
  let url = `/api/products?limit=${limit}&${brandIds ? strBrandIds : ""}${
    categoryIds ? strCategoryIds : ""
  }${paging ? `paging=${paging}&` : ""}${
    searchKeywords ? strKeywords : ""
  }${getSortingQuery(sorting)}`;

  if (url[url.length - 1] === "&") url = url.slice(0, -1);
  nimLog("url", url)();
  try {
    const res = await axios.get<any>(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data) return res.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.error.error_message);
    }
  }
  return Promise.reject();
};
