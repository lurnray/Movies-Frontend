// store/reducers.js
import { combineReducers } from "redux";
import { SEARCH_MOVIES, SET_SELECTED_MOVIE } from "./types";

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_MOVIE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});