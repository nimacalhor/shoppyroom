import productListWatcher from "./product-saga";
import { all } from "redux-saga/effects";

function* productSaga() {
  yield all([productListWatcher()]);
}

export default productSaga;
