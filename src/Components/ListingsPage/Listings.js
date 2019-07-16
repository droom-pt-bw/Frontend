import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Listing from './Listing';

const Listings = ({ listings }) => {
  return (
    <div>
      <Link to="/listings/add">Add a new listing</Link>
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
      .filter(e => e.company === currentUser.id)
      .map(e => e.id)
  };
};

export default connect(mapStateToProps)(Listings);