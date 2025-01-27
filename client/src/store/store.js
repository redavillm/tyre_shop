import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  tyresReducer,
  disksReducer,
  accumulatorsReducer,
  seterReducer,
  cartReducer,
} from "./reducers";

// const preloadCartState = () => {
//   try {
//     const localCartState = localStorage.getItem("cartState");
//     return localCartState ? JSON.parse(localCartState) : { items: [] };
//   } catch (e) {
//     console.error("Failed to load cart state from localStorage:", e);
//     return { items: [] };
//   }
// };

// const saveCartStateToLocalStorage = (state) => {
//   if (!state || !state.cartState) return;
//   try {
//     const localCartState = JSON.stringify(state.cartState);
//     localStorage.setItem("cartState", localCartState);
//   } catch (e) {
//     console.error("Failed to save cart state to localStorage:", e);
//   }
// };

// const preloadState = {
//   cartState: preloadCartState() || { items: [] },
// };

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
  // preloadState,
  composeEnhancers(applyMiddleware(thunk))
);

// store.subscribe(() => {
//   const state = store.getState();
//   console.log("State before saving to localStorage:", state.cartState);
//   saveCartStateToLocalStorage(state);
// });
