import React, { useReducer } from 'react';
import HeaderContext from './headerContext';
import HeaderReducer from './headerReducer';
import { FETCH_TRAILER } from '../types';

const HeaderState = props => {

  const API_KEY = "e87f29ad6137f88242f3bcd9b94b1af7";
  const initialState = {
    video: ""
  };

  const [state, dispatch] = useReducer(HeaderReducer, initialState);

  const fetchTrailer = async (id) => {
    if(!id) return;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    if(!data.results[0]) return;

    dispatch({
      type: FETCH_TRAILER,
      payload: data.results[0].key
    });
  }

  return (
    <HeaderContext.Provider
      value={{
        video: state.video,
        fetchTrailer
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
}

export default HeaderState;
