import axios from 'axios';

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';
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

export const logoutLocal = () => {
  return { type: LOGOUT };
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