import React from 'react';
import { connect } from 'react-redux';

import SeekerProfile from './SeekerProfile';
import CompanyProfile from './CompanyProfile';

const ProfilePage = ({ isCompany }) => {

  return (
    <div>
      <h1>ProfilePage</h1>
      {isCompany
        ? <CompanyProfile />
        : <SeekerProfile />
      }
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    isCompany: currentUser.isCompany,
  };
};

export default connect(mapStateToProps)(ProfilePage);
