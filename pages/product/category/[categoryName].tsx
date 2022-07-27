import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import ProductFilter from "@modules/page-sections/components/product-filter";
import { kebabCase, nimLog } from "@modules/general/libraries/helpers";
import { Category } from "@modules/category/libraries/category-types";
import { getInternalCategoryList } from "@main/pages/api/categories";
import { fetchBrandList } from "@modules/brand/store/api/brands-api";
import { getInternalProductList } from "@main/pages/api/products";
import { Brand } from "@modules/brand/libraries/brand-types";
import {
  Product,
  ProductCriteria,
  ProductListEntity,
} from "@modules/product/libraries/product-types";

const CategoryProductPage = ({
  category,
  brandList,
  categoryList,
  productList,
  productListEntity,
  criteria,
}: {
  category: Category | null;
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
          title: category?.title || "failed to get title",
          brandList,
          productPaging,
          defaultCategory: category?.id,
        }}
      />
    </>
  );
};

const getCategoryName = ({ params }: GetStaticPropsContext) => {
  let categoryName = "";
  if (params && params.categoryName) {
    if (Array.isArray(params.categoryName))
      categoryName = params.categoryName[0];
    else categoryName = params.categoryName;
  }
  return categoryName;
};

export const getStaticProps: GetStaticProps = async function (
  context: GetStaticPropsContext
) {
  let category: Category | null = null;
  let brandList: Brand[] | null = null;
  let categoryList: Category[] | null = null;
  let productList: Product[] | null = null;
  let productListEntity: ProductListEntity | null = null;
  const categoryName = getCategoryName(context);
  let criteria: ProductCriteria = { limit: 20 };
  try {
    const brandListRes = await fetchBrandList();
    if (brandListRes.data.length > 0) brandList = brandListRes.data;

    const categoryListRes = await getInternalCategoryList();
    if (categoryListRes.category_list.length > 0) {
      categoryList = categoryListRes.category_list;
      category =
        categoryListRes.category_list.find(
          (ctg) => kebabCase(ctg.title) === categoryName
        ) || null;
    }

    criteria = {
      limit: 20,
      categoryIds: category ? [category.id.toString()] : undefined,
    };

    const productListRes = await getInternalProductList(criteria);

    if (productListRes.data.length > 0) {
      productList = productListRes.data;
      productListEntity = { ...productListRes };
      if (productListEntity.sorting === undefined)
        delete productListEntity.sorting;
    }
  } catch (error) {
    nimLog("error in CategoryProductPage ~ getStaticProps", error)("error");
  }
  return {
    props: {
      category,
      categoryList,
      productList,
      criteria,
      brandList,
      productListEntity,
    },
  };
};

const getPaths = (categories: Category[]) =>
  categories.map((ctg) => ({
    params: { categoryName: kebabCase(ctg.title) },
  }));

export const getStaticPaths: GetStaticPaths = async function () {
  let categoryList: Category[] | null = null;
  try {
    const res = await getInternalCategoryList();
    if (res.category_list.length > 0) categoryList = res.category_list;
  } catch (err) {
    nimLog("error in CategoryProductPage ~ getStaticPath", err)("error");
  }
  return {
    paths: categoryList ? getPaths(categoryList) : [],
    fallback: false,
  };
};

export default CategoryProductPage;
