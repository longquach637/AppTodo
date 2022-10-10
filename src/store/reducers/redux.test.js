import produce from "immer";
import {
  deleteList,
  deleteListSuccess,
  getListPost,
  getListPostSuccess,
} from "../action/ListPost";
import postsReducer from "./redux";

describe("test loading", () => {
  let state;
  beforeEach(() => {
    state = {
      posts: [],
      loading: false,
    };
  });

  it("should get list post", () => {
    const expectedResult = { posts: [], loading: true };
    expect(postsReducer(state, getListPost())).toEqual(expectedResult);
  });

  it("should get list post success", () => {
    const listPost = [{ name: "admin", age: "23" }];
    const expectedResult = produce(state, (draft) => {
      draft.loading = false;
      draft.posts = listPost;
    });
    expect(postsReducer(state, getListPostSuccess(listPost))).toEqual(
      expectedResult
    );
  });

  it("should deletet list post", () => {
    const listPost = [{ id: "1", name: "admin", age: "23" }];
    const expectedResult = produce(state, (draft) => {
      draft.posts = [];
    });
    expect(postsReducer(state, deleteList({ id: listPost.id }))).toEqual(
      expectedResult
    );
  });

  it("should deletet list post success", () => {
    const listPost = [];
    const expectedResult = produce(state, (draft) => {
      draft.posts = listPost;
    });
    expect(postsReducer(state, deleteListSuccess(listPost))).toEqual(
      expectedResult
    );
  });
});
