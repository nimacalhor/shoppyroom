import ProductFilter from "@modules/page-sections/components/product-filter";
import { Category } from "@modules/category/libraries/category-types";
import { getInternalCategoryList } from "@main/pages/api/categories";
import { fetchBrandList } from "@modules/brand/store/api/brands-api";
import { Brand } from "@modules/brand/libraries/brand-types";
import { nimLog } from "@modules/general/libraries/helpers";
import { getInternalProductList } from "../../api/products";
import { GetStaticProps } from "next";
import {
  Paging,
  SORTING_TYPES,
} from "@modules/general/libraries/general-types";
import {
  Product,
  ProductCriteria,
} from "@modules/product/libraries/product-types";

const NewArrivalProductPage = ({
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
        title: "new arrivals 🆕",
        defaultLimit: 12,
        defaultSorting: SORTING_TYPES.new,
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
    limit: 12,
    paging: 1,
    sorting: {
      expression: SORTING_TYPES.new,
      ascending: true,
    },
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
    nimLog("error in NewArrivalProductPage ~ getStaticProps", err)("error");
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

export default NewArrivalProductPage;
