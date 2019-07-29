import {
  GET_MOST_POPULAR_MOVIE,
  GET_POPULAR_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_LATEST_MOVIES
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_MOST_POPULAR_MOVIE:
      return {
        ...state,
        mostPopularMovie: action.payload,
      };
      case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
      case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
      };
      case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
      case GET_LATEST_MOVIES:
      return {
        ...state,
        nowPlaying: action.payload,
      };
    default:
      return state;
  }
};