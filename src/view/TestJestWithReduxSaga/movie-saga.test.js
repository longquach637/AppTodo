import { put, call } from "redux-saga/effects";
import { fetchMoviesApi } from "./moviesApi";
import { fetchMoviesSaga } from "./movie-saga";

describe("movies fetching flow", () => {
  it("Fetches the movies successfully", () => {
    const generator = fetchMoviesSaga();
    expect(generator.next().value).toEqual(
      put({ type: "TOGGLE_LOADING", payload: true })
    );
    expect(generator.next().value).toEqual(call(fetchMoviesApi));
    expect(generator.next().value).toEqual(
      put({ type: "TOGGLE_LOADING", payload: false })
    );
    expect(generator.next().value).toEqual(
      put({ type: "LOAD_INITIAL_MOVIES", payload: undefined })
    );
  });

  it("Handles exception as expected", () => {
    const generator = fetchMoviesSaga();
    expect(generator.next().value).toEqual(
      put({ type: "TOGGLE_LOADING", payload: true })
    );
    expect(generator.next().value).toEqual(call(fetchMoviesApi));
    expect(generator.throw("error").value).toEqual(
      put({ type: "TOGGLE_LOADING", payload: false })
    );
    expect(generator.next().value).toEqual(
      put({ type: "ITEM_HAS_ERRORED", message: undefined })
    );
  });
});
