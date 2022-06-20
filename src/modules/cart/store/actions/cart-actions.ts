import { Product } from "@modules/product/libraries/product-types";
import { CartActions } from "../constants/cart-action-types";
import { CartProduct } from "../../libraries/cart-types";
import {
  AddCartAction,
  RemoveCartAction,
  RemoveAllAction,
  LoadCartAction,
  ErrorCart,
  AddItemQuantity,
  PendingCart,
  ReduceItemQuantity,
  ChangeItemQuantity,
} from "../../libraries/cart-types";

export const addCartItem = (product: Product): AddCartAction => ({
  type: CartActions.ADD_ITEM,
  payload: { product },
});
export const removeCartItem = (id: string | number): RemoveCartAction => ({
  type: CartActions.REMOVE_ITEM,
  payload: { id },
});
export const removeCartAllItems = (): RemoveAllAction => ({
  type: CartActions.REMOVE_ALL,
});
export const loadCart = (): LoadCartAction => ({ type: CartActions.LOAD_CART });
export const errorCart = (error: string): ErrorCart => ({
  type: CartActions.ERROR_CART,
  payload: {
    error,
  },
});
export const pendingCart = (pending: boolean): PendingCart => ({
  type: CartActions.PENDING_CART,
  payload: { pending },
});
export const addCartItemQuantity = (id: number): AddItemQuantity => ({
  type: CartActions.ADD_ITEM_QUANTITY,
  payload: {
    id,
  },
});
export const reduceCartItemQuantity = (id: number): ReduceItemQuantity => ({
  type: CartActions.REDUCE_ITEM_QUANTITY,
  payload: {
    id,
  },
});
export const changeCartItemQuantity = (
  id: number,
  amount: number
): ChangeItemQuantity => ({
  type: CartActions.CHANGE_ITEM_QUANTITY,
  payload: {
    id,
    amount,
  },
});
