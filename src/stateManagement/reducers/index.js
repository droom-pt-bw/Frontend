import { combineReducers } from 'redux';

import { 
  ADD_LISTING_SUCCESSFUL
} from '../types/types';

import usersReducer from './usersReducer';
import flagsReducer from './flagsReducer';
import matchesReducer from './matchesReducer';
import listingsReducer from './listingsReducer';
import currentUserReducer from './currentUserReducer';

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
  fetchListingsError: null,

  registerRequested: false,
  registerError: null
};

export default combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  matches: matchesReducer,
  currentUser: currentUserReducer,
  flags: flagsReducer
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case userConstants.LOGIN_REQUEST:
    //   return {
    //     ...state,
    //     loginRequested: true,
    //     loginFailed: false,
    //     loginError: null
    //   };
    // case userConstants.LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     currentUser: { ...state.currentUser, ...action.payload},
    //     // loginRequested: false,
    //     // loginFailed: false,
    //     // loginError: null
    //   }
    // case userConstants.LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     currentUser: null,
    //     // loginFailed: true,
    //     // loginError: action.payload
    //   }
    // case userConstants.LOGOUT:
    //   return {
    //     ...state,
    //     currentUser: null,
    //     // loginFailed: false,
    //     // loginError: null
    //   }
    // case userConstants.GETALL_REQUEST:
    //   return {
    //     ...state,
    //     fetchingUsers: true
    //   };
    // case userConstants.GETALL_SUCCESS:

    //   const user = Object.values(action.payload).find(e => e.username === state.currentUser.username);

    //   return {
    //     ...state,
    //     // fetchingUsers: false,
    //     // fetchUsersError: null,
    //     //users: action.payload,
    //     currentUser: {
    //       ...state.currentUser,
    //       id: user.id,
    //       email: user.email,
    //       isCompany: !!user.isCompany
    //     }
    //   };
    // case userConstants.GETALL_FAILURE:
    //   return {
    //     ...state,
    //     fetchingUsers: false,
    //     fetchUsersError: action.payload
    //   };
    // case LISTINGS_REQUEST:
    //   return {
    //     ...state,
    //     fetchingListing: true
    //   };
    // case LISTINGS_SUCCESS:
    //   return {
    //     ...state,
    //     // fetchingListings: false,
    //     // fetchListingsErrors: null,
    //     listings: action.payload
    //   };
    // case LISTINGS_FAILURE:
    //   return {
    //     ...state,
    //     fetchingListings: false,
    //     fetchListingsError: action.payload
    //   };
    // case ALREADY_LOGGED_IN:
    //   return {
    //     ...state,
    //     currentUser: action.payload
    //   };
    // case NOT_YET_LOGGED_IN:
    //   return {
    //     ...state,
    //     currentUser: null
    //   };
    // case REGISTER_REQUESTED:
    //   return {
    //     ...state,
    //     registerRequested: true
    //   };
    // case REGISTER_SUCCESSFUL:
    //   return {
    //     ...state,
    //     registerRequested: false,
    //     registerError: null
    //   };
    // case REGISTER_FAILURE:
    //   return {
    //     ...state,
    //     registerRequested: false,
    //     registerError: action.payload
    //   };
    case ADD_LISTING_SUCCESSFUL:
      return {
        ...state,
        listings: {
          ...state.listings,
          [action.payload.id]: {
            ...action.payload
          }
        }
      };
    default:
      return state;
  };
};