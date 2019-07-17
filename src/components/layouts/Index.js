import React, { Fragment, useEffect, useState } from 'react';
import Header from "./Header";
import Cards from "../cards/Cards";
import CTA from "../layouts/CTA";
import MovieSlider from "../slider/MovieSlider";

const Index = () => {
  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";
  
  const [mostPopularMovie, setMostPopularMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  
  useEffect(() => {
    getMostPopularMovie();
    getPopularMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, [])

  const getMostPopularMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setMostPopularMovie(data.results[0]);
  }

  const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setPopularMovies(data.results);
  }

  const getUpcomingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setUpcomingMovies(data.results);
  }

  const getTopRatedMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    setTopRatedMovies(data.results);
  }
  

  return (
    <Fragment>
      <Header movie={mostPopularMovie}/>
      <Cards />
      <CTA />
      <MovieSlider slide={popularMovies} />
      <div className="sliderWrapper">
        <MovieSlider slide={upcomingMovies} />
      </div>
      <MovieSlider slide={topRatedMovies} />
    </Fragment>
  )
}

export default Index;
