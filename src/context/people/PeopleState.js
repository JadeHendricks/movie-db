import React, { useReducer } from 'react';
import PeopleContext from './peopleContext';
import PeopleReducer from './peopleReducer';
import { FETCH_PERSON, FETCH_MOVIE_CREDITS } from '../types';

const PeopleState = props => {

  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";

  const initialState = {
    personData: {},
    movieCredits: []
  };

  const [state, dispatch] = useReducer(PeopleReducer, initialState);

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
    <PeopleContext.Provider
      value={{
        personData: state.personData,
        movieCredits: state.movieCredits,
        fetchPerson,
        fetchMovieCredits
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
}

export default PeopleState;
