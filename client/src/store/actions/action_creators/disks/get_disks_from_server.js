import { CHANGE_IS_ERROR } from "../../change_is_error";
import { CHANGE_LOADING_IS_FALSE } from "../../change_loading_false";
import { CHANGE_LOADING_IS_TRUE } from "../../change_loading_true";

export const getDisksFromServer = (dispatch) => {
  dispatch(CHANGE_LOADING_IS_TRUE);
  fetch("http://localhost:3001/disks")
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
    })
    .then((data) => {
      dispatch({
        type: "GET_DISKS_FROM_SERVER",
        payload: data,
      });
    })
    .finally(() => dispatch(CHANGE_LOADING_IS_FALSE))
    .catch((e) => {
      console.log("Error: " + e.message);
      dispatch(CHANGE_IS_ERROR);
    });
};
