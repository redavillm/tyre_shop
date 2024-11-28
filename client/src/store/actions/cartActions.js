import { CART_ACTIONS } from "../store_const";

export const ADD_TO_CART = (id, type, count = 1) => ({
  type: CART_ACTIONS.ADD_TO_CART,
  payload: { id: id, type: type, count: count },
});
export const REMOVE_FROM_CART = (id) => ({
  type: CART_ACTIONS.REMOVE_FROM_CART,
  payload: id,
});

export const UPDATE_CART_ITEM = (id, count) => ({
  type: CART_ACTIONS.UPDATE_CART_ITEM,
  payload: { id, count },
});
