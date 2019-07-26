import React, { Fragment, useEffect, useState } from 'react';
import Header from "./Header";
import Cards from "../cards/Cards";
import CTA from "../layouts/CTA";
import MovieSlider from "../slider/MovieSlider";
import Loader from "../layouts/Loader";

const Index = () => {
  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";
  
  const [loading, setLoading] = useState(true);
  const [mostPopularMovie, setMostPopularMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  
  useEffect(() => {
    getMostPopularMovie();
    getPopularMovies();
    getUpcomingMovies();
    getTopRatedMovies();
    getLatestMovies();
    
    setTimeout(() => {
      setLoading(false);
    }, 500); 

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
  
  const getLatestMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    setNowPlaying(data.results.slice(0, 12));
  }

  if (loading) {
    return <Loader />
  } else {
    return (
      <Fragment>
        <Header movie={mostPopularMovie}/>
        <Cards movies={nowPlaying} />
        <CTA />
        <MovieSlider slide={popularMovies} />
        <div className="sliderWrapper">
          <MovieSlider slide={upcomingMovies} />
        </div>
        <MovieSlider slide={topRatedMovies} />
      </Fragment>
    )
  }
}

export default Index;
