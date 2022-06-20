import productReducer from "./product/store/reducer/product-reducer";
import cartReducer from "./cart/store/reducer/cart-reducer";

import { ProductState } from "./product/libraries/product-types";
import { CartState } from "./cart/libraries/cart-types";

import { combineReducers } from "redux";

export interface RootState {
  product: ProductState;
  cart: CartState;
}
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
