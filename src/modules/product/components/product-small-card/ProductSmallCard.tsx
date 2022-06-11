import { kebabCase, trimText } from "@modules/general/libraries/helpers";
import { Product } from "@modules/product/libraries/product-types";
import Typography from "@mui/material/Typography";
import stl from "./ProductSmallCard.module.scss";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

const ProductSmallCard = ({ product }: { product: Product }) => {
  const { media, title, price, id } = product;
  return (
    // <Link href={`/product/${id}/${kebabCase(trimText(title, 20))}`} passHref>
    <Link href={`/product/${id}`} passHref>
      <Grid
        spacing={2}
        className={stl.root}
        container
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Grid item xs={7}>
          <Typography>{title}</Typography>
          <Typography>{price}</Typography>
        </Grid>
        <Grid item xs={5}>
          <div className={stl.root__img}>
            <Image
              layout="responsive"
              height={media.height}
              width={media.width}
              alt={media.description}
              src={media.path}
            />
          </div>
        </Grid>
      </Grid>
    </Link>
  );
};

export default ProductSmallCard;
