import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import flagsReducer from './flagsReducer';
import matchesReducer from './matchesReducer';
import listingsReducer from './listingsReducer';
import currentUserReducer from './currentUserReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  matches: matchesReducer,
  currentUser: currentUserReducer,
  flags: flagsReducer,
  profile: profileReducer
});
