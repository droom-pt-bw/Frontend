import axios from 'axios';

import { 
  SEEKER_MATCH_REQUESTED,
  SEEKER_MATCH_FAILURE,
  SEEKER_MATCH_SUCCESSFUL,
  GET_SEEKER_MATCHES_REQUESTED,
  GET_SEEKER_MATCHES_SUCCESSFUL,
  GET_SEEKER_MATCHES_FAILURE,
  JOB_MATCH_REQUESTED,
  JOB_MATCH_SUCCESSFUL,
  JOB_MATCH_FAILURE,
  GET_MATCHES_FOR_JOBS_REQUESTED,
  GET_MATCHES_FOR_JOBS_SUCCESSFUL,
  GET_MATCHES_FOR_JOBS_FAILURE
} from '../types/types';

export const matchSeekerToJob = (userId, listingId) => dispatch => {
  dispatch({ type: SEEKER_MATCH_REQUESTED });

  axios.get(`https://droom-pt-bw.herokuapp.com/match/seeker/${userId}/match/job/${listingId}`)
    .then(() => {
      dispatch({ type: SEEKER_MATCH_SUCCESSFUL });
    })
    .catch(err => {
      dispatch({ type: SEEKER_MATCH_FAILURE, payload: err });
    });
};

export const getSeekerMatches = (userId) => dispatch => {
  dispatch({ type: GET_SEEKER_MATCHES_REQUESTED });

  axios.get(`https://droom-pt-bw.herokuapp.com/matched/seeker/${userId}`)
  .then(res => {
    dispatch({ type: GET_SEEKER_MATCHES_SUCCESSFUL });
  })
  .catch(err => {
    dispatch({ type: GET_SEEKER_MATCHES_FAILURE, payload: err });
  });
};

export const matchJobToSeeker = (listingId, seekerId) => dispatch => {
  dispatch({ type: JOB_MATCH_REQUESTED });

  axios.get(`https://droom-pt-bw.herokuapp.com/match/job/${listingId}/match/seeker/${seekerId}`)
  .then(res => {
    dispatch({ type: JOB_MATCH_SUCCESSFUL });
  })
  .catch(err => {
    dispatch({ type: JOB_MATCH_FAILURE, payload: err });
  });
};

export const getMatchesForJobs = listingId => dispatch => {
  dispatch({type: GET_MATCHES_FOR_JOBS_REQUESTED});

  axios.get(`https://droom-pt-bw.herokuapp.com/matched/job/${listingId}`)
  .then(res => {
    console.log(res);
    dispatch({
      type:GET_MATCHES_FOR_JOBS_SUCCESSFUL,
      payload: {
        id: listingId,
        matches: res.data
      }
    });
  })
  .catch(err => {
    dispatch({type: GET_MATCHES_FOR_JOBS_FAILURE, payload: err});
  })
};
