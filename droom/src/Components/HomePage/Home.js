import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, getListings } from '../../stateManagement/actions';

const Home = ({ getUsers, getListings }) => {
  useEffect(() => {
    getUsers();
    getListings();
  }, [getUsers, getListings]);

  return (
    <div>
      HomePage
    </div>
  )
};

const mapStateToProps = () => {
  return {

  };
};

export default connect(mapStateToProps, { getUsers, getListings })(Home);