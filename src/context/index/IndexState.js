import React, { useReducer } from 'react';
import IndexContext from './indexContext';
import IndexReducer from './indexReducer';
import {
  GET_MOST_POPULAR_MOVIE,
  GET_POPULAR_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_LATEST_MOVIES
} from "../types";

 const IndexState = props => {
  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  const initialState = {
    mostPopularMovie: {},
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    nowPlaying: []
  };
  

  const [state, dispatch] = useReducer(IndexReducer, initialState);

  const getMostPopularMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: GET_MOST_POPULAR_MOVIE,
      payload: data.results[0]
    });
  }

  const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: data.results
    });
  }

  const getUpcomingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: GET_UPCOMING_MOVIES,
      payload: data.results
    });
  }

  const getTopRatedMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: GET_TOP_RATED_MOVIES,
      payload: data.results
    });
  }
  
  const getLatestMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    dispatch({
      type: GET_LATEST_MOVIES,
      payload: data.results.slice(0, 12)
    });
  }

  return (
    <IndexContext.Provider
      value={{
        mostPopularMovie: state.mostPopularMovie,
        popularMovies: state.popularMovies,
        upcomingMovies: state.upcomingMovies,
        topRatedMovies: state.topRatedMovies,
        nowPlaying: state.nowPlaying,
        getMostPopularMovie,
        getPopularMovies,
        getUpcomingMovies,
        getTopRatedMovies,
        getLatestMovies
      }}
    >
      {props.children}
    </IndexContext.Provider>
  )
}


export default IndexState;