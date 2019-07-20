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
  DELETE_LISTING_FAILURE,
  SEEKER_MATCH_REQUESTED,
  SEEKER_MATCH_SUCCESSFUL,
  SEEKER_MATCH_FAILURE,
  GET_SEEKER_MATCHES_REQUESTED,
  GET_SEEKER_MATCHES_SUCCESSFUL,
  GET_SEEKER_MATCHES_FAILURE,
  JOB_MATCH_REQUESTED,
  JOB_MATCH_SUCCESSFUL,
  JOB_MATCH_FAILURE,
  GET_MATCHES_FOR_JOBS_REQUESTED,
  GET_MATCHES_FOR_JOBS_SUCCESSFUL,
  GET_MATCHES_FOR_JOBS_FAILURE,
  GET_COMPANY_INFO_REQUESTED,
  GET_COMPANY_INFO_SUCCESS,
  GET_COMPANY_INFO_FAILURE,
  POST_COMPANY_PROFILE_REQUESTED,
  POST_COMPANY_PROFILE_SUCCESS,
  POST_COMPANY_PROFILE_FAILURE,
  EDIT_COMPANY_PROFILE_REQUESTED,
  EDIT_COMPANY_PROFILE_SUCCESS,
  EDIT_COMPANY_PROFILE_FAILURE,
  GET_SEEKER_INFO_REQUESTING,
  GET_SEEKER_INFO_SUCCESS,
  GET_SEEKER_INFO_FAILURE,
  POST_SEEKER_PROFILE_REQUESTED,
  POST_SEEKER_PROFILE_SUCCESS,
  POST_SEEKER_PROFILE_FAILURE,
  EDIT_SEEKER_PROFILE_REQUESTED,
  EDIT_SEEKER_PROFILE_SUCCESS,
  EDIT_SEEKER_PROFILE_FAILURE
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
  deleteListingError: null,

  seekerMatchRequested: false,
  seekerMatchError: null,

  getSeekerMatchesRequested: false,
  getSeekerMatchesError: null,

  jobMatchRequested: false,
  jobMatchError: null,

  getJobMatchesRequested: false,
  getJobMatchesError: null,

  getCompanyInfoRequested: false,
  getCompanyInfoError: null,

  addCompanyProfileRequested: false,
  addCompanyProfileError: null,

  editCompanyProfileRequested: false,
  editCompanyProfileError: null,

  getSeekerInfoRequested: false,
  getSeekerInfoError: null,

  addSeekerProfileRequested: false,
  addSeekerProfileError: null,

  editSeekerProfileRequested: false,
  editSeekerProfileError: null
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
    case SEEKER_MATCH_REQUESTED:
      return {
        ...state,
        seekerMatchRequested: true
      };
    case SEEKER_MATCH_SUCCESSFUL:
      return {
        ...state,
        seekerMatchRequested: false,
        seekerMatchError: null
      };
    case SEEKER_MATCH_FAILURE:
      return {
        ...state,
        seekerMatchRequested: false,
        seekerMAtchError: action.payload
      };
    case GET_SEEKER_MATCHES_REQUESTED:
      return {
        ...state,
        getSeekerMatchesRequested: true
      };
    case GET_SEEKER_MATCHES_SUCCESSFUL:
      return {
        ...state,
        getSeekerMatchesRequested: false,
        getSeekerMatchesError: null
      };
    case GET_SEEKER_MATCHES_FAILURE:
      return {
        ...state,
        getSeekerMatchesRequested: false,
        getSeekerMAtchesError: action.payload
      };

    case JOB_MATCH_REQUESTED:
      return {
        ...state,
        jobMatchRequested: true
      };
    case JOB_MATCH_SUCCESSFUL:
      return {
        ...state,
        jobMatchRequested: false,
        jobMatchError: null
      };
    case JOB_MATCH_FAILURE:
      return {
        ...state,
        jobMatchRequested: false,
        jobMatchError: action.payload
      };
    case GET_MATCHES_FOR_JOBS_REQUESTED:
      return {
        ...state,
        getJobMatchesRequested: true
      };
    case GET_MATCHES_FOR_JOBS_SUCCESSFUL:
      return {
        ...state,
        getMatchesRequested: false,
        getMatchesErorr: null
      };
    case GET_MATCHES_FOR_JOBS_FAILURE:
      return {
        ...state,
        getMatchesRequested: false,
        getMatchesError: action.payload
      };
    case GET_COMPANY_INFO_REQUESTED:
      return {
        ...state,
        getCompanyInfoRequested: true
      };
    case GET_COMPANY_INFO_SUCCESS:
      return {
        ...state,
        getCompanyInfoRequested: false,
        getCompanyInfoError: null
      };
    case GET_COMPANY_INFO_FAILURE:
      return {
        ...state,
        getCompanyInfoRequested: false,
        getCompanyInfoError: action.payload
      };
    case POST_COMPANY_PROFILE_REQUESTED:
      return {
        ...state,
        addCompanyProfileRequested: true
      };
    case POST_COMPANY_PROFILE_SUCCESS:
      return {
        ...state,
        addCompanyProfileRequested: false,
        addCompanyProfileError: null
      };
    case POST_COMPANY_PROFILE_FAILURE:
      return {
        ...state,
        addCompanyProfileRequested: false,
        addCompanyProfileError: action.payload
      };
    case EDIT_COMPANY_PROFILE_REQUESTED:
      return {
        ...state,
        editCompanyProfileRequested: true
      };
    case EDIT_COMPANY_PROFILE_SUCCESS:
      return {
        ...state,
        editCompanyProfileRequested: false,
        editCompanyProfileError: null
      };
    case EDIT_COMPANY_PROFILE_FAILURE:
      return {
        ...state,
        editCompanyProfileRequested: false,
        editCompanyProfileError: action.payload
      };
    case GET_SEEKER_INFO_REQUESTING:
        return {
          ...state,
          getSeekerInfoRequested: true
        };
      case GET_SEEKER_INFO_SUCCESS:
        return {
          ...state,
          getSeekerInfoRequested: false,
          getSeekerInfoError: null
        };
      case GET_SEEKER_INFO_FAILURE:
        return {
          ...state,
          getSeekerInfoRequested: false,
          getSeekerInfoError: action.payload
        };
      case POST_SEEKER_PROFILE_REQUESTED:
        return {
          ...state,
          addSeekerProfileRequested: true
        };
      case POST_SEEKER_PROFILE_SUCCESS:
        return {
          ...state,
          addSeekerProfileRequested: false,
          addSeekerProfileError: null
        };
      case POST_SEEKER_PROFILE_FAILURE:
        return {
          ...state,
          addSeekerProfileRequested: false,
          addSeekerProfileError: action.payload
        };
      case EDIT_SEEKER_PROFILE_REQUESTED:
        return {
          ...state,
          editSeekerProfileRequested: true
        };
      case EDIT_SEEKER_PROFILE_SUCCESS:
        return {
          ...state,
          editSeekerProfileRequested: false,
          editSeekerProfileError: null
        };
      case EDIT_SEEKER_PROFILE_FAILURE:
        return {
          ...state,
          editSeekerProfileRequested: false,
          editSeekerProfileError: action.payload
        };
    default:
      return state;
  };
};