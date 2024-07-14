export const initialDisksState = {
  isByParams: true,
  searchOptions: {
    diametr: "all",
    mount: "all",
    brand: "all",
    type: "all",
  },
  isFilter: false,
  disksList: [],
  diskById: [],
};

export const disksReducer = (state = initialDisksState, action) => {
  switch (action.type) {
    case "GET_DISKS_FROM_SERVER":
      return { ...state, disksList: action.payload };
    case "GET_DISK_BY_ID":
      return { ...state, diskById: action.payload };
    case "CHANGE_DISKS_FILTRED_TRUE":
      return { ...state, isFilter: true };
    case "CHANGE_DISKS_IS_BY_PARAMS_TRUE":
      return { ...state, isByParams: true };
    case "CHANGE_DISKS_IS_BY_PARAMS_FALSE":
      return { ...state, isByParams: false };
    case "SET_DISKS_SEARCH_OPTIONS":
      return { ...state, searchOptions: action.payload };
    default:
      return state;
  }
};
