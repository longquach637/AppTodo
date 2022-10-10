const initialState = {
  list: [{ id: 1, title: "admin" }],
  active: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};

export default homeReducer;
