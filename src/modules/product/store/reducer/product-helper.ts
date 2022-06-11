import hash from "@modules/general/libraries/hash";
import {
  ProductState,
  PutProductListAction,
  ProductStateListItem,
  PendingProductListAction,
  ErrorProductListAction,
} from "../../libraries/product-types";

export const initProductState: ProductState = {
  list: {},
};

export const addProductList = function (
  state: ProductState,
  payload: PutProductListAction["payload"]
) {
  const { criteria, productListEntity } = payload;
  const key = hash(criteria);
  const newItem: ProductStateListItem = {
    criteria,
    error: null,
    items: productListEntity.data,
    pending: false,
  };
  let newList: ProductState["list"] = { ...state.list };
  if (state.list[key]) {
    newList[key] = newItem;
  } else
    newList = {
      ...state.list,
      ...{ [key]: newItem },
    };

  return {
    ...state,
    list: { ...newList },
  };
};
export const setPendingProductList = function (
  state: ProductState,
  payload: PendingProductListAction["payload"]
) {
  const { criteria, pending } = payload;
  const key = hash(criteria);
  const newItem: ProductStateListItem = {
    criteria,
    error: null,
    items: [],
    pending,
  };
  let newList: ProductState["list"] = { ...state.list };
  if (state.list[key]) {
    newList[key].pending = pending;
  } else
    newList = {
      ...state.list,
      ...{ [key]: newItem },
    };
  return {
    ...state,
    list: { ...newList },
  };
};
export const setErrorProductList = function (
  state: ProductState,
  payload: ErrorProductListAction["payload"]
) {
  const { criteria, error } = payload;
  const key = hash(criteria);
  const newItem: ProductStateListItem = {
    criteria,
    items: [],
    error,
    pending: false,
  };
  let newList: ProductState["list"] = { ...state.list };
  if (state.list[key]) {
    newList[key].error = error;
  } else
    newList = {
      ...state.list,
      ...{ [key]: newItem },
    };
  return {
    ...state,
    list: { ...newList },
  };
};
