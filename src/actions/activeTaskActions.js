import {
  COMPLETE_ACTIVE_TASK,
  EDIT_ACTIVE_TASK,
  SAVE_ACTIVE_TASK,
  DELETE_ACTIVE_TASK,
} from "../constants";

export const completeActiveTaskAction = (taskId) => (dispatch) => {
  dispatch({
    type: COMPLETE_ACTIVE_TASK,
    payload: taskId,
  });
};

export const editActiveTaskAction = (taskId) => (dispatch) => {
  dispatch({
    type: EDIT_ACTIVE_TASK,
    payload: taskId,
  });
};

export const saveActiveTaskAction = (taskId, name) => (dispatch) => {
  dispatch({
    type: SAVE_ACTIVE_TASK,
    payload: {
      id: taskId,
      name: name,
    },
  });
};

export const deleteActiveTaskAction = (taskId) => (dispatch) => {
  dispatch({
    type: DELETE_ACTIVE_TASK,
    payload: taskId,
  });
};
