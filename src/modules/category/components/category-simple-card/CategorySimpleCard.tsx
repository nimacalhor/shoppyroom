import { Category } from "@modules/category/libraries/category-types";
import stl from "./CategorySimpleCard.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Link from "next/link";

const CategorySimpleCard = ({ ctg }: { ctg: Category }) => {
  return (
    <Link href={ctg.link} passHref>
      <Paper component="div" className={stl.root}>
        <Image
          src={ctg.media.path}
          alt={ctg.media.description}
          layout="fill"
          objectFit="cover"
        />
        <Typography className={stl.root__title} variant="h5">
          {ctg.title}
        </Typography>
      </Paper>
    </Link>
  );
};

export default CategorySimpleCard;
