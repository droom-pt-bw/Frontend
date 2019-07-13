import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../stateManagement/actions';

const Home = ({ getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

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

export default connect(mapStateToProps, { getUsers })(Home);