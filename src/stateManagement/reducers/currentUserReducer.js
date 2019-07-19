import { userConstants } from "../types/registrationTypes";
import { ALREADY_LOGGED_IN, NOT_YET_LOGGED_IN } from "../types/types";

export default (state = null, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
    case ALREADY_LOGGED_IN:
      return action.payload;

    case userConstants.LOGIN_FAILURE:
    case userConstants.LOGOUT:
    case NOT_YET_LOGGED_IN:
      return null;

    default:
      return state;
  }
};