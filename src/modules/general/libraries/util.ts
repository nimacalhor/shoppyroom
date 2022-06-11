import { Action } from "redux";
export interface AppAction<T = string, P = any> extends Action {
  type: T;
  payload: P;
}
