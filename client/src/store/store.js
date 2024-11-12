import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  tyresReducer,
  disksReducer,
  accumulatorsReducer,
  seterReducer,
  cartReducer,
} from "./reducers";

const preloadCartState = () => {
  const loacalCartState = localStorage.getItem("cartState");
  return loacalCartState ? JSON.parse(loacalCartState) : undefined;
};

const saveCartStateToLocalStorage = (state) => {
  const loacalCartState = JSON.stringify(state.cartState);
  localStorage.setItem("cartState", loacalCartState);
};

const preloadState = {
  cartState: preloadCartState(),
};

const reducer = combineReducers({
  tyresState: tyresReducer,
  disksState: disksReducer,
  accumulatorsState: accumulatorsReducer,
  seterState: seterReducer,
  cartState: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  preloadState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  const state = store.getState();
  saveCartStateToLocalStorage(state);
});
