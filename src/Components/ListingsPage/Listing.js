import React from 'react';
import { connect } from 'react-redux';

const Listing = (props) => {
  return (
    <li>
      <h3>{props.jobtitle}</h3>
      <p>Created: {props.createdAt}</p>
      <p>{props.description}</p>
      <p>{props.location}</p>
      <p>{props.salary}</p>
    </li>
  );
};

const mapStateToProps = ({ listings }, { id }) => {
  return {
    ...listings[id]
  };
};

export default connect(mapStateToProps)(Listing);