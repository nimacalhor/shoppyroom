import { ProductActionTypes } from "../constants/product-action-types";
import { ProductState } from "./../../libraries/product-types";
import { AppAction } from "@modules/general/libraries/util";
import { HYDRATE } from "next-redux-wrapper";
import { Reducer } from "redux";
import {
  initProductState,
  addProductList,
  setPendingProductList,
  setErrorProductList,
} from "./product-helper";

const productReducer: Reducer<ProductState, AppAction> = function (
  state: ProductState = initProductState,
  action: AppAction
) {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case ProductActionTypes.PUT_PRODUCT_LIST:
      return addProductList(state, action.payload);

    case ProductActionTypes.PUT_PENDING_PRODUCT_LIST:
      return setPendingProductList(state, action.payload);

    case ProductActionTypes.PUT_ERROR_PRODUCT_LIST:
      return setErrorProductList(state, action.payload);

    default: {
      return { ...state };
    }
  }
};

export default productReducer;
