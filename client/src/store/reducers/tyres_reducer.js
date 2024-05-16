export const initialTyresState = {
  isWinter: false,
  isByParams: true,
  searchOptions: {
    width: "all",
    height: "all",
    radius: "all",
    brand: "all",
  },
  tyresList: [],
  filtredList: [],
};

export const tyresReducer = (state = initialTyresState, action) => {
  switch (action.type) {
    case "GET_TYRES_FROM_SERVER":
      return { ...state, tyresList: action.payload };
    case "SET_FILTRED_LIST":
      return { ...state, filtredList: action.payload };
    case "CHANGE_IS_WINTER":
      return { ...state, isWinter: !state.isWinter };
    case "CHANGE_IS_BY_PARAMS":
      return { ...state, isByParams: !state.isByParams };
    case "CHANGE_SEARCH_OPTIONS":
      return { ...state, searchOptions: action.payload };
    default:
      return state;
  }
};
