const store = require('../store/user.store');

const addUser = (name) => {
  if (!name) {
    return Promise.reject('invalid name');
  }
  const user = {
    name,
  };

  return store.add(user);
};

const getUser = () => {
  return store.list();
};

module.exports = {
  addUser,
  getUser,
};
