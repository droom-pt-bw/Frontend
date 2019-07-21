import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { matchSeekerToJob } from '../../stateManagement/actions/matchingActions';

import PaperBacker from '../Common/PaperBacker';

const Section = styled.section`
  margin: 2rem 0;

  h5 {
    margin-bottom: 0.5rem;
  }
`;

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
    <PaperBacker>
      <h1>
        {listings[listingsIndex].jobtitle}
      </h1>
      <Section>
        <h5>Employer</h5>
        <p>{listings[listingsIndex].company}</p>
      </Section>
      <Section>
        <h5>Location</h5>
        <p>{listings[listingsIndex].location}</p>
      </Section>
      <Section>
        <h5>Description</h5>
        <p>{listings[listingsIndex].description}</p>
      </Section>
      <Section>
        <h5>Approx Salary</h5>
        <p>{listings[listingsIndex].salary}</p>
      </Section>
      <button onClick={matchListing}>
        Match
      </button>
      <button onClick={rejectListing}>
        Reject
      </button>
    </PaperBacker>
  );
};

const mapStateToProps = ({ listings, fetchingListings, currentUser }) => {
  return {
    listings: Object.values(listings),
    fetchingListings,
    userId: currentUser.id
  };
};

export default connect(mapStateToProps, { matchSeekerToJob })(JobListings);
