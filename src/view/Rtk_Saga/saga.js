import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import {
  getListPostSuccess,
  deleteListSuccess,
  postSuccess,
  editPostSuccess,
} from "../../store/action/ListPost";
import {
  DELETE_LIST,
  EDIT_POST,
  GET_LIST_POST,
  POST_LIST,
} from "../../store/types/post";
import { getData, deleteData, postData, updateData } from "./postApi";

function* getListSaga(action) {
  try {
    console.log("action saga:", action);
    const data = yield call(getData);
    const resData = data.data;
    yield put(getListPostSuccess(resData));
  } catch (error) {
    //handle error
  }
}

function* deleteListSaga(action) {
  try {
    const data = yield call(deleteData(action.payload));
    yield put(deleteListSuccess(data));
  } catch (error) {
    //handle error
  }
}

function* postSaga(action) {
  try {
    const data = yield call(postData, action.payload);
    const data1 = yield call(getData);
    const resData = data1.data;
    yield put(postSuccess(data.data));
    yield put(getListPostSuccess(resData));
  } catch (error) {
    //handle error
  }
}
function* editSaga(action) {
  console.log("Action", action);
  try {
    const data = yield call(updateData, "helllooooo");
    const data1 = yield call(getData);
    const resData = data1.data;
    yield put(editPostSuccess(data.data));
    yield put(getListPostSuccess(resData));
  } catch (error) {
    //handle error
  }
}

function* getSaga() {
  yield takeEvery(GET_LIST_POST, getListSaga);
  yield takeEvery(DELETE_LIST, deleteListSaga);
  yield takeLatest(POST_LIST, postSaga);
  yield takeLatest(EDIT_POST, editSaga);
}

export default getSaga;
