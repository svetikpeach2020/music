import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "connected-react-router";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS
} from "../actionTypes";

const registerUserSuccess = () => {
  return {type: REGISTER_USER_SUCCESS};
};
const registerUserFailure = error => {
  return {type: REGISTER_USER_FAILURE, error};
};

const loginUserSuccess = user => {
  return {type: LOGIN_USER_SUCCESS, user};
};

export const registerUser = userData => {
  return dispatch => {
    return axios.post("/users", userData).then(response => {
      dispatch(registerUserSuccess());
      dispatch(loginUserSuccess(response.data));
      dispatch(push("/"));
    }, error => {
      if (error.response && error.response.data) {
        dispatch(registerUserFailure(error.response.data));
      } else {
        dispatch(registerUserFailure({global: "No internet"}));
      }
    });
  };
};


const loginUserFailure = error => {
  return {type: LOGIN_USER_FAILURE, error};
};
export const loginUser = userData => {
  return dispatch => {
    axios.post("/users/sessions", userData).then(response => {
      dispatch(loginUserSuccess(response.data));
      dispatch(push("/"));
      NotificationManager.success("Login success");
    }, error => {
      dispatch(loginUserFailure(error.response.data));
    });
  };
};

export const logoutUser = () => {
  return (dispatch, getState) => {
    const token = getState().users.user.token;
    const headers = {"Token": token};

    return axios.delete("/users/sessions", {headers}).then(
        () => {
          dispatch({type: LOGOUT_USER});
          dispatch(push("/"));
          NotificationManager.warning("Logged out");
        }
    )
  }
};

export const facebookLogin = data => {
  return dispatch => {
    axios.post("/users/facebookLogin", data).then(response => {
      dispatch(loginUserSuccess(response.data));
      dispatch(push("/"));
      NotificationManager.success("Logged in with facebook");
    }, error => {
      dispatch(loginUserFailure(error.response.data));
    });
  };
};
