export const addNewTodo = (todo) => {
  return {
    type: "CREATE_TODO",
    payload: todo,
  };
};
export const deleteTodo = (todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo,
  };
};

export const editTodo = (todo) => {
  return {
    type: "EDIT_TODO",
    payload: todo,
  };
};
