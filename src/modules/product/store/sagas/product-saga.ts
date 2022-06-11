import { nimLog } from "@modules/general/libraries/helpers";
import { ProductActionTypes } from "../constants/product-action-types";
import { put, call, take, fork, takeEvery } from "redux-saga/effects";
import { fetchProductsList } from "../api/product-api";
import {
  putPendingProductList,
  putProductList,
  putErrorProductList,
} from "../actions/product-actions";
import {
  GetProductListAction,
  ProductListEntity,
} from "../../libraries/product-types";

function* productListFlow({ criteria }: GetProductListAction["payload"]) {
  try {
    yield put(putPendingProductList(criteria, true));

    const productListEntity: ProductListEntity = yield call(
      fetchProductsList,
      criteria
    );
    if (productListEntity.data.length > 0) {
      yield put(putProductList(criteria, productListEntity));
      yield put(putPendingProductList(criteria, false));
    } else {
      yield put(
        putErrorProductList(new Error("failed to fetch data"), criteria)
      );
      yield put(putPendingProductList(criteria, false));
    }
  } catch (error) {
    yield put(putErrorProductList(new Error("failed to fetch data"), criteria));
  }
}

function* productListWatcher() {
  while (true) {
    const { payload } = yield take(ProductActionTypes.GET_PRODUCT_LIST);
    yield fork(productListFlow, payload);
  }
}

export default productListWatcher;
