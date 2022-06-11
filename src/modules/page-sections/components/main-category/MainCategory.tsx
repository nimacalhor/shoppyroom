import CategorySimpleCard from "@modules/category/components/category-simple-card";
import SectionHeading from "@modules/general/components/section-heading";
import { Category } from "@modules/category/libraries/category-types";
import { URLS } from "@modules/general/libraries/constants";
import stl from "./MainCategory.module.scss";
import Grid from "@mui/material/Grid";

const MainCategory = ({ categoryList }: { categoryList: Category[] }) => {
  return (
    <>
      <SectionHeading title="categories" href={URLS.PRODUCT.self} />
      <Grid className={stl.root__grid} container spacing={2} >
        {categoryList.map((ctg, i) => (
          <Grid item key={i}>
            <CategorySimpleCard ctg={ctg} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MainCategory;
