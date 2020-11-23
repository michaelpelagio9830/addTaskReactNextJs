import * as TaskConstants from "../constants/tasks";

export function setNewTask(data) {
  return async (dispatch) => {
    dispatch({
      type: TaskConstants.CREATE_TASK,
      newTask: data,
    });
  };
}
export function onItemRemove(index) {
  return async (dispatch) => {
    dispatch({
      type: TaskConstants.REMOVE_TASK,
      index,
    });
  };
}
