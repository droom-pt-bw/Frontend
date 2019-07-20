import React from 'react';
import { connect } from 'react-redux';

import UserProfileForm from '../Forms/UserProfileForm';
import CompanyProfileForm from '../Forms/CompanyProfileForm';

const ProfileEdit = ({ isCompany }) => {
  return isCompany
      ? <CompanyProfileForm />
      : <UserProfileForm />
};

const mapStateToProps = ({ currentUser }) => {
  return {
    isCompany: currentUser.isCompany
  };
};

export default connect(mapStateToProps)(ProfileEdit);