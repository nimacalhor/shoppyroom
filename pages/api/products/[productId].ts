import { nimLog } from "@modules/general/libraries/helpers";
import * as fs from "fs";
import path from "path";
import {
  Product,
  ProductDetailEntity,
} from "@modules/product/libraries/product-types";

const filePath = path.join(process.cwd(), "data/dev-data/products.json");
const data: Product[] = JSON.parse(
  fs.readFileSync(filePath, { encoding: "utf-8" })
);

export const getInternalProductDetail = async function (
  id: number
): Promise<ProductDetailEntity> {
  let product: Product | null = null;
  product = data.find((prd) => prd.id.toString() === id.toString()) || null;
  const response: ProductDetailEntity = {
    data: product,
    error: null,
    id,
    status_code: "200",
  };
  return new Promise((resolve) => resolve(response));
};
