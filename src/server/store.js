// import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../client/actions/sagas";
// import thunk from "redux-thunk";
import rootReducer from "../client/reducers";
// import { createStore, applyMiddleware } from "redux";

// const middleWare = [thunk];
const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

export default () => {
  const store = createStore(rootReducer, {}, applyMiddleware(...middleWare));
  // const store = createStore(rootReducer, applyMiddleware(...middleWare));
  sagaMiddleware.run(rootSaga);
  return store;
};

// export default store;
