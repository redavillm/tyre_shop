import { DISK_ACTIONS } from "../store_const";

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
    case DISK_ACTIONS.GET_DISKS_FROM_SERVER:
      return { ...state, disksList: action.payload };
    case DISK_ACTIONS.GET_DISK_BY_ID:
      return { ...state, diskById: action.payload };
    case DISK_ACTIONS.DISKS_FILTRED_TRUE:
      return { ...state, isFilter: true };
    case DISK_ACTIONS.CHANGE_DISKS_IS_BY_PARAMS_TRUE:
      return { ...state, isByParams: true };
    case DISK_ACTIONS.CHANGE_DISKS_IS_BY_PARAMS_FALSE:
      return { ...state, isByParams: false };
    case DISK_ACTIONS.SET_DISKS_SEARCH_OPTIONS:
      return { ...state, searchOptions: action.payload };
    default:
      return state;
  }
};
