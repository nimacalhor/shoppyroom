import * as fs from "fs";
import path from "path";
import { Brand, BrandListEntity } from "@modules/brand/libraries/brand-types";

const filePath = path.join(process.cwd(), "data/dev-data/brands.json");

export const getBrandList = function (): Promise<BrandListEntity> {
  const brandList: Brand[] = JSON.parse(
    fs.readFileSync(filePath, { encoding: "utf8" })
  );
  const response: BrandListEntity = {
    status_code: 200,
    totalResults: brandList.length,
    data: brandList,
  };
  return new Promise((resolve) => resolve(response));
};
