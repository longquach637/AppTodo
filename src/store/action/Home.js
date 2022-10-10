export const addNewHome = (user) => {
  return {
    type: "CREATE_USER",
    payload: user,
  };
};

export const deleteHome = (user) => {
  return {
    type: "DELETE_USER",
    payload: user,
  };
};
