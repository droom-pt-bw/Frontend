import {
  GET_COMPANY_INFO_SUCCESS,
  POST_COMPANY_PROFILE_SUCCESS,
  EDIT_COMPANY_PROFILE_SUCCESS,
  GET_SEEKER_INFO_SUCCESS,
  EDIT_SEEKER_PROFILE_SUCCESS,
  POST_SEEKER_PROFILE_SUCCESS
} from '../types/types';
import { userConstants } from '../types/registrationTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_COMPANY_INFO_SUCCESS:
    case POST_COMPANY_PROFILE_SUCCESS:
    case EDIT_COMPANY_PROFILE_SUCCESS:
    case GET_SEEKER_INFO_SUCCESS:
    case POST_SEEKER_PROFILE_SUCCESS:
    case EDIT_SEEKER_PROFILE_SUCCESS:
      return action.payload;

    case userConstants.LOGOUT:
      return {};

    default:
      return state;
  }
};