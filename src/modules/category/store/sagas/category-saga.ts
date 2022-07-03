import { CategoryActionTypes } from "./../constants/category-action-types";
import { CategoryListEntity } from "../../libraries/category-types";
import { put, call, takeEvery } from "redux-saga/effects";
import { fetchCategoryList } from "../api/category-api";
import {
  putCategoryList,
  pendingCategoryList,
  errorCategoryList,
} from "../action/category-actions";

function* categoryListFlow() {
  try {
    yield put(pendingCategoryList(true));
    const categoryListEntity: CategoryListEntity = yield call(
      fetchCategoryList
    );
    if (categoryListEntity.category_list.length > 0) {
      yield put(putCategoryList(categoryListEntity.category_list));
      yield put(pendingCategoryList(false));
    } else {
      yield put(errorCategoryList("no item found"));
      yield put(pendingCategoryList(false));
    }
  } catch (err) {
    yield put(errorCategoryList("error fetching data"));
  }
}

function* categoryListWatcher() {
  yield takeEvery(CategoryActionTypes.GET_CATEGORY_LIST, categoryListFlow);
}

export default categoryListWatcher;
