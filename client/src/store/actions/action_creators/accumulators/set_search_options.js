import { ACCUMULATOR_ACTIONS } from "../../../store_const";

export const setAccumulatorsSerachOptions = (data) => {
  return {
    type: ACCUMULATOR_ACTIONS.SET_ACCUMULATORS_SEARCH_OPTIONS,
    payload: data,
  };
};
