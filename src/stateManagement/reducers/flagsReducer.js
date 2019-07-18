import { userConstants } from '../types/registrationTypes';
import {
  LISTINGS_REQUEST,
  LISTINGS_SUCCESS,
  LISTINGS_FAILURE,
  ADD_LISTING_REQUESTED,
  ADD_LISTING_SUCCESSFUL,
  ADD_LISTING_FAILURE,
  EDIT_LISTING_REQUESTED,
  EDIT_LISTING_SUCCESSFUL,
  EDIT_LISTING_FAILURE,
  DELETE_LISTING_REQUESTED,
  DELETE_LISTING_SUCCESSFUL,
  DELETE_LISTING_FAILURE
} from '../types/types';

const initalFlags = {
  loginRequested: false,
  loginFailed: false,
  loginError: null,

  fetchingUsers: false,
  fetchUsersError: null,

  fetchingListings: false,
  fetchListingsError: null,

  registerRequested: false,
  registerError: null,

  addListingRequested: false,
  addListingError: null,

  editListingRequested: false,
  editListingError: null,

  deleteListingRequested: false,
  deleteListingError: null
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
    case ADD_LISTING_REQUESTED:
      return {
        ...state,
        addListingRequested: true,
      };
    case ADD_LISTING_SUCCESSFUL:
      return {
        ...state,
        addListingRequested: false,
        addListingError: null
      }
    case ADD_LISTING_FAILURE:
      return {
        ...state,
        addListingRequested: false,
        addListingError: action.payload
      };
    case EDIT_LISTING_REQUESTED:
      return {
        ...state,
        editListingRequested: true,
      };
    case EDIT_LISTING_SUCCESSFUL:
      return {
        ...state,
        editListingRequested: false,
        editListingError: null
      };
    case EDIT_LISTING_FAILURE:
      return {
        ...state,
        editListingRequested: false,
        editListingError: action.payload
      };
    case DELETE_LISTING_REQUESTED:
      return {
        ...state,
        deleteListingRequested: true
      };
    case DELETE_LISTING_SUCCESSFUL:
      return {
        ...state,
        deleteListingRequested: false,
        deleteListingError: null
      };
    case DELETE_LISTING_FAILURE:
      return {
        ...state,
        deleteListingRequested: false,
        deleteListingError: action.payload
      };
    default:
      return state;
  };
};