import { CategoryListEntity } from "@modules/category/libraries/category-types";
import axios from "axios";

export const fetchCategoryList =
  async function (): Promise<CategoryListEntity> {
    try {
      const response = await axios.get<CategoryListEntity>("/api/categories");
      if (response.data) return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.reject();
  };
