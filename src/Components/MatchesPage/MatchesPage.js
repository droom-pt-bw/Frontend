import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSeekerMatches } from '../../stateManagement/actions/matchingActions';

const MatchesPage = ({ matches, currentUser, getSeekerMatches }) => {

  useEffect(() => {
    getSeekerMatches(currentUser.id);
  }, [currentUser, getSeekerMatches]);

  return (
    <div>
      <h1>Matches</h1>
      <ul>
        {matches.map(e => (
          <li key={e.id}>
            <p>{e.jobtitle}</p>
            <p>{e.company}</p>
          </li>
        ))}
      </ul>
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