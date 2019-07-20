import React, { useState } from 'react';
import { connect } from 'react-redux';

import { matchSeekerToJob } from '../../stateManagement/actions/matchingActions';

const JobListings = ({ listings, fetchingListings, userId, matchSeekerToJob }) => {
  const [listingsIndex, setListingIndex] = useState(0);

  const matchListing = () => {
    matchSeekerToJob(userId, listings[listingsIndex].id);
    setListingIndex(listingsIndex + 1);
  };

  const rejectListing = () => {
    setListingIndex(listingsIndex + 1);
  };

  if (fetchingListings) {
    return (
      <p>Loading Listings</p>
    );
  }
  if (!listings.length || listingsIndex > listings.length - 1) {
    return (
      <p>No more jobs right now</p>
    );
  }

  return (
    <>
      <h2>
        Job Listings
      </h2>
      <div>
        <p>{listings[listingsIndex].jobtitle}</p>
        <p>{listings[listingsIndex].company}</p>
        <p>{listings[listingsIndex].location}</p>
        <p>{listings[listingsIndex].description}</p>
        <p>{listings[listingsIndex].salary}</p>

        <button onClick={matchListing}>
          Match
        </button>
        <button onClick={rejectListing}>
          Reject
        </button>
      </div>
    </>
  )
};

const mapStateToProps = ({ listings, fetchingListings, currentUser }) => {
  return {
    listings: Object.values(listings),
    fetchingListings,
    userId: currentUser.id
  };
};

export default connect(mapStateToProps, { matchSeekerToJob })(JobListings);
