import { fetchCategoryList } from "@modules/category/store/api/category-api";
import { Category } from "@modules/category/libraries/category-types";
import { fetchBrandList } from "@modules/brand/store/api/brands-api";
import { fetchAlbumList } from "@modules/album/store/api/album-api";
import useDeviceType from "@modules/general/libraries/device-type";
import { Product } from "@modules/product/libraries/product-types";
import { Album } from "@modules/album/libraries/album-types";
import { Brand } from "@modules/brand/libraries/brand-types";
import { URLS } from "@modules/general/libraries/constants";
import { nimLog } from "@modules/general/libraries/helpers";
import { getInternalProductList } from "./api/products";
import { useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const MainHero = dynamic(
    () => import("@modules/page-sections/components/main-hero")
  ),
  Offerings = dynamic(
    () => import("@modules/page-sections/components/offerings")
  ),
  MainCategory = dynamic(
    () => import("@modules/page-sections/components/main-category")
  ),
  BrandsOverview = dynamic(
    () => import("@modules/page-sections/components/brands-overview")
  ),
  ProductsOverviewSlider = dynamic(
    () => import("@modules/product/components/product-list-overview-slider")
  );

const MainPage = ({
  albumList,
  categoryList,
  brandList,
  productList,
}: {
  albumList: Album[] | null;
  categoryList: Category[] | null;
  brandList: Brand[] | null;
  productList: {
    chandelier: Product[] | null;
    bed: Product[] | null;
  };
}) => {
  const theme = useTheme();
  const deviceType = useDeviceType();
  return (
    <>
      {deviceType.isScreen && albumList && (
        <MainHero {...{ theme, albumList }} />
      )}
      <Offerings />
      {categoryList && <MainCategory categoryList={categoryList} />}
      {brandList && <BrandsOverview brandsList={brandList} />}
      {productList.chandelier && (
        <ProductsOverviewSlider
          title="chandeliers"
          href={URLS.CATEGORY.CHANDELIER}
          deviceType={deviceType}
          productList={productList.chandelier}
        />
      )}
      {productList.bed && (
        <ProductsOverviewSlider
          title="bed"
          href={URLS.CATEGORY.BED}
          deviceType={deviceType}
          productList={productList.bed}
        />
      )}
    </>
  );
};

export const getStaticProps = async function () {
  let albumList: Album[] | null = null;
  let categoryList: Category[] | null = null;
  let brandList: Brand[] | null = null;
  let productList: {
    chandelier: Product[] | null;
    bed: Product[] | null;
  } = { chandelier: null, bed: null };

  try {
    const albumListRes = await fetchAlbumList();
    if (albumListRes.totalResults > 0) albumList = albumListRes.data;

    const categoryListRes = await fetchCategoryList({});
    if (categoryListRes.totalResults > 0) categoryList = categoryListRes.data;

    const brandListRes = await fetchBrandList();
    if (brandListRes.totalResults > 0) brandList = brandListRes.data;

    const [productChanListRes, productBedListRes] = await Promise.all([
      getInternalProductList({
        brandIds: [],
        categoryIds: ["2"],
        limit: 5,
      }),
      getInternalProductList({
        brandIds: [],
        categoryIds: categoryList
          ? [categoryList.map((ctg) => ctg.id.toString())[0]]
          : undefined,
        limit: 5,
      }),
    ]);
    if (productChanListRes.data.length > 0)
      productList.chandelier = productChanListRes.data;
    if (productBedListRes.data.length > 0)
      productList.bed = productBedListRes.data;
  } catch (err: any) {
    nimLog("error ~ main page ~ staticProps", err)("error");
  }
  return {
    props: {
      albumList,
      categoryList,
      brandList,
      productList,
    },
  };
};

export default MainPage;
