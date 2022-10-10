const initialState = {
  listTodo: [{ id: 1, title: "admin" }],
  checkEdit: false,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      const newListTodo = [...state.listTodo];
      newListTodo.push(action.payload);
      return { ...state, listTodo: newListTodo };
    case "DELETE_TODO":
      return { ...state, listTodo: action.payload };
    case "EDIT_TODO":
      console.log(">>> run into edit: ", action);
    default:
      return state;
  }
};

export default todoReducer;
