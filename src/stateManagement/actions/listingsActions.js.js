import axios from 'axios';

import { 
  LISTINGS_REQUEST,
  LISTINGS_SUCCESS,
  LISTINGS_FAILURE,
  ADD_LISTING_SUCCESSFUL,
  ADD_LISTING_REQUESTED,
  ADD_LISTING_FAILURE,
  EDIT_LISTING_REQUESTED,
  EDIT_LISTING_SUCCESSFUL,
  EDIT_LISTING_FAILURE,
  DELETE_LISTING_REQUESTED,
  DELETE_LISTING_SUCCESSFUL,
  DELETE_LISTING_FAILURE
} from '../types/types';
import { 
  arrayToObj,
  getAuthHeader
} from './helpers';

export const getListings = () => dispatch => {
  dispatch({ type: LISTINGS_REQUEST });

  axios.get('https://droom-pt-bw.herokuapp.com/listings', 
    getAuthHeader()
  )
    .then(res => {
      dispatch({ type: LISTINGS_SUCCESS, payload: arrayToObj(res.data) });
    })
    .catch(err => {
      dispatch({ type: LISTINGS_FAILURE, payload: err });
    });
};

export const addListing = (listing, currentUser) => dispatch => {
  dispatch({ type: ADD_LISTING_REQUESTED });

  axios.post('https://droom-pt-bw.herokuapp.com/users/listing', {
    ...listing,
    company: currentUser.username,
    user_id: currentUser.id
  }, getAuthHeader())
  .then(res => {
    dispatch({
      type: ADD_LISTING_SUCCESSFUL,
      payload: res.data
    });
  })
  .catch(err => {
    dispatch({
      type: ADD_LISTING_FAILURE,
      payload: err
    });
  });
};

export const editListing = listing => dispatch => {
  dispatch({ type: EDIT_LISTING_REQUESTED });

  axios.put(`https://droom-pt-bw.herokuapp.com/users/listing/${listing.id}`,
    listing,
    getAuthHeader()
  )
  .then(() => {
    dispatch({
      type: EDIT_LISTING_SUCCESSFUL,
      payload: listing
    });
  })
  .catch(err => {
    dispatch({
      type: EDIT_LISTING_FAILURE,
      payload: err
    });
  });
};

export const deleteListing = listingId => dispatch => {
  dispatch({ type: DELETE_LISTING_REQUESTED });

  axios.delete(`https://droom-pt-bw.herokuapp.com/users/listing/${listingId}`,
    getAuthHeader()
  )
  .then(res => {
    console.log(res);
    dispatch({
      type: DELETE_LISTING_SUCCESSFUL,
      payload: listingId
    });
  })
  .catch(err => {
    console.log(err);
    dispatch({
      type: DELETE_LISTING_FAILURE,
      payload: err
    });
  });
};
