import * as Login from "../constants/login";

export function getUserCredentials(data) {
  return async (dispatch) => {
    dispatch({
      type: Login.GET_USER_CREDENTIALS,
      credential: data,
    });
  };
}
