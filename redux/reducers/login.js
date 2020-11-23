import * as Login from "../constants/login";

const defaultState = {
  credentials: {
    userName: "kelsky31",
    passWord: "kel123",
  },
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case Login.GET_USER_CREDENTIALS:
      return {
        ...state,
        credentials: action.credential,
      };
    default:
      return state;
  }
}
