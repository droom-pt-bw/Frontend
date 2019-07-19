import { 
  LISTINGS_SUCCESS,
  LISTINGS_FAILURE,
  ADD_LISTING_SUCCESSFUL,
  EDIT_LISTING_SUCCESSFUL,
  DELETE_LISTING_SUCCESSFUL,
  GET_MATCHES_FOR_JOBS_SUCCESSFUL
} from "../types/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LISTINGS_SUCCESS:
      return action.payload;
    case LISTINGS_FAILURE:
      return {};

    case ADD_LISTING_SUCCESSFUL:
    case EDIT_LISTING_SUCCESSFUL:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload
        }
      };

    case DELETE_LISTING_SUCCESSFUL:
      const { [action.payload]: toBeDeleted, ...rest } = state;
      return rest;
    
    case GET_MATCHES_FOR_JOBS_SUCCESSFUL:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          matches: action.payload.matches
        }
      };
    
    default:
      return state;
  }
};