import axiosWithAuth from "../utils/axiosWithAuth";

export const AUTHORIZING = "AUTHORIZING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const FETCHING_USER_ERROR = "FETCHING_USER_ERROR";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";

export const guideRegister = guide => dispatch => {
  dispatch({ type: AUTHORIZING, payload: "Signing up..." });
  axiosWithAuth()
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      type: SIGNUP_SUCCESS;
    })
    .catch(err => dispatch({ type: ERROR, payload: err.response.data.code }));
};
