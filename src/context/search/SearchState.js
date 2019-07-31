import React, { useReducer } from 'react';
import SearchContext from './searchContext';
import SearchReducer from './searchReducer';
import { 
  FETCH_RESULTS, 
  FETCH_TOTAL_RESULTS, 
  NEXT_PAGE, 
  RESET_PAGE } from '../types';
  
const SearchState = props => {
  const initialState = {
    results: [],
    totalResults: 0,
    currentPage: 1
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const resetPage = () => {
    dispatch({
      type: RESET_PAGE,
      payload: 1
    })
  }

  const fetchSearch = async (query) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&query=${query}&language=en-US&page=1&include_adult=false`);
    const data = await response.json();
    
    dispatch({
      type: FETCH_RESULTS,
      payload: data.results
    });

    dispatch({
      type: FETCH_TOTAL_RESULTS,
      payload: data.total_results
    });
    
  }

  const nextPage = async (pageNumber, query) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&query=${query}&language=en-US&page=${pageNumber}&include_adult=false`);
    const data = await response.json();

    dispatch({
      type: FETCH_RESULTS,
      payload: data.results
    });

    dispatch({
      type: NEXT_PAGE,
      payload: pageNumber
    });
  }


  return (
    <SearchContext.Provider
      value={{
        results: state.results,
        totalResults: state.totalResults,
        currentPage: state.currentPage,
        fetchSearch,
        resetPage,
        nextPage
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchState;
