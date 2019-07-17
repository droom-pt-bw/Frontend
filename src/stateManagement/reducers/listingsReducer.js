import { LISTINGS_SUCCESS, LISTINGS_FAILURE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LISTINGS_SUCCESS:
      return action.payload;
    case LISTINGS_FAILURE:
      return {};
    default:
      return state;
  }
};