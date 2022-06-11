import { Sorting } from "./../../../general/libraries/general-types";
import { Product } from "@modules/product/libraries/product-types";
export const arrToQuery = function (
  title: string,
  arr: string[] | undefined
): string {
  if (!arr || arr.length === 0) return "";
  return arr.map((str) => `${title}=${str}&`).join("");
};
export const getSortingQuery = (sorting: Sorting | undefined) => {
  if (!sorting) return "";
  const { ascending, expression } = sorting;
  return `ascending=${ascending}&expression=${expression}`;
};

export const sortProductList = function (
  productList: Product[],
  sorting: Sorting,
  key: keyof Product
) {
  let newProductList = [...productList];
  if (sorting.ascending)
    newProductList = newProductList.sort(
      ({ [key]: a }, { [key]: b }) => Number(a) - Number(b)
    );
  else
    newProductList = newProductList.sort(
      ({ [key]: a }, { [key]: b }) => Number(b) - Number(a)
    );
  return newProductList;
};
