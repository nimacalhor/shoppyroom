import AlbumSlider from "@modules/album/components/album-slider";
import FloatText from "@modules/general/components/float-text";
import { Album } from "@modules/album/libraries/album-types";
import { URLS } from "@modules/general/libraries/constants";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import stl from "./MainHero.module.scss";
import { useRouter } from "next/router";
import { Theme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

const MainHero = ({
  theme,
  albumList,
}: {
  theme: Theme;
  albumList: Album[];
}) => {
  const router = useRouter();
  const { palette } = theme;
  return (
    <Grid
      className={stl.root}
      spacing={2}
      sx={{ p: 2 }}
      justifyContent="space-between"
      container
    >
      <Grid
        className={stl["root__products-cta"]}
        onClick={() => router.push(URLS.PRODUCT.self)}
        item
        md={4}
      >
        <FloatText padding={[1, 8]} inset={["15rem", "auto", "auto", "3.5vw"]}>
          <Typography variant="h5">browse all products</Typography>
        </FloatText>
        <FloatText
          padding={[1, 8]}
          inset={["17.5rem", "auto", "auto", "3.5vw"]}
        >
          <Link href={URLS.PRODUCT.self}>
            <Button sx={{ color: palette.common.white }} variant="text">
              more
            </Button>
          </Link>
        </FloatText>
        <Image
          src="/images/general/room-interior-design.jpg"
          layout="raw"
          alt="all products"
          width={413}
          height={618}
          className={stl["root__products-cta__bg"]}
          priority
        />
      </Grid>
      <Grid sx={{ pt: 0 }} item md={8}>
        <AlbumSlider albumList={albumList} />
      </Grid>
    </Grid>
  );
};

export default MainHero;
