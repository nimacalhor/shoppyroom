import {
  GetProductListAction,
  ProductCriteria,
  PutProductListAction,
  ProductListEntity,
  PendingProductListAction,
  ErrorProductListAction,
} from "../../libraries/product-types";
import { ProductActionTypes } from "../constants/product-action-types";

export const getProductList = (
  criteria: ProductCriteria
): GetProductListAction => ({
  type: ProductActionTypes.GET_PRODUCT_LIST,
  payload: { criteria },
});

export const putProductList = (
  criteria: ProductCriteria,
  productListEntity: ProductListEntity
): PutProductListAction => ({
  type: ProductActionTypes.PUT_PRODUCT_LIST,
  payload: { criteria, productListEntity },
});

export const putPendingProductList = (
  criteria: ProductCriteria,
  pending: boolean
): PendingProductListAction => ({
  type: ProductActionTypes.PUT_PENDING_PRODUCT_LIST,
  payload: {
    pending,
    criteria,
  },
});

export const putErrorProductList = (
  error: Error,
  criteria: ProductCriteria
): ErrorProductListAction => ({
  type: ProductActionTypes.PUT_ERROR_PRODUCT_LIST,
  payload: {
    error,
    criteria,
  },
});
