import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import SearchContainer from "./containers/SearchContainer";
// import MovieListContainer from "./containers/MovieListContainer";
// import MovieDetailsContainer from "./containers/MovieDetailsContainer";
import Login from "./components/login";
import Signup from "./components/signup";


const RouterApp = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" component={SearchContainer} />
        <Route exact path="/movies" component={MovieListContainer} />
        <Route path="/movies/:id" component={MovieDetailsContainer} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Routes>
    </Router>
  );
};

export default RouterApp;

