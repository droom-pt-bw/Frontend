import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';

const initialState = {
  users: {
    1: {
      id: 1,
      username: 'test',
      password: '123'
    }
  },
  listings: {

  },
  matches: [],
  currentUser: null,
  loginFailed: false
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
    default:
      return state;
  };
};