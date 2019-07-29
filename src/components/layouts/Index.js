import React, { Fragment, useEffect, useState, useContext } from 'react';
import Header from "./Header";
import Cards from "../cards/Cards";
import CTA from "../layouts/CTA";
import MovieSlider from "../slider/MovieSlider";
import Loader from "../layouts/Loader";

import IndexContext from "../../context/index/indexContext";

const Index = () => {
  const indexContext = useContext(IndexContext);

  const { 
    mostPopularMovie, 
    popularMovies, 
    upcomingMovies, 
    topRatedMovies, 
    nowPlaying,
    getMostPopularMovie,
    getPopularMovies,
    getUpcomingMovies,
    getTopRatedMovies,
    getLatestMovies } = indexContext;
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMostPopularMovie();
    getPopularMovies();
    getUpcomingMovies();
    getTopRatedMovies();
    getLatestMovies();

    setTimeout(() => {
      setLoading(false);
    }, 500); 
  // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Loader />
  } else {
    return (
      <Fragment>
        <Header movie={mostPopularMovie}/>
        <div className="container">
          <div className="heading">
            <h4 className="heading__title">Now Playing</h4>
          </div>
          <Cards movies={nowPlaying} />
        </div>
        <CTA />

        <div className="container">
          <div className="heading">
            <h4 className="heading__title">Popular Movies</h4>
          </div>
          <MovieSlider slide={popularMovies} />
        </div>

        <div className="sliderWrapper">
          <div className="container">
            <div className="heading">
              <h4 className="heading__title">Upcoming Movies</h4>
            </div>
            <MovieSlider slide={upcomingMovies} />
          </div>
        </div>
        
        <div className="container">
          <div className="heading">
            <h4 className="heading__title">Top Rate Movies</h4>
          </div>
          <MovieSlider slide={topRatedMovies} />
        </div>
      </Fragment>
    )
  }
}

export default Index;
