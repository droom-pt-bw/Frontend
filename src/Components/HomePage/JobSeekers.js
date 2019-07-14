import React from 'react';
import { connect } from 'react-redux';

const JobSeekers = ({ jobSeekers, fetchingUsers }) => {

  if (fetchingUsers) {
    return (
      <p>Loading Job Seekers</p>
    );
  }

  return (
    <>
      <h2>
        Job Seekers
      </h2>
      <ul>
        {jobSeekers.map(e => (
          <li key={e.id}>
            <p>{e.username}</p>
            <p>{e.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ users, fetchingUsers }) => {
  return {
    jobSeekers: Object.values(users).filter(e => !e.isCompany),
    fetchingUsers
  };
};

export default connect(mapStateToProps)(JobSeekers);
