import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchContainer from "./containers/SearchContainer";
import MovieListContainer from "./containers/MovieListContainer";
import MovieDetailsContainer from "./containers/MovieDetailsContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchContainer} />
        <Route exact path="/movies" component={MovieListContainer} />
        <Route path="/movies/:id" component={MovieDetailsContainer} />
      </Switch>
    </Router>
  );
};

export default App;