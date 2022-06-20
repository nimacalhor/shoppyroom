import { CartState } from "./../../libraries/cart-types";
import {
  AddCartAction,
  AddItemQuantity,
  CartProduct,
  ErrorCart,
  PendingCart,
  ReduceItemQuantity,
  RemoveCartAction,
  ChangeItemQuantity,
} from "../../libraries/cart-types";

export const initState: CartState = {
  error: false,
  pending: false,
  items: [],
};

function saveCart(cart: CartProduct[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export const addItem = function (
  state: CartState,
  payload: AddCartAction["payload"]
): CartState {
  const { product } = payload;
  const otherItems = state.items.filter(
    (item) => item.product.id !== product.id
  );
  const [prevItem] = state.items.filter(
    (item) => item.product.id === product.id
  );
  const result = [...otherItems];
  const newItem: CartProduct = {
    product,
    quantity: prevItem ? Number(prevItem.quantity) + 1 : 1,
  };
  result.push(newItem);
  saveCart(result);
  return {
    ...state,
    items: result,
  };
};

export const removeItem = function (
  state: CartState,
  payload: RemoveCartAction["payload"]
): CartState {
  const { id } = payload;
  const newItems = [...state.items].filter(
    ({ product }) => product.id !== Number(id)
  );
  saveCart(newItems);
  return {
    ...state,
    items: newItems,
  };
};

export const removeAll = function (state: CartState): CartState {
  const newItems: CartProduct[] = [];
  saveCart(newItems);
  return {
    ...state,
    items: [],
  };
};

export const loadCart = function (state: CartState): CartState {
  const cart = localStorage.getItem("cart");
  let items: CartProduct[] = [];
  if (cart && cart !== "") items = JSON.parse(cart);
  return {
    ...state,
    items,
  };
};

export const setError = function (
  state: CartState,
  payload: ErrorCart["payload"]
): CartState {
  const { error } = payload;
  return {
    ...state,
    error: error || true,
  };
};

export const setPending = function (
  state: CartState,
  payload: PendingCart["payload"]
): CartState {
  const { pending } = payload;
  return {
    ...state,
    pending,
  };
};

export const addItemQuantity = function (
  state: CartState,
  payload: AddItemQuantity["payload"]
): CartState {
  const { id } = payload;
  const otherItems = state.items.filter((item) => item.product.id !== id);
  const [item] = state.items.filter((item) => item.product.id === id);
  const result = [...otherItems];
  if (item)
    result.push({
      product: item.product,
      quantity: item.quantity ? item.quantity + 1 : 1,
    });
  saveCart(result);
  return {
    ...state,
    items: result,
  };
};

export const reduceItemQuantity = function (
  state: CartState,
  payload: ReduceItemQuantity["payload"]
): CartState {
  const { id } = payload;
  const otherItems = state.items.filter((item) => item.product.id !== id);
  const [item] = state.items.filter((item) => item.product.id === id);
  const result = [...otherItems];
  if (item && item.quantity && item.quantity > 1)
    result.push({
      product: item.product,
      quantity: item.quantity - 1,
    });
  saveCart(result);
  return {
    ...state,
    items: result,
  };
};

export const changeItemQuantity = function (
  state: CartState,
  payload: ChangeItemQuantity["payload"]
): CartState {
  const { id, amount } = payload;
  const otherItems = state.items.filter((item) => item.product.id !== id);
  const [item] = state.items.filter((item) => item.product.id === id);
  const result = [...otherItems];
  if (item)
    result.push({
      product: item.product,
      quantity: amount,
    });
  saveCart(result);
  return {
    ...state,
    items: result,
  };
};
