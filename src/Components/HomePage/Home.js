import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getListings } from '../../stateManagement/actions/listingsActions.js';
import JobListings from './JobListings';
import Listings from './Listings';

const Home = ({ getListings, isCompany }) => {
  useEffect(() => {
    getListings();
  }, [getListings]);

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
    isCompany: currentUser.isCompany
  };
};

export default connect(mapStateToProps, { getListings })(Home);