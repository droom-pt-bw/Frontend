import React from 'react';
//import { connect } from 'react-redux';

const SeekerCard = ({ matchInfo, acceptMatch, rejectMatch }) => {
  return (
    <li>
      <p>{matchInfo.name}</p>
      <button onClick={acceptMatch}>
        Accept
      </button>
      <button onClick={rejectMatch}>
        Reject
      </button>
    </li>
  );
};

// const mapStateToProps = () => {
//   return {

//   };
// };

export default SeekerCard;