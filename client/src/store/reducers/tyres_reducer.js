import { TYRE_ACTIONS } from "../store_const";

export const initialTyresState = {
  isByParams: true,
  searchOptions: {
    width: "all",
    height: "all",
    radius: "all",
    brand: "all",
    season: "all",
    spiked: "all",
  },
  tyresList: [],
  tyreById: [],
};

export const tyresReducer = (state = initialTyresState, action) => {
  switch (action.type) {
    case TYRE_ACTIONS.GET_TYRES_FROM_SERVER:
      return { ...state, tyresList: action.payload };
    case TYRE_ACTIONS.GET_TYRES_BY_ID:
      return { ...state, tyreById: action.payload };
    case TYRE_ACTIONS.CHANGE_TYRES_BY_PARAMS_TRUE:
      return { ...state, isByParams: true };
    case TYRE_ACTIONS.CHANGE_TYRES_BY_PARAMS_FALSE:
      return { ...state, isByParams: false };
    case TYRE_ACTIONS.SET_TYRES_SEARCH_OPTIONS:
      return { ...state, searchOptions: action.payload };
    default:
      return state;
  }
};
