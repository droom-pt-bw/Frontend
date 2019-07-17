import axios from 'axios';

import { userConstants } from '../types/registrationTypes';
import {
  getAuthHeader,
  arrayToObj
} from './helpers';

export const getUsers = () => dispatch => {
  dispatch({ type: userConstants.GETALL_REQUEST });

  axios.get('https://droom-pt-bw.herokuapp.com/users',
    getAuthHeader()
  )
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