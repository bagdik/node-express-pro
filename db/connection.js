const mongoose = require('mongoose');
const { connect } = require('../routes/tasks');

const connectDB = (url) => {
  return mongoose
  .connect(url)
  .then(() => console.log('CONNECTED TO THE DB...'))
  .catch((err) => console.log(err));
}

module.exports = connectDB;