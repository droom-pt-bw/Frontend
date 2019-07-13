import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LISTINGS_REQUEST, LISTINGS_SUCCESS, LISTINGS_FAILURE } from '../actions/types';
import { userConstants } from '../actions/registrationTypes';

const initialState = {
  users: {
    1: {
      id: 1,
      username: 'test',
      password: '123',
      type: 'job-seeker'
    },
    2: {
      id: 2,
      username: 'Initech',
      password: 'password',
      type: 'company'
    }
  },
  listings: {
    1: {
      id: 1,
      ownderId: 2,
      title: 'Synergy Analyst',
      desc: 'You write memos.  No one reads them.',
      skills: 'Literally anyone could do this',
      salary: 'ramen'
    }
  },
  matches: [],
  currentUser: null,
  loginFailed: false,

  fetchingUsers: false,
  fetchUsersError: null,

  fetchingListings: false,
  fetchListingsError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loginFailed: false
      }
    case LOGIN_FAIL:
      return {
        ...state,
        currentUser: null,
        loginFailed: true
      }
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        loginFailed: false
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