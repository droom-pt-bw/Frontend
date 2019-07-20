import  React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addListing, editListing } from '../../stateManagement/actions/listingsActions.js';

const JobListingForm = ({ currentUser, editListing, listing, addListing }) => {
  const [jobtitle, setJobtitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (listing) {
        setJobtitle(listing.jobtitle);
        setDescription(listing.description);
        setLocation(listing.location);
        setSalary(listing.salary);
      }
  }, [listing]);
  

  const submit = e => {
    e.preventDefault();

    if (listing) {
      editListing({
        ...listing,
        jobtitle,
        description,
        location,
        salary
      });
    } else {
      console.log('submit')
      addListing({
        jobtitle,
        description,
        location,
        salary
      }, currentUser);
    }
   
    setSubmitted(true);
  };

  if (!currentUser.isCompany) {
    return (
      <Redirect to="/" />
    );
  }

  if (submitted) {
    return (
      <Redirect to="/" />
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

      <input type="submit" value="Submit" />
    </form>
  );
};

const mapStateToProps = ({ currentUser, listings }, ownProps) => {
  return {
    currentUser,
    listing: ownProps.match.params.id ? listings[ownProps.match.params.id] : null
  };
};

export default connect(mapStateToProps, { addListing, editListing })(JobListingForm);