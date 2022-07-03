import { NextApiHandler } from "next";
import * as fs from "fs";
import path from "path";
import {
  Category,
  CategoryListEntity,
} from "@modules/category/libraries/category-types";

const filePath = path.join(process.cwd(), "data/dev-data/categories.json");
const stringCategory = fs.readFileSync(filePath, { encoding: "utf8" });

export const getInternalCategoryList =
  async function (): Promise<CategoryListEntity> {
    const categoryList: Category[] = JSON.parse(stringCategory);
    const response: CategoryListEntity = {
      status_code: 200,
      totalResults: categoryList.length,
      category_list: categoryList,
    };
    return new Promise((resolve) => resolve(response));
  };

const handler: NextApiHandler = function (_, res) {
  getInternalCategoryList()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
};

export default handler;
