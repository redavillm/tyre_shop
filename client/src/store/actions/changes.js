import { CART_ACTIONS, MAIN_ACTIONS } from "../store_const";

export const CHANGE_IS_ERROR = {
  type: MAIN_ACTIONS.CHANGE_IS_ERROR,
};

export const CHANGE_LOADING_IS_FALSE = {
  type: MAIN_ACTIONS.CHANGE_LOADING_IS_FALSE,
};

export const CHANGE_LOADING_IS_TRUE = {
  type: MAIN_ACTIONS.CHANGE_LOADING_IS_TRUE,
};
export const OPEN_CART_MODAL = {
  type: MAIN_ACTIONS.OPEN_CART_MODAL,
};
export const CLOSE_CART_MODAL = {
  type: MAIN_ACTIONS.CLOSE_CART_MODAL,
};
export const RESET_CART = {
  type: CART_ACTIONS.RESET_CART,
};

export const SET_TOAST_MESSAGE = (data) => {
  return {
    type: MAIN_ACTIONS.SET_TOAST_MESSAGE,
    payload: data,
  };
};

export const SET_DEFAULT_TOAST_MESSAGE = {
  type: MAIN_ACTIONS.SET_DEFAULT_TOAST_MESSAGE,
};
