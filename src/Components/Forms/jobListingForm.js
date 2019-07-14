import  React, { useState } from 'React';
import { connect } from 'react-redux';

import { addListing } from '../../stateManagement/actions';

const JobListingForm = ({ currentUser }) => {
  const [jobtitle, setJobitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const submit = e => {
    e.preventDefault();
    addListing({
        jobtitle,
        description,
        location,
        salary
      }, currentUser);
  };

  return(
    <form onSubmit={submit}>
      <label>Job Title</label>
      <input type="text"
        value={jobtitle}
        onChange={e => setJobitle(e.target.value)}
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