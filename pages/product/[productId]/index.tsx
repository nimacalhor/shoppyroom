import { getInternalProductDetail } from "@main/pages/api/products/[productId]";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import ProductDetail from "@modules/page-sections/components/product-detail";
import { SORTING_TYPES } from "@modules/general/libraries/general-types";
import { Product } from "@modules/product/libraries/product-types";
import { getInternalProductList } from "@main/pages/api/products";
import { nimLog } from "@modules/general/libraries/helpers";

const ProductDetailPage = ({
  product,
  productList,
}: {
  product: Product | null;
  productList: Product[] | null;
}) => {
  console.log(product);
  return <ProductDetail product={product} specialProductList={productList} />;
};

const getProductId = ({ params }: GetStaticPropsContext) => {
  let productId = "";
  if (params && params.productId) {
    if (Array.isArray(params.productId)) productId = params.productId[0];
    else productId = params.productId;
  }
  return Number(productId);
};

export const getStaticProps: GetStaticProps = async function (
  context: GetStaticPropsContext
) {
  let product: Product | null = null;
  let productList: Product[] | null = null;
  const productId = getProductId(context);
  try {
    const productRes = await getInternalProductDetail(productId);
    if (productRes.data) product = productRes.data;

    const productListRes = await getInternalProductList({
      limit: 3,
      sorting: {
        ascending: true,
        expression: SORTING_TYPES.promotion,
      },
    });
    if (productListRes.data.length > 0) productList = productListRes.data;
  } catch (error) {
    nimLog("error in ProductDetailPage ~ getStaticProps", error)("error");
  }
  return {
    props: {
      product,
      productList,
    },
  };
};

const getPath = (productList: Product[]) =>
  productList.map((prd) => ({ params: { productId: prd.id.toString() } }));

export const getStaticPaths: GetStaticPaths = async function () {
  let products: Product[] | null = null;
  try {
    const productRes = await getInternalProductList({
      limit: 100,
    });
    if (productRes.data.length > 0) products = productRes.data;
  } catch (error) {
    nimLog("error in ProductDetailPage ~ getStaticPaths", error)("error");
  }
  return {
    paths: products ? getPath(products) : [],
    fallback: false,
  };
};

export default ProductDetailPage;

// const specialProductsRes = await getInternalProductList({
//   limit: 5,
//   sorting: {
//     ascending: true,
//     expression: SORTING_TYPES.promotion,
//   },
// });
