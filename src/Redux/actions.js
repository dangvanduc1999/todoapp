import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_BY_RADIO,
  SEARCH_TODO,
  UPDATE_COMPLETED,
  UPDATE_TODO
} from "./type";

export const addTodoAction = (payload) => ({
  type: ADD_TODO,
  payload: payload
});
export const deleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: id
});
export const updateTodoAction = (payload) => ({
  type: UPDATE_TODO,
  payload: payload
});
export const updateCompleted = (id) => ({
  type: UPDATE_COMPLETED,
  payload: id
});
export const searchTodoList = (text) => ({
  type: SEARCH_TODO,
  payload: text
});
export const filterByRadio = (status) => ({
  type: FILTER_BY_RADIO,
  payload: status
});
