import { MAIN_ACTIONS } from "../store_const";

export const initialSeterState = {
  isLoading: false,
  isError: false,
  isModalCartOpen: false,
};

export const seterReducer = (state = initialSeterState, action) => {
  switch (action.type) {
    case MAIN_ACTIONS.CHANGE_LOADING_IS_TRUE:
      return { ...state, isLoading: true };
    case MAIN_ACTIONS.CHANGE_LOADING_IS_FALSE:
      return { ...state, isLoading: false };
    case MAIN_ACTIONS.CHANGE_IS_ERROR:
      return { ...state, isError: !state.isError };
    case MAIN_ACTIONS.OPEN_CART_MODAL:
      return { ...state, isModalCartOpen: true };
    case MAIN_ACTIONS.CLOSE_CART_MODAL:
      return { ...state, isModalCartOpen: false };
    default:
      return state;
  }
};
