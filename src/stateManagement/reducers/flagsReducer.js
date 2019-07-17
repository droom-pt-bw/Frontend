import { userConstants } from '../actions/registrationTypes';
import { LISTINGS_REQUEST, LISTINGS_SUCCESS, LISTINGS_FAILURE } from '../actions/types';

const initalFlags = {
  loginRequested: false,
  loginFailed: false,
  loginError: null,

  fetchingUsers: false,
  fetchUsersError: null,

  fetchingListings: false,
  fetchListingsError: null,

  registerRequested: false,
  registerError: null
};

export default (state = initalFlags, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loginRequested: true,
        loginFailed: false,
        loginError: null
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loginRequested: false,
        loginFailed: false,
        loginError: null
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loginRequested: false,
        loginFailed: true,
        loginError: action.payload
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        loginFailed: false,
        loginError: null
      };
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        fetchingUsers: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        fetchingUsers: false,
        fetchUsersError: null
      };
    case userConstants.GETALL_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        fetchUsersError: action.payload
      };
    case LISTINGS_REQUEST:
      return {
        ...state,
        fetchingListing: true
      };
    case LISTINGS_SUCCESS:
      return {
        ...state,
        fetchingListings: false,
        fetchListingsErrors: null
      };
    case LISTINGS_FAILURE:
      return {
        ...state,
        fetchingListings: false,
        fetchListingsError: action.payload
      };
    case userConstants.REGISTER_REQUESTED:
      return {
        ...state,
        registerRequested: true
      };
    case userConstants.REGISTER_SUCCESSFUL:
      return {
        ...state,
        registerRequested: false,
        registerError: null
      };
    default:
      return state;
  };
};