import {
  GET_COMPANY_INFO_SUCCESS
} from '../types/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_COMPANY_INFO_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};