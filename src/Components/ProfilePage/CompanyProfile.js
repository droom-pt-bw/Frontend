import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCompanyInfo } from '../../stateManagement/actions/companyDataActions';

const CompanyProfile = ({ profile, id, getCompanyInfo }) => {

  useEffect(() => {
    getCompanyInfo(id);
  }, [id, getCompanyInfo]);

  return (
    <div>
      <h1>Company Profile</h1>
      <Link to="/profile/edit">
        Edit
      </Link>
      {profile
        ? <>
            <p>{profile.name}</p>
            <p>{profile.location}</p>
            <p>{profile.description}</p>
          </>
        : <p>No profile found</p>
      }
    </div>
  );
};

const mapStateToProps = ({ profile, currentUser }) => {
  return {
    profile,
    id: currentUser.id
  };
};

export default connect(mapStateToProps, { getCompanyInfo })(CompanyProfile);
