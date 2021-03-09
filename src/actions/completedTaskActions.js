import { TERMINATE_COMPLETED_TASK } from "../constants";

export const terminateCompletedTaskAction = (taskId) => (dispatch) => {
  dispatch({
    type: TERMINATE_COMPLETED_TASK,
    payload: taskId,
  });
};
