const initState = {
  users: [
    { id: 1, name: "Eric" },
    { id: 2, name: "admin" },
  ],
  page: [],
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
      return { ...state, users: [...state.users, user] };

    default:
      return state;
  }
};

export default rootReducers;
