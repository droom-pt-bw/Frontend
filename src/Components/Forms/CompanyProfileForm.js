import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { postCompanyInfo, editCompanyInfo } from '../../stateManagement/actions/companyDataActions';

const CompanyProfileForm = ({ profile, postCompanyInfo, editCompanyInfo, id }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (profile) {
      setName(profile.name || '');
      setLocation(profile.location || '');
      setDescription(profile.description || '');
    }
  }, [profile]);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(profile).length) {
      console.log('PROFILE EDIT REQUEST', profile);
      editCompanyInfo({
        ...profile,
        name,
        location,
        description,
        id
      });
    } else {
      postCompanyInfo({
        name,
        location,
        description,
        user_id: id
      });
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Redirect to="/profile" />
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Company Profile</h3>

      <label htmlFor="">Company Name</label>
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <label htmlFor="">Location</label>
      <input 
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />

      <label htmlFor="">Description</label>
      <input 
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
};

const mapStateToProps = ({ profile, currentUser }) => {
  return {
    profile,
    id: currentUser.id
  };
};

export default connect(mapStateToProps, { postCompanyInfo, editCompanyInfo })(CompanyProfileForm);