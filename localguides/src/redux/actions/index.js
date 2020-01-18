import axiosWithAuth from "../../utils/axiosWithAuth";

// GUIDES
export const SIGNUP_GUIDE_START = "SIGNUP_GUIDE_START";
export const SIGNUP_GUIDE_SUCCESS = "SIGNUP_GUIDE_SUCCESS";
export const SIGNUP_GUIDE_FAILURE = "SIGNUP_GUIDE_FAILURE";
export const LOGIN_GUIDE_START = "LOGIN_GUIDE_START";
export const LOGIN_GUIDE_SUCCESS = "LOGIN_GUIDE_SUCCESS";
export const LOGIN_GUIDE_FAILURE = "LOGIN_GUIDE_FAILURE";

// TOURISTS
export const SIGNUP_TOURIST_START = "SIGNUP_TOURIST_START";
export const SIGNUP_TOURIST_SUCCESS = "SIGNUP_TOURIST_SUCCESS";
export const SIGNUP_TOURIST_FAILURE = "SIGNUP_TOURIST_FAILURE";
export const LOGIN_TOURIST_START = "LOGIN_TOURIST_START";
export const LOGIN_TOURIST_SUCCESS = "LOGIN_TOURIST_SUCCESS";
export const LOGIN_TOURIST_FAILURE = "LOGIN_TOURIST_FAILURE";

// LOGOUT
export const LOG_OUT = "LOG_OUT";

export const FETCHING_USER_ERROR = "FETCHING_USER_ERROR";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";

const baseURL = "https://local-guides-app.herokuapp.com/api";

// REGISTER/SIGNUP ACTION
export const addGuides = guide => dispatch => {
  let URL = baseURL + "/auth/guides/register";
  dispatch({ type: SIGNUP_GUIDE_START, payload: "Signing up..." });
  axiosWithAuth()
    .post(URL, guide, {
      firstName: guide.firstName,
      lastName: guide.lastName,
      email: guide.email,
      password: guide.password
    })
    .then(res => {
      dispatch({ type: SIGNUP_GUIDE_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err =>
      dispatch({
        type: SIGNUP_GUIDE_FAILURE,
        payload: err.response.data.code
      })
    );
};

export const addTourists = tourist => dispatch => {
  let URL = baseURL + "/auth/tourists/register";
  dispatch({ type: SIGNUP_TOURIST_START, payload: "Signing up..." });
  axiosWithAuth()
    .post(URL, tourist)
    .then(res => {
      dispatch({ type: SIGNUP_TOURIST_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err =>
      dispatch({
        type: SIGNUP_TOURIST_FAILURE,
        payload: err.response.data.code
      })
    );
};

// LOGIN ACTION
export const logInGuide = guide => dispatch => {
  let URL = baseURL + "/auth/guides/login";
  dispatch({ type: LOGIN_GUIDE_START, payload: "Logging In..." });
  axiosWithAuth()
    .post(URL, guide)
    .then(res =>
      dispatch({
        type: LOGIN_GUIDE_SUCCESS,
        payload: res.data.token,
        guide: res.data.guide
      })
    )
    .catch(err =>
      dispatch({
        type: LOGIN_GUIDE_FAILURE,
        payload: err.response.data.code
      })
    );
};

export const logInTourist = tourist => dispatch => {
  let URL = baseURL + "/auth/guides/login";
  dispatch({ type: LOGIN_TOURIST_START, payload: "Logging In..." });
  axiosWithAuth()
    .post(URL, tourist)
    .then(res =>
      dispatch({
        type: LOGIN_TOURIST_SUCCESS,
        payload: res.data.token,
        tourist: res.data.tourist
      })
    )
    .catch(err =>
      dispatch({
        type: LOGIN_TOURIST_FAILURE,
        payload: err.response.data.code
      })
    );
};

// LOGOUT ACTION
export const logOut = () => {
  return { type: LOG_OUT };
};
