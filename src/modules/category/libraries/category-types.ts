import { CategoryActionTypes } from "../store/constants/category-action-types";
import { Media } from "@modules/general/libraries/general-types";

export interface Category {
  id: number;
  priority: number;
  title: string;
  description: string;
  link: string;
  media: Media;
}

export interface CategoryCriteria {
  limit?: number;
  keywords?: string[];
}

export interface CategoryListEntity {
  status_code: number;
  totalResults: number;
  category_list: Category[];
}

export interface GetCategoryListAction {
  type: CategoryActionTypes.GET_CATEGORY_LIST;
}
export interface PutCategoryListAction {
  type: CategoryActionTypes.PUT_CATEGORY_LIST;
  payload: {
    items: Category[];
  };
}
export interface PendingCategoryListAction {
  type: CategoryActionTypes.PENDING_CATEGORY_LIST;
  payload: {
    pending: boolean;
  };
}
export interface ErrorCategoryListAction {
  type: CategoryActionTypes.ERROR_CATEGORY_LIST;
  payload: {
    error: string | null;
  };
}
