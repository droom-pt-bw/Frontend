import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteListing } from '../../stateManagement/actions/listingsActions.js';
import { getMatchesForJobs, matchJobToSeeker } from '../../stateManagement/actions/matchingActions';

import SeekerCard from './SeekerCard';

const Listing = ({ 
  jobtitle,
  description,
  location,
  salary,
  createdAt,
  id,
  deleteListing,
  getMatchesForJobs,
  matchJobToSeeker,
  matches
 }) => {

  useEffect(() => {
    getMatchesForJobs(id);
  }, [getMatchesForJobs, id]);

  console.log(matches);

  const handleMatch = seekerId => () => {
    console.log()
    matchJobToSeeker(id, seekerId);
  };

  const handleReject = seekerId => () => {
    console.log('Reject Match with:', seekerId);
  }

  return (
    <li>
      <h3>{jobtitle}</h3>
      <Link to={`/listings/edit/${id}`}>
        edit
      </Link>
      <button onClick={() => deleteListing(id)}>
        X
      </button>
      <p>Created: {createdAt}</p>
      <p>{description}</p>
      <p>{location}</p>
      <p>{salary}</p>
      {matches !== undefined &&
        <div>
          <h4>Applicants</h4>
          {matches.length
            ? <ul>
                {matches.map(e => (
                  <SeekerCard
                    key={e.id}
                    matchInfo={e}
                    acceptMatch={handleMatch(e.user_id)}
                    rejectMatch={handleReject(e.user_id)}
                  />
                ))}
              </ul>
            : <p>no applicants yet</p>
          }
        </div>
      }
    </li>
  );
};

const mapStateToProps = ({ listings }, { id }) => {
  return {
    ...listings[id]
  };
};

export default connect(mapStateToProps, { deleteListing, getMatchesForJobs, matchJobToSeeker })(Listing);