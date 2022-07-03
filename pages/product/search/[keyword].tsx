import ProductFilter from "@modules/page-sections/components/product-filter";
import { Category } from "@modules/category/libraries/category-types";
import { fetchBrandList } from "@modules/brand/store/api/brands-api";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getInternalCategoryList } from "@main/pages/api/categories";
import { Brand } from "@modules/brand/libraries/brand-types";
import { nimLog } from "@modules/general/libraries/helpers";
import { getInternalProductList } from "../../api/products";
import {
  Paging,
  SORTING_TYPES,
} from "@modules/general/libraries/general-types";
import {
  Product,
  ProductCriteria,
} from "@modules/product/libraries/product-types";
import { fetchProductsList } from "@modules/product/store/api/product-api";

const ProductSearchPage = ({
  products,
  brandList,
  categoryList,
  productPaging,
  searchKeywords,
}: {
  products: Product[] | null;
  brandList: Brand[] | null;
  categoryList: Category[] | null;
  productPaging: Paging | null;
  searchKeywords: string;
}) => {
  return (
    <ProductFilter
      {...{
        products,
        brandList,
        categoryList,
        productPaging,
        title: searchKeywords,
      }}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async function ({
  params,
}: GetServerSidePropsContext) {
  const keyword = params && (params.keyword || ""),
    searchKeywords = keyword
      ? Array.isArray(keyword)
        ? keyword.join(" ")
        : keyword
      : undefined;
  let products: Product[] | null = null;
  let brandList: Brand[] | null = null;
  let categoryList: Category[] | null = null;
  let productPaging: Paging | null = null;
  let criteria: ProductCriteria = {
    limit: 12,
    paging: 1,
    searchKeywords,
  };

  try {
    const brandsRes = await fetchBrandList();
    if (brandsRes.data.length > 0) brandList = brandsRes.data;

    const categoryRes = await getInternalCategoryList();
    if (categoryRes.category_list.length > 0)
      categoryList = categoryRes.category_list;

    const productsRes = await getInternalProductList(criteria);
    if (productsRes.data.length > 0) {
      products = productsRes.data;
      productPaging = productsRes.paging;
    }
  } catch (err) {
    nimLog("error in ProductSearchPage ~ getStaticProps", err)("error");
  }
  return {
    props: {
      products,
      brandList,
      categoryList,
      productPaging,
      criteria,
      searchKeywords,
    },
  };
};

export default ProductSearchPage;
