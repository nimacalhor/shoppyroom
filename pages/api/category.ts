import * as fs from "fs";
import path from "path";
import {
  CategoryCriteria,
  Category,
  CategoryListEntity,
} from "@modules/category/libraries/category-types";

const filePath = path.join(process.cwd(), "data/dev-data/categories.json");

export const getCategoryList = function (
  criteria: CategoryCriteria
): Promise<CategoryListEntity> {
  const categoryList: Category[] = JSON.parse(
    fs.readFileSync(filePath, { encoding: "utf8" })
  );
  const response: CategoryListEntity = {
    status_code: 200,
    totalResults: categoryList.length,
    data: categoryList,
  };
  return new Promise((resolve) => resolve(response));
};
