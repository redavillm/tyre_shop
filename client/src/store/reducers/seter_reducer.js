export const initialSeterState = {
  refreshListFlag: false,
  isLoading: false,
  isError: false,
};

export const seterReducer = (state = initialSeterState, action) => {
  switch (action.type) {
    case "CHANGE_REFRESH_LIST_FLAG":
      return { ...state, refreshListFlag: !state.refreshListFlag };
    case "CHANGE_LOADING_IS_TRUE":
      return { ...state, isLoading: true };
    case "CHANGE_LOADING_IS_FALSE":
      return { ...state, isLoading: false };
    case "CHANGE_IS_ERROR":
      return { ...state, isError: !state.isError };
    default:
      return state;
  }
};
