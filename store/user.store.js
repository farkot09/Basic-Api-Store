const Model = require('../models/user.models');

const addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};
const getUser = async () => {
  return await Model.find();
};

module.exports = {
  add: addUser,
  list: getUser,
};
