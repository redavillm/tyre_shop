import { TYRE_ACTIONS } from "../../../store_const";

export const setTyresSearchOptions = (data) => {
  return {
    type: TYRE_ACTIONS.SET_TYRES_SEARCH_OPTIONS,
    payload: data,
  };
};
