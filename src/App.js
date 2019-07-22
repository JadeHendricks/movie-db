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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/css/style.css';

const App = () => {
  return (
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
