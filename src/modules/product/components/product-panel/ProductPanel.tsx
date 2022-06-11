import { BrandsCheckbox, CategoryToggle, SearchInResults } from "./index";
import { Category } from "@modules/category/libraries/category-types";
import { Brand } from "@modules/brand/libraries/brand-types";
import Stack from "@mui/material/Stack";
const ProductPanel = ({
  brandList,
  categoryList,
  onSearchSubmit,
  onBrandChange,
  onCtgChange,
}: {
  brandList: Brand[] | null;
  categoryList: Category[] | null;
  onSearchSubmit: (value: string) => void;
  onBrandChange: (state: (string | undefined)[]) => void;
  onCtgChange: (ctgArr: string[]) => void;
}) => {
  return (
    <Stack spacing={2}>
      <SearchInResults onSubmit={onSearchSubmit} />
      {brandList && (
        <BrandsCheckbox brandList={brandList} onChange={onBrandChange} />
      )}
      {categoryList && (
        <CategoryToggle categoryList={categoryList} onChange={onCtgChange} />
      )}
    </Stack>
  );
};

export default ProductPanel;
