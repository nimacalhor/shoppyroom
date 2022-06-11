import productSaga from "./product/store/sagas";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([productSaga()]);
}

export default rootSaga;
