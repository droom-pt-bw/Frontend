import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';
import store from '../index';

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