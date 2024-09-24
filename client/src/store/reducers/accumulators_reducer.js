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
    case "GET_ACCUMULATORS_FROM_SERVER":
      return { ...state, accumulatorsList: action.payload };
    case "GET_ACCUMULATOR_BY_ID":
      return { ...state, accumulatorById: action.payload };
    case "CHANGE_ACCUMULATORS_IS_BY_PARAMS_TRUE":
      return { ...state, isByParams: true };
    case "CHANGE_ACCUMULATORS_IS_BY_PARAMS_FALSE":
      return { ...state, isByParams: false };
    case "SET_ACCUMULATORS_SEARCH_OPTIONS":
      return { ...state, searchOptions: action.payload };
    case "CHANGE_ACCUMULATORS_FILTRED_TRUE":
      return { ...state, isFilter: true };
    default:
      return state;
  }
};
