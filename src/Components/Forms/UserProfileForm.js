import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { postSeekerInfo, editSeekerInfo } from '../../stateManagement/actions/userDataActions';

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
      <Redirect to ="/profile" />
    )
  }
  
  // const submitInfo = (e) => {
  //   e.preventDefault();
  //   submit({name, location, skills, previousEmployment});

  //   setName('');
  //   setLocation('');
  //   setSkills('');
  //   setPreviousEmployment('');
  // };

  
  
  return(
    <div>
      <form onSubmit= {handleSubmit} className = 'form2'>

        <label htmlFor = ''>Name</label>
        <input type="text"
          value = {name}
          onChange ={e => setName(e.target.value)}
          placeholder = "Name"

        /> 

        <label htmlFor="">Location</label>
        <input 
          type="text"
          value = {location}
          onChange = {e => setLocation(e.target.value)}
          placeholder = "Location"

        />
  
        <label htmlFor="">Skills</label>
        <input 
          type="text"
          value = {skills}
          onChange={e => setSkills(e.target.value)}
          placeholder = "Skills"
        />

        <label htmlFor="">Previous Employment</label>
        <input 
          type="text"
          value = {description}
          onChange = {e => setDesciption(e.target.value)}
          placeholder = "Prev Emp"
        />

        <input type = "submit" />
      </form>
    </div>
  );
}

const mapStateToProps = ({profile, currentUser}) => {
  return{
    profile,
    id: currentUser.id
  };
};

export default connect(mapStateToProps, {postSeekerInfo, editSeekerInfo})(UserProfile);
