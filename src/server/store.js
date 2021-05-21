import thunk from "redux-thunk";
import rootReducer from "../client/reducers";
import { createStore, applyMiddleware } from "redux";

const middleWare = [thunk];

export default () => {
  const store = createStore(rootReducer, {}, applyMiddleware(...middleWare));
  return store;
};
