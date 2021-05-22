import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./actions/sagas";

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga);
export default store;
