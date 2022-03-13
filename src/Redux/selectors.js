export const todoListSelector = (state) => {
  if (state.filters.status === "all") {
    return state.todoList.filter((todo) =>
      todo.title.includes(state.filters.search)
    );
  } else if (state.filters.status === "completed") {
    return state.todoList.filter(
      (todo) =>
        todo.title.includes(state.filters.search) && todo.completed === true
    );
  } else {
    return state.todoList.filter(
      (todo) =>
        todo.title.includes(state.filters.search) && todo.completed === false
    );
  }
};
