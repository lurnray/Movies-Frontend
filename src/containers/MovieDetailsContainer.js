// containers/MovieDetailsContainer.js
import React from "react";
import { connect } from "react-redux";
import MovieDetails from "../components/MovieDetails";

const MovieDetailsContainer = ({ selectedMovie }) => {
  return (
    <div>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <p>Select a movie to view details</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
});

export default connect(mapStateToProps)(MovieDetailsContainer);