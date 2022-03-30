const initState = {
  users: [
    { id: 1, name: "Eric" },
    { id: 2, name: "admin" },
  ],
  page: [],
  ListToDo: [
    { id: "todo1", title: "Doing HomeWork" },
    { id: "todo2", title: "Playing Games" },
    { id: "todo3", title: "Fix Bugs" },
  ],
};
const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(">>> Run into delete User", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
    case "CREATE_USER":
      console.log(">>> Run into add User", action);
      let id = Math.floor(Math.random() * 1000);
      let user = { id: id, name: `random - ${id}` };
      console.log(">>> Run into add User", user);

      return { ...state, users: [...state.users, user] };

    case "DELETE_LIST_TODO":
      console.log(">>> Run into delete list to do", action);
      let listTodo = state.ListToDo;
      listTodo = listTodo.filter((item) => item.id !== action.payload.id);
      console.log(">>> Run into list to do", listTodo);
      return {
        ...state,
        ListTodo: listTodo,
      };

    case "CREATE_LIST_TODO":
      console.log(">>>Run into add list to do", action);

    default:
      return state;
  }
};

export default rootReducers;
