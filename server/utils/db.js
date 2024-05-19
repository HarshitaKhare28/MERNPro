const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;

const connectDb = async () => {
    try {
      await mongoose.connect(URL);
      console.log("connection successful to DB");
    } catch (error) {
      console.error("database connection fail");
      process.exit(0);
    }
  };
  
  module.exports = connectDb;