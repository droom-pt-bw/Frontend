import { LISTINGS_REQUEST, LISTINGS_SUCCESS, LISTINGS_FAILURE, ALREADY_LOGGED_IN, NOT_YET_LOGGED_IN } from '../actions/types';
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
        currentUser: { ...state.currentUser, ...action.payload},
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

      const user = Object.values(action.payload).find(e => e.username === state.currentUser.username);

      return {
        ...state,
        fetchingUsers: false,
        fetchUsersError: null,
        users: action.payload,
        currentUser: {
          ...state.currentUser,
          id: user.id,
          email: user.email,
          isCompany: !!user.isCompany
        }
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
    case ALREADY_LOGGED_IN:
      return {
        ...state,
        currentUser: action.payload
      };
    case NOT_YET_LOGGED_IN:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  };
};