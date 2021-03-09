import { ADD_TASK } from "../constants";

export const addTaskAction = (taskName) => (dispatch) => {
  dispatch({
    type: ADD_TASK,
    payload: taskName,
  });
};
