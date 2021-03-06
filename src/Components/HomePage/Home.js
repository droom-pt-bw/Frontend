import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getListings } from '../../stateManagement/actions/listingsActions.js';
import JobListings from './JobListings';
import Listings from './Listings';

const Home = ({ getListings, isCompany, loggedIn, token }) => {
  useEffect(() => {
    if (loggedIn) {
      getListings(token);
    }
  }, [getListings, loggedIn, token]);

  if (isCompany === undefined) {
    return (
      <p>Loading Data</p>
    );
  }

  return isCompany
        ? <Listings />
        : <JobListings />
};

const mapStateToProps = ({ currentUser }) => {
  return {
    isCompany: currentUser.isCompany,
    loggedIn: Boolean(currentUser.token),
    token: currentUser.token
  };
};

export default connect(mapStateToProps, { getListings })(Home);