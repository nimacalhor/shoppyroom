import { Product } from "@modules/product/libraries/product-types";
import ProductSmallCard from "../product-small-card";
import Typography from "@mui/material/Typography";
import stl from './SpecialProducts.module.scss'
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Fragment } from "react";

const SpecialProducts = ({ productList }: { productList: Product[] }) => {
  return (
    <Paper className={`${stl.root} panel`}>
      <Typography gutterBottom variant="h5">special products</Typography>
      <Divider sx={{ my: 2 }} />

      {productList.map((prd) => (
        <Fragment key={prd.id}>
          <ProductSmallCard product={prd}  />
          <Divider sx={{ my: 2 }} />
        </Fragment>
      ))}
    </Paper>
  );
};

export default SpecialProducts;
