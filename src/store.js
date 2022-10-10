import { compose, createStore } from "redux";
import rootReducers from "./store/reducers/rootReducers";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import getSaga from "./view/Rtk_Saga/saga";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducers, enhancer);
sagaMiddleware.run(getSaga);
export default store;
