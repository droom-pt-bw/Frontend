import axios from 'axios';

import {
  GET_COMPANY_INFO_REQUESTED,
  GET_COMPANY_INFO_SUCCESS,
  GET_COMPANY_INFO_FAILURE
} from '../types/types';

export const getCompanyInfo = id => dispatch => {
  dispatch({ type: GET_COMPANY_INFO_REQUESTED });

  axios.get(`https://droom-pt-bw.herokuapp.com/companies/${id}`)
  .then(res => {
    console.log(res);
    dispatch({ type: GET_COMPANY_INFO_SUCCESS, payload: res.data });
  })
  .catch(err => {
    console.log(err);
    dispatch({ type: GET_COMPANY_INFO_FAILURE, payload: err });
  });
};