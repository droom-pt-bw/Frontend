import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';
import { userConstants } from '../actions/registrationTypes';

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
  loginFailed: false,
  fetchingUsers: false,
  fetchUsersError: null
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
    case userConstants.GETALL_REQUEST:
      return {
        ...state,
        fetchingUsers: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        fetchingUsers: false,
        fetchUsersError: null,
        users: action.payload
      }
    default:
      return state;
  };
};