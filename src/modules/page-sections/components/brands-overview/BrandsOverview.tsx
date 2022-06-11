import { Brand } from "@modules/brand/libraries/brand-types";
import Typography from "@mui/material/Typography";
import stl from "./BrandsOverview.module.scss";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

const BrandsOverview = ({ brandsList }: { brandsList: Brand[] }) => {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      component="div"
      className={stl.root}
    >
      <Stack
        className={stl.root__stack}
        direction="column"
        alignItems={"center"}
      >
        <Typography variant="h5" gutterBottom>
          Buy from the most prestigious brands in the world!
        </Typography>
        <Typography>
          We have gathered room decoration products of reputable brands in one
          place so that you can have a comfortable and safe purchase.
        </Typography>
      </Stack>
      <Grid className={stl.root__grid} container spacing={2}>
        {brandsList.map((brand) => (
          <Link key={brand.id} href={brand.url} passHref>
            <Grid className={stl.root__grid__item} item>
              <Image
                src={brand.media.path}
                alt={brand.title}
                height={200}
                width={200}
              />
            </Grid>
          </Link>
        ))}
      </Grid>
    </Stack>
  );
};

export default BrandsOverview;
