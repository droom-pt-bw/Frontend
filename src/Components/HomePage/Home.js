import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getListings } from '../../stateManagement/actions/listingsActions.js';
import { getUsers } from '../../stateManagement/actions/usersActions';
import JobSeekers from './JobSeekers';
import JobListings from './JobListings';

const Home = ({ getUsers, getListings, fetchingUsers, fetchingListings, currentUser }) => {
  useEffect(() => {
    getUsers();
    getListings();
  }, [getUsers, getListings]);

  if (currentUser.isCompany === undefined) {
    return (
      <p>Loading Data</p>
    );
  }

  return (
    <div>
      <h1>Home</h1>
      {currentUser.isCompany
        ? <JobSeekers />
        : <JobListings />
      }
    </div>
  )
};

const mapStateToProps = ({ fetchingUsers, fetchingListings, currentUser }) => {
  return {
    fetchingUsers,
    fetchingListings,
    currentUser
  };
};

export default connect(mapStateToProps, { getUsers, getListings })(Home);