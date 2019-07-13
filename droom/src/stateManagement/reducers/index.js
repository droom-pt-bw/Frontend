import { LISTINGS_REQUEST, LISTINGS_SUCCESS, LISTINGS_FAILURE } from '../actions/types';
import { userConstants } from '../actions/registrationTypes';

const initialState = {
  users: {},
  listings: {},

  matches: [],

  currentUser: null,
  loginRequested: false,
  loginFailed: false,
  loginError: null,

  fetchingUsers: false,
  fetchUsersError: null,

  fetchingListings: false,
  fetchListingsError: null
};

export default (state = initialState, action) => {
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
        currentUser: action.payload,
        loginRequested: false,
        loginFailed: false,
        loginError: null
      }
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        currentUser: null,
        loginFailed: true,
        loginError: action.payload
      }
    case userConstants.LOGOUT:
      return {
        ...state,
        currentUser: null,
        loginFailed: false,
        loginError: null
      }
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        fetchingUsers: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        fetchingUsers: false,
        fetchUsersError: null,
        users: action.payload
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
        fetchListingsErrors: null,
        listings: action.payload
      };
    case LISTINGS_FAILURE:
      return {
        ...state,
        fetchingListings: false,
        fetchListingsError: action.payload
      };
    default:
      return state;
  };
};