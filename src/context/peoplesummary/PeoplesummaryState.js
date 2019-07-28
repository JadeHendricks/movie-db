import React, { useReducer } from 'react';
import PeoplesummaryContext from './peoplesummaryContext';
import PeoplesummaryReducer from './peoplesummaryReducer';
import { FETCH_PERSON, FETCH_MOVIE_CREDITS } from '../types';

const PeoplesummaryState = props => {

  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  const initialState = {
    personData: {},
    movieCredits: []
  };

  const [state, dispatch] = useReducer(PeoplesummaryReducer, initialState);

  const fetchPerson = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    dispatch({
      type: FETCH_PERSON,
      payload: data
    });
  }

  const fetchMovieCredits = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    dispatch({
      type: FETCH_MOVIE_CREDITS,
      payload: data.cast.slice(0, 5)
    });
  }


  return (
    <PeoplesummaryContext.Provider
      value={{
        personData: state.personData,
        movieCredits: state.movieCredits,
        fetchPerson,
        fetchMovieCredits
      }}
    >
      {props.children}
    </PeoplesummaryContext.Provider>
  );
}

export default PeoplesummaryState;