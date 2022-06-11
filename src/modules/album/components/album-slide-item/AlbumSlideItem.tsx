import { Album } from "@modules/album/libraries/album-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import stl from "./AlbumSlides.module.scss";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

const AlbumSlideItem = ({ album }: { album: Album }) => {
  const { media, title, description, link_title, link } = album;
  return (
    <Grid className={stl.root} container spacing={2}>
      <Grid className={stl.root__txtbox} item md={7}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Link href={link} passHref>
          <Button
            variant="contained"
            className={stl.root__txtbox__link}
            color="primary"
          >
            {link_title || "buy now"}
          </Button>
        </Link>
      </Grid>
      <Grid item md={5}>
        <Image
          priority
          src={media.path}
          width={media.width}
          height={media.height}
          alt={media.description}
          layout="raw"
        />
      </Grid>
    </Grid>
  );
};

export default AlbumSlideItem;
