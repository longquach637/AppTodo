import produce from "immer";
import {
  DELETE_LIST,
  DELETE_LIST_SUCCESS,
  GET_LIST_POST,
  GET_LIST_POST_SUCCESS,
} from "../types/post";
import {
  deleteList,
  deleteListSuccess,
  getListPost,
  getListPostSuccess,
} from "./ListPost";
describe("list post", () => {
  let state;
  beforeEach(() => {
    state = {
      type: "",
      payload: "",
    };
  });
  it("test get list post", () => {
    const expected = {
      type: GET_LIST_POST,
      payload: undefined,
    };
    expect(getListPost()).toEqual(expected);
  });
  it("test get list post success", () => {
    const expected = {
      type: GET_LIST_POST_SUCCESS,
      payload: undefined,
    };
    expect(getListPostSuccess()).toEqual(expected);
  });
  it("should deletet list post", () => {
    const listPost = { id: "1", name: "admin", age: "23" };
    const expectedResult = produce(state, (draft) => {
      draft.type = DELETE_LIST;
      draft.payload = listPost.id;
    });
    expect(deleteList({ id: listPost?.id })).toEqual(expectedResult);
  });
  it("should deletet list post success", () => {
    const expectedResult = produce(state, (draft) => {
      draft.type = DELETE_LIST_SUCCESS;
      draft.payload = undefined;
    });
    expect(deleteListSuccess()).toEqual(expectedResult);
  });
});
