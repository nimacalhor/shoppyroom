import productReducer from "./product/store/reducer/product-reducer";
import { ProductState } from "./product/libraries/product-types";
import { combineReducers } from "redux";

export interface RootState {
  product: ProductState;
}
const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
