import {
  ADD_LISTING_SUCCESSFUL,
  EDIT_LISTING_SUCCESSFUL,
  DELETE_LISTING_SUCCESSFUL,
  MATCH_SEEKER_WITH_COMPANY_SUCCESSFUL
} from './types';

// This is just some testing stuff.  Don't actually use it for anything 'real'.

export const addListingLocal = (listing, currentUser) => {
  return { 
      type: ADD_LISTING_SUCCESSFUL,
      payload: {
        ...listing,
        createdAt: Date.now(),
        id: Date.now(),
        company: currentUser.username,
        ownerId: currentUser.id
      }
    };
};

export const editListingLocal = (listing) => {
  return {
    type: EDIT_LISTING_SUCCESSFUL,
    payload: listing
  };
};

export const deleteListingLocal = (listingId) => {
  return {
    type: DELETE_LISTING_SUCCESSFUL,
    payload: listingId
  };
};

export const matchJobWithSeekerLocal = () => {
  return {

  };
};

export const matchSeekerWithCompanyLocal = (seeker, currentUser) => {
  return {
    type: MATCH_SEEKER_WITH_COMPANY_SUCCESSFUL,
    payload: {
      seeker: seeker.id,
      currentUser: currentUser.id
    }
  };
};

export const rejectJobWithSeekerLocal = () => {
  return {

  };
};

export const rejectSeekerWithCompanyLocal = () => {
  return {

  };
};