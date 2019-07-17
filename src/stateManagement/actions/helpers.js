export const arrayToObj = (arr) =>
  arr.reduce((obj, e) => {
    obj[e.id] = e;
    return obj;
  }, {});

export const storeUser = (userInfo) => {
  window.localStorage.setItem('currentUser', JSON.stringify(userInfo));
};

export const getUserFromStorage = () => {
  return JSON.parse(window.localStorage.getItem('currentUser'));
};

export const getTokenFromStorage = () => {
  const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));

  return currentUser ? currentUser.token : null;
};

export const clearLocalUserInfo = () => {
  window.localStorage.removeItem('currentUser');
};

export const getAuthHeader = () => ({
  headers: {
    Authorization: getTokenFromStorage()
  }
});
