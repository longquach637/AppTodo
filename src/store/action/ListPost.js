// action types

import {
  DELETE_LIST,
  DELETE_LIST_SUCCESS,
  EDIT_POST,
  EDIT_POST_FAILED,
  EDIT_POST_SUCCESS,
  GET_LIST_POST,
  GET_LIST_POST_SUCCESS,
  POST_LIST,
  POST_LIST_FAILED,
  POST_LIST_SUCCESS,
} from "../types/post";

export const getListPost = (payload) => {
  return {
    type: GET_LIST_POST,
    payload,
  };
};

export const getListPostSuccess = (payload) => {
  return {
    type: GET_LIST_POST_SUCCESS,
    payload,
  };
};
export const deleteList = (payload) => {
  return {
    type: DELETE_LIST,
    payload: payload.id,
  };
};
export const deleteListSuccess = (payload) => {
  return {
    type: DELETE_LIST_SUCCESS,
    payload,
  };
};

export const postList = (data) => {
  return {
    type: POST_LIST,
    payload: data,
  };
};
export const postSuccess = (payload) => {
  return {
    type: POST_LIST_SUCCESS,
    payload,
  };
};
export const postFailed = (payload) => {
  return {
    type: POST_LIST_FAILED,
    payload,
  };
};

export const editPost = (payload) => {
  console.log("payload", payload);
  return {
    type: EDIT_POST,
    payload: payload,
  };
};
export const editPostSuccess = (payload) => {
  return {
    type: EDIT_POST_SUCCESS,
    payload: payload,
  };
};
export const editPostFailed = (payload) => {
  return {
    type: EDIT_POST_FAILED,
    payload: payload,
  };
};
