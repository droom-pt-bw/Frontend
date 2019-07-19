import {
  GET_SEEKER_MATCHES_SUCCESSFUL
} from '../types/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_SEEKER_MATCHES_SUCCESSFUL:
      return action.payload;
    default:
      return state;
  };
};