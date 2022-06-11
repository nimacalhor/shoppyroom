import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { Task } from "@redux-saga/core";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "@modules/rootReducer";
import rootSaga from "@modules/rootSaga";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const saga = createSagaMiddleware();

function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(saga))
  );
  (store as any).sagaTask = saga.run(rootSaga);
  return store;
}
export default configureStore;
export const wrapper = createWrapper(configureStore as any, { debug: false });
