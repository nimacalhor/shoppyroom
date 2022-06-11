import ProductFilter from "@modules/page-sections/components/product-filter";
import { fetchCategoryList } from "@modules/category/store/api/category-api";
import { Category } from "@modules/category/libraries/category-types";
import { fetchBrandList } from "@modules/brand/store/api/brands-api";
import { Paging } from "@modules/general/libraries/general-types";
import { Brand } from "@modules/brand/libraries/brand-types";
import { nimLog } from "@modules/general/libraries/helpers";
import { getInternalProductList } from "../api/products";
import { GetStaticProps } from "next";
import {
  Product,
  ProductCriteria,
} from "@modules/product/libraries/product-types";

const ProductsPage = ({
  products,
  brandList,
  categoryList,
  productPaging,
}: {
  products: Product[] | null;
  brandList: Brand[] | null;
  categoryList: Category[] | null;
  productPaging: Paging | null;
}) => {
  return (
    <ProductFilter
      {...{
        products,
        brandList,
        categoryList,
        productPaging,
        title: "all products",
      }}
    />
  );
};

export const getStaticProps: GetStaticProps = async function () {
  let products: Product[] | null = null;
  let brandList: Brand[] | null = null;
  let categoryList: Category[] | null = null;
  let productPaging: Paging | null = null;
  let criteria: ProductCriteria = {
    limit: 16,
    paging: 1,
    categoryIds: undefined,
    brandIds: [],
  };

  try {
    const brandsRes = await fetchBrandList();
    if (brandsRes.data.length > 0) brandList = brandsRes.data;

    const categoryRes = await fetchCategoryList({});
    if (categoryRes.data.length > 0) categoryList = categoryRes.data;

    criteria = {
      limit: 16,
      paging: 1,
      categoryIds: categoryList
        ? categoryList.map((ctg) => ctg.id.toString())
        : undefined,
      brandIds: [],
    };
    const productsRes = await getInternalProductList(criteria);
    if (productsRes.data.length > 0) {
      products = productsRes.data;
      productPaging = productsRes.paging;
    }
  } catch (err) {
    nimLog("error in ProductsPage ~ getStaticProps", err)("error");
  }
  return {
    props: {
      products,
      brandList,
      categoryList,
      productPaging,
      criteria,
    },
  };
};

export default ProductsPage;
