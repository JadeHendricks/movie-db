import { FETCH_RESULTS, FETCH_TOTAL_RESULTS, NEXT_PAGE, RESET_PAGE } from '../types';

export default ( state, action ) => {
  switch (action.type) {
    case FETCH_RESULTS:
      return {
        ...state,
        results: action.payload
      };
      case FETCH_TOTAL_RESULTS:
      return {
        ...state,
        totalResults: action.payload
      };
      case NEXT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
      case RESET_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    default: 
      return state;
  }
};