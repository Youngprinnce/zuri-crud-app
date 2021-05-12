require('dotenv').config()
const mongoose = require('mongoose');

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect('mongodb+srv://youngprinnce:dotunsewa@cluster0.djqat.mongodb.net/zuriCrudApp?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connected to DB');
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = InitiateMongoServer;
