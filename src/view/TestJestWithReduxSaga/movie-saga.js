import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesApi } from "./moviesApi";

export function* fetchMoviesSaga(action) {
  yield put({ type: "TOGGLE_LOADING", payload: true });
  try {
    const movies = yield call(fetchMoviesApi);
    yield put({ type: "TOGGLE_LOADING", payload: false });
    yield put({ type: "LOAD_INITIAL_MOVIES", payload: movies });
  } catch (e) {
    yield put({ type: "TOGGLE_LOADING", payload: false });
    yield put({ type: "ITEM_HAS_ERRORED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest("MOVIE_FETCH_REQUESTED", fetchMoviesSaga);
}

export default mySaga;
