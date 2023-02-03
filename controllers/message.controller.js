const store = require('../store/store');

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      //console.log('[Error de Message controller, No hay usuario o mensaje]');
      return reject('Los datos son incorrectos');
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
};

const getMessage = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      return reject('invalid data');
    }
    const result = await store.upadateText(id, message);
    resolve(result);
  });
};

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject('Id Invalid');
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
};

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
};
