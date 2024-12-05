import {
  CHANGE_IS_ERROR,
  CHANGE_LOADING_IS_FALSE,
  CHANGE_LOADING_IS_TRUE,
} from "../store/actions";

export const fetchProductById = (url, actionType) => (id) => (dispatch) => {
  dispatch(CHANGE_LOADING_IS_TRUE);
  fetch(`${url}/${id}`)
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
        type: actionType,
        payload: data.item,
      });
    })
    .catch((e) => {
      console.log("Error: " + e.message);
      dispatch(CHANGE_IS_ERROR);
    })
    .finally(() => dispatch(CHANGE_LOADING_IS_FALSE));
};
