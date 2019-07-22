import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Listing from './Listing';

const PageHeader = styled.header`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Listings = ({ listings }) => {
  return (
    <div>
      <PageHeader>
        <h1>Your Listings</h1>
        <Link to="/listings/add">Add a new listing</Link>
      </PageHeader>
      <ul>
        {listings.map(e => (
          <Listing  key={e} id={e} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ listings, currentUser }) => {
  return {
    listings: Object.values(listings)
      .filter(e => e.ownerId === currentUser.id || e.company === currentUser.username)
      .map(e => e.id)
  };
};

export default connect(mapStateToProps)(Listings);