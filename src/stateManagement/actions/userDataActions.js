import axios from 'axios';


import {
GET_SEEKER_INFO_REQUESTING,
GET_SEEKER_INFO_SUCCESS,
GET_SEEKER_INFO_FAILURE,
POST_SEEKER_PROFILE_REQUESTED,
POST_SEEKER_PROFILE_SUCCESS,
POST_SEEKER_PROFILE_FAILURE,
EDIT_SEEKER_PROFILE_REQUESTED,
EDIT_SEEKER_PROFILE_SUCCESS,
EDIT_SEEKER_PROFILE_FAILURE
} from '../types/types';

export const getSeekerInfo = id => dispatch => {
    dispatch({ type: GET_SEEKER_INFO_REQUESTING });


    axios.get(`https://droom-pt-bw.herokuapp.com/seekers/${id}`)
    .then(res => {
        console.log(res);
        dispatch({ type: GET_SEEKER_INFO_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: GET_SEEKER_INFO_FAILURE, payload: err });
    })


    export const postSeekerInfo = (profile) => dispatch => {
        dispatch({ type: POST_SEEKER_PROFILE_REQUESTED });

        axios.post(`https://droom-pt-bw.herokuapp.com/seekers`, profile)
        .then(res => {
            dispatch({
                type: POST_SEEKER_PROFILE_SUCCESS,
                payload: res.data
            });
        }) 
        .catch(err => {
            dispatch({
                type: POST_SEEKER_PROFILE_FAILURE, 
                payload: err
            });
        });
    };

    export const editSeekerInfo = profile => dispatch => {
        dispatch({ type: EDIT_SEEKER_PROFILE_REQUESTED });

        axios.post(`companies`, profile)
        .then(res => {
            dispatch({
                type: EDIT_SEEKER_PROFILE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type : EDIT_SEEKER_PROFILE_FAILURE,
                payload: err
            });
        });
    };


}