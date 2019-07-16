import  React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addListing } from '../../stateManagement/actions';

const JobListingForm = ({ currentUser, addListing }) => {
  const [jobtitle, setJobtitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = e => {
    e.preventDefault();
    addListing({
      jobtitle,
      description,
      location,
      salary
    }, currentUser);
    setSubmitted(true);
  };

  if (!currentUser.isCompany) {
    return (
      <Redirect to="/" />
    );
  }

  if (submitted) {
    return (
      <Redirect to="/listings" />
    );
  }

  return(
    <form onSubmit={submit}>
      <label>Job Title</label>
      <input type="text"
        value={jobtitle}
        onChange={e => setJobtitle(e.target.value)}
      />

      <label htmlFor="">Description</label>
      <input type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <label htmlFor="">Location</label>
      <input type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />

      <label htmlFor="">Approx Salary</label>
      <input type="text"
        value={salary}
        onChange={e => setSalary(e.target.value)}
      />

      <input type="submit" value="Post Listing" />
    </form>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps, { addListing })(JobListingForm);