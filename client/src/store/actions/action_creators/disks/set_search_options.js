import { DISK_ACTIONS } from "../../../store_const";

export const setDisksSearchOptions = (data) => {
  return {
    type: DISK_ACTIONS.SET_DISKS_SEARCH_OPTIONS,
    payload: data,
  };
};
