export const MAIN_ACTIONS = {
  CHANGE_IS_ERROR: "CHANGE_IS_ERROR",
  CHANGE_LOADING_IS_FALSE: "CHANGE_LOADING_IS_FALSE",
  CHANGE_LOADING_IS_TRUE: "CHANGE_LOADING_IS_TRUE",
  OPEN_CART_MODAL: "OPEN_CART_MODAL",
  CLOSE_CART_MODAL: "CLOSE_CART_MODAL",
  SET_TOAST_MESSAGE: "SET_TOAST_MESSAGE",
  SET_DEFAULT_TOAST_MESSAGE: "SET_DEFAULT_TOAST_MESSAGE",
};

export const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_CART_ITEM: "UPDATE_CART_ITEM",
  RESET_CART: "RESET_CART",
};

export const DISK_ACTIONS = {
  GET_DISKS_FROM_SERVER: "GET_DISKS_FROM_SERVER",
  GET_DISK_BY_ID: "GET_DISK_BY_ID",
  CHANGE_DISKS_IS_BY_PARAMS_TRUE: "CHANGE_DISKS_IS_BY_PARAMS_TRUE",
  CHANGE_DISKS_IS_BY_PARAMS_FALSE: "CHANGE_DISKS_IS_BY_PARAMS_FALSE",
  SET_DISKS_SEARCH_OPTIONS: "SET_DISKS_SEARCH_OPTIONS",
};

export const ACCUMULATOR_ACTIONS = {
  GET_ACCUMULATORS_FROM_SERVER: "GET_ACCUMULATORS_FROM_SERVER",
  GET_ACCUMULATOR_BY_ID: "GET_ACCUMULATOR_BY_ID",
  CHANGE_ACCUMULATORS_IS_BY_PARAMS_TRUE:
    "CHANGE_ACCUMULATORS_IS_BY_PARAMS_TRUE",
  CHANGE_ACCUMULATORS_IS_BY_PARAMS_FALSE:
    "CHANGE_ACCUMULATORS_IS_BY_PARAMS_FALSE",
  SET_ACCUMULATORS_SEARCH_OPTIONS: "SET_ACCUMULATORS_SEARCH_OPTIONS",
};

export const TYRE_ACTIONS = {
  GET_TYRES_FROM_SERVER: "GET_TYRES_FROM_SERVER",
  GET_TYRES_BY_ID: "GET_TYRES_BY_ID",
  CHANGE_TYRES_BY_PARAMS_TRUE: "CHANGE_TYRES_BY_PARAMS_TRUE",
  CHANGE_TYRES_BY_PARAMS_FALSE: "CHANGE_TYRES_BY_PARAMS_FALSE",
  SET_TYRES_SEARCH_OPTIONS: "SET_TYRES_SEARCH_OPTIONS",
};
