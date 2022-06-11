import { URLS } from "@modules/general/libraries/constants";
import { Product } from "./product-types";

export const generateProductLink = (prd: Product) =>
  `${URLS.PRODUCT.self}/${prd.id}`;
