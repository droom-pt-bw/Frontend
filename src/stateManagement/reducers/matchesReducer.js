import {
  GET_SEEKER_MATCHES_SUCCESSFUL
} from '../types/types';
import { userConstants } from '../types/registrationTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_SEEKER_MATCHES_SUCCESSFUL:
      return action.payload;
    case userConstants.LOGOUT:
      return [];
    default:
      return state;
  };
};