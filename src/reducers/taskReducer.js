import {
  ADD_TASK,
  COMPLETE_ACTIVE_TASK,
  EDIT_ACTIVE_TASK,
  SAVE_ACTIVE_TASK,
  DELETE_ACTIVE_TASK,
  TERMINATE_COMPLETED_TASK,
} from "../constants";

const initialState = {
  activeTasks: [],
  completedTasks: [],
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        activeTasks: [action.payload, ...state.activeTasks],
      };
    case COMPLETE_ACTIVE_TASK:
      const indexOfCompletedTask = state.activeTasks.findIndex(
        (task) => task.id === action.payload
      );
      const taskCompleted = {
        ...state.activeTasks[indexOfCompletedTask],
        date: new Date(),
      };
      const updatedCompletedTasks = [taskCompleted, ...state.completedTasks];
      return {
        ...state,
        activeTasks: [
          ...state.activeTasks.filter((task) => task.id !== action.payload),
        ],
        completedTasks: updatedCompletedTasks,
      };
    case EDIT_ACTIVE_TASK:
      const updatedActiveTasks = state.activeTasks.map((task) =>
        task.id === action.payload ? { ...task, isEditable: true } : task
      );
      return {
        ...state,
        activeTasks: updatedActiveTasks,
      };
    case SAVE_ACTIVE_TASK:
      const updatedSavedActiveTasks = state.activeTasks.map((task) =>
        task.id === action.payload.id ? { ...action.payload } : task
      );
      return {
        ...state,
        activeTasks: updatedSavedActiveTasks,
      };
    case DELETE_ACTIVE_TASK:
      return {
        ...state,
        activeTasks: [
          ...state.activeTasks.filter((task) => task.id !== action.payload),
        ],
      };
    case TERMINATE_COMPLETED_TASK:
      return {
        ...state,
        completedTasks: [
          ...state.completedTasks.filter((task) => task.id !== action.payload),
        ],
      };
    default:
      return state;
  }
}
