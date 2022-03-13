export const todoListSelector = (state) => {
  if (state.filters.status === "all") {
    return state.todoList.filter((todo) =>
      todo.title.includes(state.filters.search)
    );
  } else {
    return state.todoList.filter(
      (todo) =>
        todo.title.includes(state.filters.search) &&
        (state.filters.status === "completed"
          ? todo.completed === true
          : todo.completed === false)
    );
  }
};
