import { FETCH_PERSON, FETCH_MOVIE_CREDITS } from '../types';

export default ( state, action ) => {
  switch (action.type) {
    case FETCH_PERSON:
      return {
        ...state,
        personData: action.payload
      };
    case FETCH_MOVIE_CREDITS: 
      return {
        ...state,
        movieCredits: action.payload
      };
    default: 
      return state;
  }
};