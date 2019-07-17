import { userConstants } from "../actions/registrationTypes";
import { ALREADY_LOGGED_IN, NOT_YET_LOGGED_IN } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
    case ALREADY_LOGGED_IN:
      return {
        ...action.payload,
        matches: [],
        rejects: []
      };

    case userConstants.LOGIN_FAILURE:
    case userConstants.LOGOUT:
    case NOT_YET_LOGGED_IN:
      return null;

    case userConstants.GETALL_SUCCESS:
      const user = Object.values(action.payload).find(e => e.username === state.username);
      return {
        ...state,
        id: user.id,
        email: user.email,
        matches: user.matches,
        rejects: user.rejects
      };

    default:
      return state;
  }
};