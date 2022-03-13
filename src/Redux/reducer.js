import { v4 as uuidv4 } from "uuid";
import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_BY_RADIO,
  SEARCH_TODO,
  UPDATE_COMPLETED,
  UPDATE_TODO
} from "./type";

const initialToDoState = {
  filters: {
    search: "",
    status: "all"
  },
  todoList: [
    {
      id: uuidv4(),
      title: "learn react ",
      priority: "Medium",
      completed: false
    },
    {
      id: uuidv4(),
      title: "learn jaascript ",
      priority: "Medium",
      completed: false
    },
    {
      id: uuidv4(),
      title: "learn nodejs",
      priority: "Medium",
      completed: false
    }
  ]
};

const todoReducer = (state = initialToDoState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [payload.todo, ...state.todoList]
      };
    case DELETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload)
      };
    }
    case UPDATE_TODO: {
      const indexOfTodo = state.todoList.findIndex(
        (todo) => todo.id === payload.id
      );
      const newToDoList = [...state.todoList];
      newToDoList[indexOfTodo] = payload;
      return {
        ...state,
        todoList: newToDoList
      };
    }
    case UPDATE_COMPLETED: {
      const indexOfTodo = state.todoList.findIndex(
        (todo) => todo.id === payload
      );
      const newToDoList = [...state.todoList];
      newToDoList[indexOfTodo].completed = !newToDoList[indexOfTodo].completed;
      return {
        ...state,
        todoList: newToDoList
      };
    }
    case SEARCH_TODO: {
      return {
        ...state,
        filters: {
          ...state.filter,
          search: payload
        }
      };
    }
    case FILTER_BY_RADIO: {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: payload
        }
      };
    }
    default:
      return state;
  }
};
export default todoReducer;
