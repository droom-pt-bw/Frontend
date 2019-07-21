import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { postSeekerInfo, editSeekerInfo } from '../../stateManagement/actions/userDataActions';

import PaperBacker from '../Common/PaperBacker';
import FormInput from '../Common/FormInput';

const UserProfile = ({profile, id, postSeekerInfo, editSeekerInfo}) => {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDesciption] = useState('');

  

  const [ submit, setSubmit] = useState(false);


  useEffect(() => {
    if(profile) {
      setName(profile.name || "");
      setLocation(profile.location || "");
      setSkills(profile.skills || "");
      setDesciption(profile.description || "")
    }
  } , [profile]);

  

  const handleSubmit  = (e) => {
    e.preventDefault();

    if(Object.values(profile).length) {
      editSeekerInfo({
        ...profile, 
        name, 
        location, 
        skills,
        description,
        user_id: id
      });
    } else {
      postSeekerInfo({
        name, 
        location, 
        skills,
        description,
        user_id: id
      });
    }
    setSubmit(true);
  };

  if(submit) {
    return (
      <Redirect to="/profile" />
    )
  }
  
  return(
    <PaperBacker>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        /> 
        <FormInput
          label="Location"
          type="text"
          fullWidth
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Location"
        />
        <FormInput
          label="Skills"
          type="text"
          fullWidth
          value={skills}
          onChange={e => setSkills(e.target.value)}
          placeholder="Skills"
        />
        <FormInput
          label="About"
          type="text"
          fullWidth
          multiline
          value={description}
          onChange={e => setDesciption(e.target.value)}
          placeholder="Prev Emp"
        />
        <input type="submit" />
      </form>
    </PaperBacker>
  );
}

const mapStateToProps = ({profile, currentUser}) => {
  return{
    profile,
    id: currentUser.id
  };
};

export default connect(mapStateToProps, {postSeekerInfo, editSeekerInfo})(UserProfile);
