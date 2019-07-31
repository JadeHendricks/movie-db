import React from 'react';
import Index from "./components/layouts/Index";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Contact from "./components/user/Contact";
import Profile from "./components/user/Profile";
import MovieSummary from "./components/informational/MovieSummary";
import ActorSummary from "./components/informational/ActorSummary";
import SearchResults from "./components/informational/SearchResults";
import NotFound from "./components/layouts/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/style.css';

import IndexState from './context/index/IndexState';
import HeaderState from './context/header/HeaderState';
import SearchState from "./context/search/SearchState";
import PeoplesummaryState from './context/peoplesummary/PeoplesummaryState';
import MoviesummaryState from './context/moviesummary/MoviesummaryState';

const App = () => {
  return (
    <IndexState>
      <HeaderState>
        <SearchState>
          <MoviesummaryState>
            <PeoplesummaryState>
              <Router>
                <div className="App">
                  <Navbar />
                  <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/movie-summary/:id" component={MovieSummary} />
                    <Route path="/actor-summary/:id" component={ActorSummary} />
                    <Route path="/search-results" component={SearchResults} />
                    <Route path="/" exact component={Index} />
                    <Route component={NotFound} />
                  </Switch>
                  <Footer />
                </div>
              </Router>
            </PeoplesummaryState>
          </MoviesummaryState>
        </SearchState>
      </HeaderState>
    </IndexState>
  );
}

export default App;
