import { TYRE_ACTIONS } from "../../../store_const";
import {
  CHANGE_IS_ERROR,
  CHANGE_LOADING_IS_FALSE,
  CHANGE_LOADING_IS_TRUE,
} from "../../changes";

export const getTyresFromServer = () => (dispatch) => {
  dispatch(CHANGE_LOADING_IS_TRUE);
  fetch("http://localhost:3001/tyres")
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
      return dispatch({
        type: TYRE_ACTIONS.GET_TYRES_FROM_SERVER,
        payload: data.items,
      });
    })
    .finally(() => dispatch(CHANGE_LOADING_IS_FALSE))
    .catch((e) => {
      console.log("Error: " + e.message);
      dispatch(CHANGE_IS_ERROR);
    });
};
