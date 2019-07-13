import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, getListings } from '../../stateManagement/actions';

const Home = ({ getUsers, getListings, users, listings }) => {
  useEffect(() => {
    getUsers();
    getListings();
  }, [getUsers, getListings]);

  return (
    <div>
      <h1>Home</h1>
      <h2>Users</h2>
      <ul>
        {Object.values(users).map(({ username, email, isCompany, id }) => (
          <li key={id}>
            <p>{username}</p>
            <p>{email}</p>
            <p>{isCompany ? 'Company' : 'Individual'}</p>
          </li>
        ))}
      </ul>
      <h2>Listings</h2>
      <ul>
        {Object.values(listings).map(({ jobtitle, company, location, description, salary, id }) => (
          <li key={id}>
            <p>{jobtitle}</p>
            <p>{company}</p>
            <p>{location}</p>
            <p>{description}</p>
            <p>{salary}</p>
          </li>
        ))}
      </ul>
    </div>
  )
};

const mapStateToProps = ({ users, listings }) => {
  return {
    users,
    listings
  };
};

export default connect(mapStateToProps, { getUsers, getListings })(Home);