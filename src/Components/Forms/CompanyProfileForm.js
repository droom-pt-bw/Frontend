import React, { useState } from 'react';
import { connect } from 'react-redux';

const CompanyProfileForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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

const mapStateToProps = ({ profile }) => {
  return {
    profile
  };
};

export default connect(mapStateToProps)(CompanyProfileForm);