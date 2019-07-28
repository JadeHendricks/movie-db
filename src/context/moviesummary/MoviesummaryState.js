import React, { useReducer } from 'react';
import MoviesummaryContext from './moviesummaryContext';
import MoviesummaryReducer from './moviesummaryReducer';
import { FETCH_MOVIE, FETCH_MOVIE_REVIEWS, FETCH_CAST, FETCH_VIDEOS, FETCH_SIMILAR_MOVIES } from '../types';

const PeoplesummaryState = props => {

  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  const initialState = {
    movie: {},
    reviews: [],
    cast: [],
    videos: [],
    similarMovies: []
  };

  const [state, dispatch] = useReducer(MoviesummaryReducer, initialState);

  const fetchMovie = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: FETCH_MOVIE,
      payload: data
    });
  }

  const fetchMovieReviews = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: FETCH_MOVIE_REVIEWS,
      payload: data.results.slice(0, 4)
    });
  }

  const fetchCast = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: FETCH_CAST,
      payload: data.cast.slice(0, 10)
    });
  }

  const fetchVideos = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: FETCH_VIDEOS,
      payload: data.results
    });
  }

  const fetchSimilarMovies = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();

    dispatch({
      type: FETCH_SIMILAR_MOVIES,
      payload: data.results.slice(0, 8)
    });
  }

  return (
    <MoviesummaryContext.Provider
      value={{
        movie: state.movie,
        reviews: state.reviews,
        cast: state.cast,
        videos: state.videos,
        similarMovies: state.similarMovies,
        fetchMovie,
        fetchMovieReviews,
        fetchCast,
        fetchVideos,
        fetchSimilarMovies
      }}
    >
      {props.children}
    </MoviesummaryContext.Provider>
  );
}

export default PeoplesummaryState;
