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

let moviedbClientID;

if (process.env.NODE_ENV !== "production") {
  moviedbClientID = process.env.REACT_APP_MOVIEDB_CLIENT_ID;
} else {
  moviedbClientID = process.env.MOVIEDB_CLIENT_ID;
}

 const IndexState = props => {

  const initialState = {
    mostPopularMovie: {},
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    nowPlaying: []
  };
  

  const [state, dispatch] = useReducer(IndexReducer, initialState);

  const getMostPopularMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${moviedbClientID}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: GET_MOST_POPULAR_MOVIE,
      payload: data.results[0]
    });
  }

  const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${moviedbClientID}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: data.results
    });
  }

  const getUpcomingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${moviedbClientID}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: GET_UPCOMING_MOVIES,
      payload: data.results
    });
  }

  const getTopRatedMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${moviedbClientID}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: GET_TOP_RATED_MOVIES,
      payload: data.results
    });
  }
  
  const getLatestMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${moviedbClientID}&language=en-US`);
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