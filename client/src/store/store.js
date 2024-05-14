import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  tyresReducer,
  disksReducer,
  accumulatorsReducer,
  seterReducer,
} from "./reducers";

const reducer = combineReducers({
  tyresState: tyresReducer,
  disksState: disksReducer,
  acumulatorsState: accumulatorsReducer,
  seterStore: seterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
