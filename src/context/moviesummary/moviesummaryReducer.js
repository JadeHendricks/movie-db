import { FETCH_MOVIE, FETCH_MOVIE_REVIEWS, FETCH_CAST, FETCH_VIDEOS, FETCH_SIMILAR_MOVIES } from '../types';

export default ( state, action ) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case FETCH_MOVIE_REVIEWS: 
      return {
        ...state,
        reviews: action.payload
      };
      case FETCH_CAST: 
      return {
        ...state,
        cast: action.payload
      };
      case FETCH_VIDEOS: 
      return {
        ...state,
        videos: action.payload
      };
      case FETCH_SIMILAR_MOVIES: 
      return {
        ...state,
        similarMovies: action.payload
      };
    default: 
      return state;
  }
};