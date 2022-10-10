import {
  DELETE_LIST,
  DELETE_LIST_SUCCESS,
  GET_LIST_POST,
  GET_LIST_POST_SUCCESS,
  POST_LIST,
  POST_LIST_SUCCESS,
} from "../types/post";

const INITIAL_STATE = {
  posts: [],
  loading: false,
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_POST:
      return {
        ...state,
        loading: true,
      };
    case GET_LIST_POST_SUCCESS:
      console.log("actions redux success:", action);

      const data = action.payload;
      return {
        ...state,
        posts: data,
        loading: false,
      };
    case DELETE_LIST:
      const dataDelete = action.payload;
      const newData = state.posts.filter((item) => item.id !== dataDelete);
      return {
        ...state,
        posts: newData,
      };
    case DELETE_LIST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case POST_LIST:
      return {
        ...state,
      };
    case POST_LIST_SUCCESS:
      const dataAdd = action.payload;
      console.log(">>check dataAdd", dataAdd);
      return {
        ...state,
        posts: dataAdd,
      };

    // case EDIT_POST:
    //   console.log("actions redux:", action);
    //   const idUpdate = state.posts.filter((item) => item.id === action.payload);
    //   console.log("idUpdate:", idUpdate);
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};

export default postsReducer;
