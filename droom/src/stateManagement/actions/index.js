import axios from 'axios';

import { LOGIN_SUCCESS, LOGIN_FAIL, LISTINGS_REQUEST, LISTINGS_SUCCESS, LISTINGS_FAILURE, ALREADY_LOGGED_IN, NOT_YET_LOGGED_IN } from './types';
import { userConstants } from './registrationTypes';
import store from '../index';
import { arrayToObj } from '../../utils/helpers';

export const loginLocal = (username, password) => {
  const { users } = store.getState();

  const user = Object.values(users).find(e => e.username === username);

  if (user && user.password === password) {
    return { type: LOGIN_SUCCESS, payload: user };
  } else {
    return { type: LOGIN_FAIL };
  }
};

export const login = (username, password) => dispatch => {
  dispatch({ type: userConstants.LOGIN_REQUEST });

  axios.post('https://droom-pt-bw.herokuapp.com/login', { username, password })
    .then(res => {
      dispatch({ type: userConstants.LOGIN_SUCCESS, payload: { username, token: res.data.token } });
      window.localStorage.setItem('currentUser', JSON.stringify({username, token: res.data.token}));
    })
    .catch(err => {
      dispatch({ type: userConstants.LOGIN_FAILURE, payload: err });
    });
};

export const logout = () => {
  window.localStorage.removeItem('currentUser');
  return { type: userConstants.LOGOUT };
};

export const register = user => dispatch => {
  axios.post('https://droom-pt-bw.herokuapp.com/register', user) //getting a 404?
    .then(res => {
      console.log(res);
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: userConstants.GETALL_REQUEST });

  axios.get('https://droom-pt-bw.herokuapp.com/users')
    .then(res => {
      dispatch({ type: userConstants.GETALL_SUCCESS, payload: arrayToObj(res.data) });
    })
    .catch(err => {
      dispatch({ type: userConstants.GETALL_FAILURE, payload: err });
    });
};

export const getListings = () => dispatch => {
  dispatch({ type: LISTINGS_REQUEST });

  axios.get('https://droom-pt-bw.herokuapp.com/listings')
    .then(res => {
      dispatch({ type: LISTINGS_SUCCESS, payload: arrayToObj(res.data) });
    })
    .catch(err => {
      dispatch({ type: LISTINGS_FAILURE, payload: err });
    });
};

export const checkLoggedIn = () => {
  const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));

  if (currentUser) {
    return { type: ALREADY_LOGGED_IN, payload: currentUser }
  } else {
    return { type: NOT_YET_LOGGED_IN };
  }
};