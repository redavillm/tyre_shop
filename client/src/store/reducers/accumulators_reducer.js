export const initialAccumulatorsState = [];

export const accumulatorsReducer = (
  state = initialAccumulatorsState,
  action
) => {
  switch (action.type) {
    case "GET_ACCUMULATORS_FROM_SERVER":
      return { ...state, accumulators: action.payload };
    default:
      return state;
  }
};
