export const arrayToObj = (arr) =>
  arr.reduce((obj, e) => {
    obj[e.id] = e;
    return obj;
  }, {});