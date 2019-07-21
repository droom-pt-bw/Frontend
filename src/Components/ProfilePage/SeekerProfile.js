import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import { getSeekerInfo } from '../../stateManagement/actions/userDataActions';
import PaperBacker from '../Common/PaperBacker';

const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileSection = styled.section`
  margin: 2rem 0;

  h5 {
    margin-bottom: 0.5rem;
  }
`;

const AddCard = styled(Paper)`
  margin: 0 auto;
  padding: 2rem 3rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 1rem 0;
  }
`;

const SeekerProfile = ({profile, id, getSeekerInfo}) => {

  useEffect(() => {
    getSeekerInfo(id);
  }, [id, getSeekerInfo]);

  return Object.values(profile).length 
        ? <PaperBacker>
            <ProfileTitle>
              <h1>Your Profile</h1>
              <Link to="/profile/edit">
                Edit
              </Link>
            </ProfileTitle>
            <ProfileSection>
              <h5>Name:</h5>
              <p>{profile.name}</p>
            </ProfileSection>
            <ProfileSection>
              <h5>Location</h5>
              <p>{profile.location}</p>
            </ProfileSection>
            <ProfileSection>
              <h5>Skills</h5>
              <p>{profile.skills}</p>
            </ProfileSection>
            <ProfileSection>
              <h5>About</h5>
              <p>{profile.description}</p>
            </ProfileSection>
          </PaperBacker>
        : <AddCard>
            <h3>No profile found</h3>
            <p>setup your profile here:</p>
            <Link to="/profile/edit">
              Add Profile
            </Link>
          </AddCard>
};

const mapStateToProps = ({ profile, currentUser }) => {
  return {
    profile, 
    id: currentUser.id
  };
}


export default connect(mapStateToProps, { getSeekerInfo })(SeekerProfile);