import { Product } from "@modules/product/libraries/product-types";
import { CartActions } from "../store/constants/cart-action-types";

export interface CartState {
  error: boolean | string;
  pending: boolean;
  items: CartProduct[];
}

export interface CartProduct {
  product: Product;
  quantity: number;
}

export interface AddCartAction {
  type: CartActions.ADD_ITEM;
  payload: {
    item: CartProduct;
  };
}
export interface RemoveCartAction {
  type: CartActions.REMOVE_ITEM;
  payload: {
    id: number | string;
  };
}
export interface AddItemQuantity {
  type: CartActions.ADD_ITEM_QUANTITY;
  payload: {
    id: number | string;
  };
}
export interface ReduceItemQuantity {
  type: CartActions.REDUCE_ITEM_QUANTITY;
  payload: {
    id: number | string;
  };
}
export interface ChangeItemQuantity {
  type: CartActions.CHANGE_ITEM_QUANTITY;
  payload: {
    id: number | string;
    amount: number;
  };
}
export interface RemoveAllAction {
  type: CartActions.REMOVE_ALL;
}
export interface LoadCartAction {
  type: CartActions.LOAD_CART;
}
export interface ErrorCart {
  type: CartActions.ERROR_CART;
  payload: {
    error: string | boolean;
  };
}
export interface PendingCart {
  type: CartActions.PENDING_CART;
  payload: {
    pending: boolean;
  };
}
