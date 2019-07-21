import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getSeekerMatches } from '../../stateManagement/actions/matchingActions';

import PaperBacker from '../Common/PaperBacker';
import Section from '../Common/Section';

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const MatchesPage = ({ matches, currentUser, getSeekerMatches }) => {

  useEffect(() => {
    getSeekerMatches(currentUser.id);
  }, [currentUser, getSeekerMatches]);

  if (!matches.length) {
    return (
      <h3>No accepted applications yet.  Keep trying!</h3>
    );
  }

  return (
    <div>
      <PageTitle>Accepted Applications</PageTitle>
      {matches.map(e => (
        <PaperBacker key={e.id}>
          <h2>{e.jobtitle}</h2>
          <Section>
            <h5>Employer</h5>
            <p>{e.company}</p>
          </Section>
          <Section>
            <h5>Location</h5>
            <p>{e.location}</p>
          </Section>
          <Section>
            <h5>Description</h5>
            <p>{e.description}</p>
          </Section>
          <Section>
            <h5>Approx Salary</h5>
            <p>{e.salary}</p>
          </Section>
        </PaperBacker>
      ))}
    </div>
  );
};

const mapStateToProps = ({ matches, currentUser }) => {
  return {
    matches,
    currentUser
  };
};

export default connect(mapStateToProps, { getSeekerMatches })(MatchesPage);