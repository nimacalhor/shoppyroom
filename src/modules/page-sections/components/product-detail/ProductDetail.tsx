import useDeviceType from "@modules/general/libraries/device-type";
import { Product } from "@modules/product/libraries/product-types";
import stl from "./ProductDetail.module.scss";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";
const ProductImage = dynamic(
    () => import("@modules/product/components/main-image")
  ),
  ProductInfo = dynamic(() => import("@modules/product/components/main-info")),
  ProductGeneralInfo = dynamic(
    () => import("@modules/product/components/general-info")
  ),
  SpecialProducts = dynamic(
    () => import("@modules/product/components/special-products")
  );

const ProductDetail = ({
  product,
  specialProductList,
}: {
  product: Product | null;
  specialProductList: Product[] | null;
}) => {
  const deviceType = useDeviceType();
  return (
    <div className={`${stl.root}`}>
      <Grid direction={deviceType.isMobileOrTablet ? "column-reverse" : "row"} container spacing={2}>
        <Grid item xs={12} md={6}>
          {product && <ProductInfo product={product} />}
        </Grid>
        <Grid item xs={12} md={6}>
          {product && <ProductImage media={product.media} />}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {deviceType.isScreen && (
          <Grid item md={3}>
            {specialProductList && (
              <SpecialProducts productList={specialProductList} />
            )}
          </Grid>
        )}
        <Grid item md={9}>
          {product && <ProductGeneralInfo body={product.description} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetail;
