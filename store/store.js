const Model = require('../models/message.models');

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessage = async (filterUser) => {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
};

const upadateText = async (id, message) => {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
};

const removeMessage = async (id) => {
  await Model.findOneAndRemove(id);
};

module.exports = {
  add: addMessage,
  list: getMessage,
  upadateText: upadateText,
  remove: removeMessage,
};
