import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const UserProfile = ({submit, currentUser}) => {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [previousEmployment, setPreviousEmployment] = useState('');

  const submitInfo = (e) => {
    e.preventDefault();
    submit({name, location, skills, previousEmployment});

    setName('');
    setLocation('');
    setSkills('');
    setPreviousEmployment('');
  };

  
  
  return(
    <div>
      <form onSubmit= {submit} className = 'form2'>

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
          value = {previousEmployment}
          onChange = {e => setPreviousEmployment(e.target.value)}
          placeholder = "Prev Emp"
        />
      </form>
    </div>
  );
}

const mapStateToProps = ({currentUser}) => {
  return{
    currentUser
  };
};

export default connect(mapStateToProps, {})(UserProfile);
