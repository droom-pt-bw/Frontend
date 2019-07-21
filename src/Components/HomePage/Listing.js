import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { deleteListing } from '../../stateManagement/actions/listingsActions.js';
import { getMatchesForJobs, matchJobToSeeker } from '../../stateManagement/actions/matchingActions';

import SeekerCard from './SeekerCard';
import PaperBacker from '../Common/PaperBacker';
import Section from '../Common/Section';

const ListingTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
  };

  return (
    <PaperBacker>
      <ListingTitle>
        <h3>{jobtitle}</h3>
        <div>
          <Link to={`/listings/edit/${id}`}>
          edit
          </Link>
          <button onClick={() => deleteListing(id)}>
            X
          </button>
        </div>
      </ListingTitle>
      <Section>
        <h5>Created</h5>
        <p>{createdAt}</p>
      </Section>
      <Section>
        <h5>Location</h5>
        <p>{location}</p>
      </Section>
      <Section>
        <h5>Description</h5>
        <p>{description}</p>
      </Section>
      <Section>
        <h5>Salary</h5>
        <p>{salary}</p>
      </Section>
      
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
    </PaperBacker>
  );
};

const mapStateToProps = ({ listings }, { id }) => {
  return {
    ...listings[id]
  };
};

export default connect(mapStateToProps, { deleteListing, getMatchesForJobs, matchJobToSeeker })(Listing);