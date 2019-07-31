import React, { useReducer } from 'react';
import HeaderContext from './headerContext';
import HeaderReducer from './headerReducer';
import { FETCH_TRAILER } from '../types';

let moviedbClientID;

if (process.env.NODE_ENV !== "production") {
  moviedbClientID = process.env.REACT_APP_MOVIEDB_CLIENT_ID;
} else {
  moviedbClientID = process.env.MOVIEDB_CLIENT_ID;
}

const HeaderState = props => {
  const initialState = {
    video: ""
  };

  const [state, dispatch] = useReducer(HeaderReducer, initialState);

  const fetchTrailer = async (id) => {
    if(!id) return;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${moviedbClientID}&language=en-US&page=1`);
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
