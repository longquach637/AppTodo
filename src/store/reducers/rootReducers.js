import { combineReducers } from "redux";
import homeReducer from "./HomeReducer";
import postsReducer from "./redux";
import todoReducer from "./TodoReducer";
const rootReducers = combineReducers({
  home: homeReducer,
  todo: todoReducer,
  redux: postsReducer,
});

export default rootReducers;
