import { FETCH_TRAILER } from '../types';

export default ( state, action ) => {
  switch (action.type) {
    case FETCH_TRAILER:
      return {
        ...state,
        video: action.payload
      };
    default: 
      return state;
  }
};