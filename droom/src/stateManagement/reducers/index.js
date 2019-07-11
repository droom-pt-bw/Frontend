import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';

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