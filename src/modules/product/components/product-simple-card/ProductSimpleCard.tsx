import { generateProductLink } from "@modules/product/libraries/helper";
import { Product } from "@modules/product/libraries/product-types";
import { trimText } from "@modules/general/libraries/helpers";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import stl from "./ProductSimpleCard.module.scss";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";

const ProductSimpleCard = ({ product }: { product: Product }) => {
  const { media, title, category, price } = product;
  return (
    <Link href={generateProductLink(product)} passHref>
      <Paper component="div" className={stl.root}>
        <IconButton color="primary" className={stl.root__addButton}>
          <LocalMallIcon />
        </IconButton>
        <Stack className={stl.root__stack} direction={"column"}>
          <div className={stl.root__stack__img}>
            <Image
              src={media.path}
              layout="responsive"
              width={media.width}
              height={media.height}
              alt={title}
            />
          </div>
          <div className={stl.root__stack__info}>
            <Typography variant="h6">{trimText(title, 50)}</Typography>
            <Typography variant="caption">{category.title}</Typography>
            <Typography>{price}</Typography>
          </div>
        </Stack>
      </Paper>
    </Link>
  );
};

export default ProductSimpleCard;
