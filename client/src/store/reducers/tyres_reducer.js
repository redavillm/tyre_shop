export const initialTyresState = {
  isWinter: false,
  isByParams: true,
  searchOptions: {
    width: "all",
    height: "all",
    radius: "all",
    brand: "all",
  },
  isFilter: false,
  tyresList: [],
  tyreById: [],
};

export const tyresReducer = (state = initialTyresState, action) => {
  switch (action.type) {
    case "GET_TYRES_FROM_SERVER":
      return { ...state, tyresList: action.payload };
    case "GET_TYRES_BY_ID":
      return { ...state, tyreById: action.payload };
    case "CHANGE_IS_WINTER":
      return { ...state, isWinter: !state.isWinter };
    case "CHANGE_TYRES_BY_PARAMS_TRUE":
      return { ...state, isByParams: true };
    case "CHANGE_TYRES_BY_PARAMS_FALSE":
      return { ...state, isByParams: false };
    case "CHANGE_TYRES_IS_FILTER":
      return { ...state, isFilter: true };
    case "SET_TYRES_SEARCH_OPTIONS":
      return { ...state, searchOptions: action.payload };
    default:
      return state;
  }
};
