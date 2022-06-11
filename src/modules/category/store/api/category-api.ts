import {
  CategoryCriteria,
  CategoryListEntity,
} from "@modules/category/libraries/category-types";
import { getCategoryList } from "@pages/api/category";

export const fetchCategoryList = async function (
  criteria: CategoryCriteria
): Promise<CategoryListEntity> {
  return getCategoryList(criteria);
};
