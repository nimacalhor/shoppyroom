import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import ProductFilter from "@modules/page-sections/components/product-filter";
import { kebabCase, nimLog } from "@modules/general/libraries/helpers";
import { Category } from "@modules/category/libraries/category-types";
import { fetchBrandList } from "@modules/brand/store/api/brands-api";
import { getInternalCategoryList } from "@main/pages/api/categories";
import { getInternalProductList } from "@main/pages/api/products";
import { Brand } from "@modules/brand/libraries/brand-types";
import {
  Product,
  ProductCriteria,
  ProductListEntity,
} from "@modules/product/libraries/product-types";

const BrandProductPage = ({
  brand,
  brandList,
  categoryList,
  productList,
  productListEntity,
  criteria,
}: {
  brand: Brand | null;
  brandList: Brand[] | null;
  categoryList: Category[] | null;
  productList: Product[] | null;
  productListEntity: ProductListEntity | null;
  criteria: ProductCriteria | null;
}) => {
  const productPaging = productListEntity ? productListEntity.paging : null;
  return (
    <>
      <ProductFilter
        {...{
          categoryList,
          products: productList,
          criteria,
          title: brand?.title || "failed to get title",
          brandList,
          productPaging,
          defaultBrand: brand?.id,
          defaultLimit: 12,
        }}
      />
    </>
  );
};

const getBrandName = ({ params }: GetStaticPropsContext) => {
  let brandName = "";
  if (params && params.brandName) {
    if (Array.isArray(params.brandName)) brandName = params.brandName[0];
    else brandName = params.brandName;
  }
  return brandName;
};

export const getStaticProps: GetStaticProps = async function (
  context: GetStaticPropsContext
) {
  let brand: Brand | null = null;
  let brandList: Brand[] | null = null;
  let categoryList: Category[] | null = null;
  let productList: Product[] | null = null;
  let productListEntity: ProductListEntity | null = null;
  const brandName = getBrandName(context);
  let criteria: ProductCriteria = { limit: 20 };
  try {
    const brandListRes = await fetchBrandList();
    if (brandListRes.data.length > 0) {
      brand =
        brandListRes.data.find((brd) => kebabCase(brd.title) === brandName) ||
        null;
      brandList = brandListRes.data;
    }
    const categoryListRes = await getInternalCategoryList();
    if (categoryListRes.category_list.length > 0)
      categoryList = categoryListRes.category_list;

    criteria = {
      limit: 20,
      brandIds: brand ? [brand.id.toString()] : undefined,
    };

    const productListRes = await getInternalProductList(criteria);

    if (productListRes.data.length > 0) {
      productList = productListRes.data;
      productListEntity = { ...productListRes };
      if (productListEntity.sorting === undefined)
        delete productListEntity.sorting;
    }
  } catch (error) {
    nimLog("error in BrandProductPage ~ getStaticProps", error)("error");
  }
  return {
    props: {
      brand,
      categoryList,
      productList,
      criteria,
      brandList,
      productListEntity,
    },
  };
};

const getPaths = (brands: Brand[]) =>
  brands.map((brd) => ({
    params: { brandName: kebabCase(brd.title) },
  }));

export const getStaticPaths: GetStaticPaths = async function () {
  let brandList: Brand[] | null = null;
  try {
    const res = await fetchBrandList();
    if (res.data.length > 0) brandList = res.data;
  } catch (err) {
    nimLog("error in BrandProductPage ~ getStaticPath", err)("error");
  }
  return {
    paths: brandList ? getPaths(brandList) : [],
    fallback: false,
  };
};

export default BrandProductPage;
