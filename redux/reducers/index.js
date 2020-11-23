import { combineReducers } from "redux";

import Login from "./login";
import Task from "./tasks";

export default combineReducers({
  Login,
  Task,
});
