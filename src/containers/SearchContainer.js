// containers/SearchContainer.js
import React from "react";
import { connect } from "react-redux";
import { searchMovies } from "../store/actions";
import { SearchBox } from "./components/SearchBox";

const SearchContainer = ({ searchMovies }) => {
  const handleSearch = (query) => {
    if (query.trim() !== "") {
      searchMovies(query);
    }
  };

  return <SearchBox onSearch={handleSearch} />;
};

export default connect(null, { searchMovies })(SearchContainer);