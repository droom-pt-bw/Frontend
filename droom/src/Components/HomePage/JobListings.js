import React from 'react';
import { connect } from 'react-redux';

const JobListings = ({ listings, fetchingListings }) => {

  if (fetchingListings) {
    return (
      <p>Loading Listings</p>
    );
  }

  return (
    <>
      <h2>
        Job Listings
      </h2>
      <ul>
        {listings.map(e => (
          <li key={e.id}>
            <p>{e.jobtitle}</p>
            <p>{e.company}</p>
            <p>{e.location}</p>
            <p>{e.description}</p>
            <p>{e.salary}</p>
          </li>
        ))}
      </ul>
    </>
  )
};

const mapStateToProps = ({ listings, fetchingListings }) => {
  return {
    listings: Object.values(listings),
    fetchingListings
  };
};

export default connect(mapStateToProps)(JobListings);
