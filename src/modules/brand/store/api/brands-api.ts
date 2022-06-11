import { getBrandList } from "@main/pages/api/brands";
import { BrandListEntity } from "../../libraries/brand-types";

export const fetchBrandList = function (): Promise<BrandListEntity> {
  return getBrandList();
};
