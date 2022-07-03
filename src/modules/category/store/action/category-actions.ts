import { CategoryActionTypes } from "../constants/category-action-types";
import {
  GetCategoryListAction,
  PutCategoryListAction,
  PendingCategoryListAction,
  ErrorCategoryListAction,
  Category,
} from "../../libraries/category-types";

export const getCategoryList = (): GetCategoryListAction => ({
  type: CategoryActionTypes.GET_CATEGORY_LIST,
});
export const putCategoryList = (items: Category[]): PutCategoryListAction => ({
  type: CategoryActionTypes.PUT_CATEGORY_LIST,
  payload: {
    items,
  },
});
export const pendingCategoryList = (
  pending: boolean
): PendingCategoryListAction => ({
  type: CategoryActionTypes.PENDING_CATEGORY_LIST,
  payload: {
    pending,
  },
});
export const errorCategoryList = (
  error: string | null
): ErrorCategoryListAction => ({
  type: CategoryActionTypes.ERROR_CATEGORY_LIST,
  payload: {
    error,
  },
});
