import { ACCUMULATOR_ACTIONS } from "../store_const";

export const initialAccumulatorsState = {
  isByParams: true,
  searchOptions: {
    size: "all",
    polarity: "all",
    capacity: "all",
    brand: "all",
  },
  isFilter: false,
  accumulatorsList: [],
  accumulatorById: [],
};

export const accumulatorsReducer = (
  state = initialAccumulatorsState,
  action
) => {
  switch (action.type) {
    case ACCUMULATOR_ACTIONS.GET_ACCUMULATORS_FROM_SERVER:
      return { ...state, accumulatorsList: action.payload };
    case ACCUMULATOR_ACTIONS.GET_ACCUMULATOR_BY_ID:
      return { ...state, accumulatorById: action.payload };
    case ACCUMULATOR_ACTIONS.CHANGE_ACCUMULATORS_IS_BY_PARAMS_TRUE:
      return { ...state, isByParams: true };
    case ACCUMULATOR_ACTIONS.CHANGE_ACCUMULATORS_IS_BY_PARAMS_FALSE:
      return { ...state, isByParams: false };
    case ACCUMULATOR_ACTIONS.ACCUMULATORS_FILTRED_TRUE:
      return { ...state, isFilter: true };
    case ACCUMULATOR_ACTIONS.SET_ACCUMULATORS_SEARCH_OPTIONS:
      return { ...state, searchOptions: action.payload };
    default:
      return state;
  }
};
