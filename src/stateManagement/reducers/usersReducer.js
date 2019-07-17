import { userConstants } from '../actions/registrationTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETALL_SUCCESS:
      return action.payload;
    case userConstants.GETALL_FAILURE:
      return {};
    default:
      return state;
  }
};