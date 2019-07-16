import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Listing = (props) => {
  return (
    <li>
      <h3>{props.jobtitle}</h3>
      <Link to={`/listings/edit/${props.id}`}>
        edit
      </Link>
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