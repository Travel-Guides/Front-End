import axiosWithAuth from "../utils/axiosWithAuth";
import { createDispatchHook } from "react-redux";

export const AUTHORIZING = "AUTHORIZING";
export const SIGNUP_GUIDE_SUCCESS = "SIGNUP_GUIDE_SUCCESS";
export const SIGNUP_TOURIST_SUCCESS = "SIGNUP_TOURIST_SUCCESS";
export const LOGIN_GUIDE_SUCCESS = "LOGIN_GUIDE_SUCCESS";
export const LOGIN_TOURIST_SUCCESS = "LOGIN_TOURIST_SUCCESS";

export const FETCHING_USER_ERROR = "FETCHING_USER_ERROR";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";

const baseURL = "https://bd-trip-split.herokuapp.com/api";

// REGISTER

export const signUpGuide = guide => dispatch => {
  let URL = baseURL + "/auth/guides/register";
  dispatch({ type: AUTHORIZING, payload: "Signing up..." });
  axiosWithAuth()
    .post(URL, guide)
    .then(res => ({
      type: SIGNUP_GUIDE_SUCCESS
    }))
    .catch(err => dispatch({ type: ERROR, payload: err.response.data.code }));
};

export const signUpTourist = tourist => dispatch => {
  let URL = baseURL + "/auth/tourists/register";
  dispatch({ type: AUTHORIZING, payload: "Signing up..." });
  axiosWithAuth()
    .post(URL, tourist)
    .then(res => ({
      type: SIGNUP_TOURIST_SUCCESS
    }))
    .catch(err => dispatch({ type: ERROR, payload: err.response.data.code }));
};

// LOGIN

export const logInGuide = guide => dispatch => {
  let URL = baseURL + "/auth/guides/login";
  dispatch({ type: AUTHORIZING, payload: "Logging In..." });
  axiosWithAuth()
    .post(URL, guide)
    .then(res =>
      dispatch({
        type: LOGIN_GUIDE_SUCCESS,
        payload: res.data.token,
        guide: guide.email
      })
    )
    .catch(err => dispatch({ type: ERROR, payload: err.response.data.code }));
};

export const logInTourist = tourist => dispatch => {
  let URL = baseURL + "/auth/guides/login";
  dispatch({ type: AUTHORIZING, payload: "Logging In..." });
  axiosWithAuth()
    .post(URL, tourist)
    .then(res =>
      dispatch({
        type: LOGIN_TOURIST_SUCCESS,
        payload: res.data.token,
        guide: tourist.email
      })
    )
    .catch(err => dispatch({ type: ERROR, payload: err.response.data.code }));
};
