import axios from 'axios';

import { userConstants } from '../types/registrationTypes';
import {
  ALREADY_LOGGED_IN,
  NOT_YET_LOGGED_IN
} from '../types/types';
import { 
  clearLocalUserInfo,
  storeUser,
  getUserFromStorage
} from './helpers';

export const login = (username, password) => dispatch => {
  loginHelper(username, password, dispatch);
};

export const logout = () => {
  clearLocalUserInfo();
  return { type: userConstants.LOGOUT };
};

export const checkLoggedIn = () => {
  const currentUser = getUserFromStorage();

  if (currentUser) {
    return { type: ALREADY_LOGGED_IN, payload: currentUser }
  } else {
    return { type: NOT_YET_LOGGED_IN };
  }
};

export const loginHelper = (username, password, dispatch) => {
  dispatch({ type: userConstants.LOGIN_REQUEST });

  axios.post('https://droom-pt-bw.herokuapp.com/login', { username, password })
    .then(res => {
      console.log(res);
      const { username, isCompany, token, id } = res.data;
      dispatch({ type: userConstants.LOGIN_SUCCESS, payload: { 
          username,
          isCompany,
          token,
          id
        }
      });
      storeUser({
        username,
        isCompany,
        token,
        id
      });
    })
    .catch(err => {
      dispatch({ type: userConstants.LOGIN_FAILURE, payload: err });
    });
};