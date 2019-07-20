import { userConstants } from '../types/registrationTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETALL_SUCCESS:
      return action.payload;
    case userConstants.GETALL_FAILURE:
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};