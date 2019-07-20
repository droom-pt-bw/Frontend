import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const SeekerProfile = ({profile, id, getSeekerInfo}) => {

  useEffect(() => {
    getSeekerInfo(id);
  }, [id, getSeekerInfo]);


  return (
    <div>
      <h1>SeekerProfile</h1>
      <Link to ="/profile/edit">
        Edit
      </Link>
      {profile 
      ? <>
          <p>{profile.name}</p>
          <p>{profile.location}</p>
          <p>{profile.skills}</p>
          <p>{profile.previousEmployment}</p>
        </>
        : <p> No profile found </p>
      }
    </div>
  );
};

const mapStateToProps = ({ profile, currentUser }) => {
  return {
    profile, 
    id: currentUser.id
  };
}


export default connect(mapStateToProps, {})(SeekerProfile);