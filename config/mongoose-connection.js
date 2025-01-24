const mongoose = require('mongoose');
const config = require('config');
const debug = require("debug")("development:mongoose");

const mongoURI = config.get('MONGO_URI');
if (!mongoURI) {
  console.error("FATAL ERROR: MONGO_URI is not defined.");
  process.exit(1);
}

mongoose.connect(`${mongoURI}/e-commerce`)
  .then(() => debug("Database connected successfully"))
  .catch((err) => {
    debug("Database connection failed:", err.message);
    process.exit(1);
  });

module.exports = mongoose.connection;
