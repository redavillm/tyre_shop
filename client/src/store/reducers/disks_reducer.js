export const initialDisksState = [];

export const disksReducer = (state = initialDisksState, action) => {
  switch (action.type) {
    case "GET_DISKS_FROM_SERVER":
      return { ...state, disks: action.payload };
    default:
      return state;
  }
};
