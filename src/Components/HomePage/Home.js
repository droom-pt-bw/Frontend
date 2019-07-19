import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getListings } from '../../stateManagement/actions/listingsActions.js';
import JobSeekers from './JobSeekers';
import JobListings from './JobListings';

const Home = ({ getListings, isCompany }) => {
  useEffect(() => {
    getListings();
  }, [getListings]);

  if (isCompany === undefined) {
    return (
      <p>Loading Data</p>
    );
  }

  return (
    <div>
      {isCompany
        ? <JobSeekers />
        : <JobListings />
      }
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    isCompany: currentUser.isCompany
  };
};

export default connect(mapStateToProps, { getListings })(Home);