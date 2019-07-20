import axios from 'axios';

import {
  GET_COMPANY_INFO_REQUESTED,
  GET_COMPANY_INFO_SUCCESS,
  GET_COMPANY_INFO_FAILURE,
  POST_COMPANY_PROFILE_REQUESTED,
  POST_COMPANY_PROFILE_SUCCESS,
  POST_COMPANY_PROFILE_FAILURE,
  EDIT_COMPANY_PROFILE_REQUESTED,
  EDIT_COMPANY_PROFILE_FAILURE,
  EDIT_COMPANY_PROFILE_SUCCESS
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

export const postCompanyInfo = (profile) => dispatch => {
  dispatch({ type: POST_COMPANY_PROFILE_REQUESTED });

  axios.post(`companies`, profile)
  .then(res => {
    dispatch({
      type: POST_COMPANY_PROFILE_SUCCESS,
      payload: res.data
    });
  })
  .catch(err => {
    dispatch({
      type: POST_COMPANY_PROFILE_FAILURE,
      payload: err
    });
  });
};

export const editCompanyInfo = profile => dispatch => {
  dispatch({ type: EDIT_COMPANY_PROFILE_REQUESTED });

  axios.put(`https://droom-pt-bw.herokuapp.com/companies/${profile.id}`, profile)
  .then(res => {
    dispatch({
      type: EDIT_COMPANY_PROFILE_SUCCESS,
      payload: res.data
    });
  })
  .catch(err => {
    dispatch({
      type: EDIT_COMPANY_PROFILE_FAILURE,
      payload: err
    });
  });
};