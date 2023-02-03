const db = require('mongoose');

db.Promise = global.Promise;
const connect = async(url) => {
  await db.set('strictQuery', true);

  await db.connect(
    url,
    {
      useNewUrlParser: true,
    }
  );
  console.log('Database COnected');
};


module.exports = connect