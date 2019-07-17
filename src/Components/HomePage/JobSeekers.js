import React, { useState } from 'react';
import { connect } from 'react-redux';

const JobSeekers = ({ jobSeekers, fetchingUsers }) => {
  const [seekersIndex, setSeekersIndex] = useState(0);

  const matchSeeker = () => {
    setSeekersIndex(seekersIndex + 1);
  };

  const rejectSeeker = () => {
    setSeekersIndex(seekersIndex + 1);
  };

  if (fetchingUsers) {
    return (
      <p>Loading Job Seekers</p>
    );
  }

  if (!jobSeekers.length || seekersIndex > jobSeekers.length - 1) {
    return (
      <p>No more potential candidates right now</p>
    );
  }

  return (
    <>
      <h2>
        Job Seekers
      </h2>
      <div>
        <p>{jobSeekers[seekersIndex].username}</p>
        <p>{jobSeekers[seekersIndex].email}</p>
      </div>
      <button onClick={matchSeeker}>
        Match
      </button>
      <button onClick={rejectSeeker}>
        Reject
      </button>
    </>
  );
};

const mapStateToProps = ({ users, flags, currentUser }) => {
  return {
    jobSeekers: Object.values(users)
        .filter(e => !e.isCompany && !(currentUser.matches.includes(e.id) || currentUser.rejects.includes(e.id))),
    fetchingUsers: flags.fetchingUsers
  };
};

export default connect(mapStateToProps)(JobSeekers);
