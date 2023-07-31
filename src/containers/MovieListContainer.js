// containers/MovieListContainer.js
import React from "react";
import { connect } from "react-redux";
import MovieList from "../components/MovieList";
import { setSelectedMovie } from "../store/actions";

const MovieListContainer = ({ movies, setSelectedMovie }) => {
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return <MovieList movies={movies} onMovieClick={handleMovieClick} />;
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, { setSelectedMovie })(
  MovieListContainer
);