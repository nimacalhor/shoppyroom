import { CartState } from "@modules/cart/libraries/cart-types";
import { CartActions } from "../constants/cart-action-types";
import { AppAction } from "@modules/general/libraries/util";
import { Reducer } from "redux";
import {
  addItem,
  addItemQuantity,
  changeItemQuantity,
  initState,
  loadCart,
  reduceItemQuantity,
  removeAll,
  removeItem,
  setError,
  setPending,
} from "./cart-helper";

const cartReducer: Reducer<CartState, AppAction> = function (
  state: CartState = initState,
  action: AppAction
): CartState {
  switch (action.type) {
    case CartActions.ADD_ITEM:
      return addItem(state, action.payload);

    case CartActions.REMOVE_ITEM:
      return removeItem(state, action.payload);

    case CartActions.ADD_ITEM_QUANTITY:
      return addItemQuantity(state, action.payload);

    case CartActions.CHANGE_ITEM_QUANTITY:
      return changeItemQuantity(state, action.payload);

    case CartActions.REDUCE_ITEM_QUANTITY:
      return reduceItemQuantity(state, action.payload);

    case CartActions.REMOVE_ALL:
      return removeAll(state);

    case CartActions.LOAD_CART:
      return loadCart(state);

    case CartActions.ERROR_CART:
      return setError(state, action.payload);

    case CartActions.PENDING_CART:
      return setPending(state, action.payload);

    default:
      return { ...state };
  }
};

export default cartReducer;
