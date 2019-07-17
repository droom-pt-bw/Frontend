import axios from 'axios';

import {
  REGISTER_REQUESTED,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILURE
} from '../types/types';
import { loginHelper } from './loginActions';

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