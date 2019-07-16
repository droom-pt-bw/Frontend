export const arrayToObj = (arr) =>
  arr.reduce((obj, e) => {
    obj[e.id] = e;
    return obj;
  }, {});

export const storeUser = (username, token) => {
  window.localStorage.setItem('currentUser', JSON.stringify({username, token}));
};

export const getUserFromStorage = () => {
  return JSON.parse(window.localStorage.getItem('currentUser'));
};

export const getTokenFromStorage = () => {
  const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));

  return currentUser ? currentUser.token : null;
};