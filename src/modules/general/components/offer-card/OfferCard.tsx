import Typography from "@mui/material/Typography";
import stl from "./OfferCard.module.scss";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Link from "next/link";

const OfferCard = ({
  href,
  title,
  src,
}: {
  href: string;
  title: string;
  src: string;
}) => {
  return (
    <Link href={href} passHref>
      <Paper className={stl.root}>
        <Typography className={stl.root__txt} variant="h6" component="span">{title}</Typography>
        <Image src={src} alt={title} width={210} height={210} />
      </Paper>
    </Link>
  );
};

export default OfferCard;
