import axios from 'axios';

import { 
  LISTINGS_REQUEST,
  LISTINGS_SUCCESS,
  LISTINGS_FAILURE,
  ALREADY_LOGGED_IN,
  NOT_YET_LOGGED_IN, 
  REGISTER_REQUESTED,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILURE,
  ADD_LISTING_SUCCESSFUL,
  EDIT_LISTING_SUCCESSFUL,
  DELETE_LISTING_SUCCESSFUL,
  MATCH_SEEKER_WITH_COMPANY_SUCCESSFUL,
  ADD_LISTING_REQUESTED,
  ADD_LISTING_FAILURE
} from './types';
import { userConstants } from './registrationTypes';
import { 
  arrayToObj,
  storeUser,
  getUserFromStorage,
  getTokenFromStorage,
  clearLocalUserInfo
} from '../../utils/helpers';

export const login = (username, password) => dispatch => {
  loginHelper(username, password, dispatch);
};

export const logout = () => {
  clearLocalUserInfo();
  return { type: userConstants.LOGOUT };
};

export const register = user => dispatch => {
  dispatch({ type: REGISTER_REQUESTED });

  axios.post('https://droom-pt-bw.herokuapp.com/register', user)
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESSFUL })
      loginHelper(user.username, user.password, dispatch);
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: userConstants.GETALL_REQUEST });

  axios.get('https://droom-pt-bw.herokuapp.com/users', {
    headers: {
      Authorization: getTokenFromStorage()
    }
  })
    .then(res => {
      dispatch({ type: userConstants.GETALL_SUCCESS, payload: arrayToObj(res.data.map(e => {
        e.matches = [];
        e.rejects = [];
        return e;
      })) });
    })
    .catch(err => {
      dispatch({ type: userConstants.GETALL_FAILURE, payload: err });
    });
};

export const getListings = () => dispatch => {
  dispatch({ type: LISTINGS_REQUEST });

  axios.get('https://droom-pt-bw.herokuapp.com/listings', {
    headers: {
      Authorization: getTokenFromStorage()
    }
  })
    .then(res => {
      dispatch({ type: LISTINGS_SUCCESS, payload: arrayToObj(res.data) });
    })
    .catch(err => {
      dispatch({ type: LISTINGS_FAILURE, payload: err });
    });
};

export const checkLoggedIn = () => {
  const currentUser = getUserFromStorage(); //JSON.parse(window.localStorage.getItem('currentUser'));

  if (currentUser) {
    return { type: ALREADY_LOGGED_IN, payload: currentUser }
  } else {
    return { type: NOT_YET_LOGGED_IN };
  }
};

const loginHelper = (username, password, dispatch) => {
  dispatch({ type: userConstants.LOGIN_REQUEST });

  axios.post('https://droom-pt-bw.herokuapp.com/login', { username, password })
    .then(res => {
      console.log(res);
      dispatch({ type: userConstants.LOGIN_SUCCESS, payload: { 
          username: res.data.username,
          isCompany: res.data.isCompany,
          token: res.data.token 
        }
      });
      storeUser({
        username: res.data.username,
        isCompany: res.data.isCompany,
        token: res.data.token
      });
    })
    .catch(err => {
      dispatch({ type: userConstants.LOGIN_FAILURE, payload: err });
    });
};

export const addListing = (listing, currentUser) => dispatch => {
  dispatch({ type: ADD_LISTING_REQUESTED });

  axios.post('https://droom-pt-bw.herokuapp.com/users/listing', {
    ...listing,
    company: currentUser.username,
    user_id: currentUser.id
  },{
    headers: {
      Authorization: getTokenFromStorage()
    }
  })
  .then(res => {
    dispatch({
      type: ADD_LISTING_SUCCESSFUL,
      payload: res.data
    });
  })
  .catch(err => {
    dispatch({
      type: ADD_LISTING_FAILURE,
      payload: err
    });
  });
};

export const addListingLocal = (listing, currentUser) => {
  return { 
      type: ADD_LISTING_SUCCESSFUL,
      payload: {
        ...listing,
        createdAt: Date.now(),
        id: Date.now(),
        company: currentUser.username,
        ownerId: currentUser.id
      }
    };
};

export const editListingLocal = (listing) => {
  return {
    type: EDIT_LISTING_SUCCESSFUL,
    payload: listing
  };
};

export const deleteListingLocal = (listingId) => {
  return {
    type: DELETE_LISTING_SUCCESSFUL,
    payload: listingId
  };
};

export const matchJobWithSeekerLocal = () => {
  return {

  };
};

export const matchSeekerWithCompanyLocal = (seeker, currentUser) => {
  return {
    type: MATCH_SEEKER_WITH_COMPANY_SUCCESSFUL,
    payload: {
      seeker: seeker.id,
      currentUser: currentUser.id
    }
  };
};

export const rejectJobWithSeekerLocal = () => {
  return {

  };
};

export const rejectSeekerWithCompanyLocal = () => {
  return {

  };
};