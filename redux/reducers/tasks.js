import * as TasksConstants from "../constants/tasks";
import _ from "lodash";

const defautlState = {
  items: [],
};

export default function (state = defautlState, action) {
  switch (action.type) {
    case TasksConstants.CREATE_TASK:

      const items = state.items || [];

      return {
        ...state,
        items: [...items, action.newTask],
      };
    case TasksConstants.REMOVE_TASK:
      console.log("action.index REMOVE_TASK", action.index);
      const selectedItem = state.items[action.index];
      console.log("action.index selectedItem", selectedItem);

      const newItems = _.filter(
        state.items,
        (data) => data.text !== selectedItem.text
      );
      return {
        ...state,
        items: newItems,
      };
 
    default:
      return state;
  }
}
