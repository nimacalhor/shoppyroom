import { Product } from "@modules/product/libraries/product-types";
import ProductSimpleCard from "../product-simple-card";
import Grid from "@mui/material/Grid";

const ProductGrid = ({ products }: { products: Product[] | null }) => {
  return (
    <>
      {products ? (
        <Grid
          justifyContent={"space-between"}
          sx={{ px: 3 }}
          container
          spacing={3}
        >
          {products.map((prd) => (
            <Grid item xs={"auto"} sm={4} lg={3} key={prd.id}>
              <ProductSimpleCard product={prd} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ProductGrid;
