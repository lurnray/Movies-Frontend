// store/actions.js
import { SEARCH_MOVIES, SET_SELECTED_MOVIE } from "./types";

export const searchMovies = (query) => {
  // Implement logic to make an API request to fetch movies from the backend.
  // Once the response is received, dispatch an action with the fetched movies.
  return (dispatch) => {
    // API request logic here
    // Example:
    fetch(`/api/movies?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: SEARCH_MOVIES,
          payload: data.movies,
        });
      });
  };
};

export const setSelectedMovie = (movie) => {
  return {
    type: SET_SELECTED_MOVIE,
    payload: movie,
  };
};