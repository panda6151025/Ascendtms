const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    var db_url =
      "mongodb+srv://groflaw:Bbm5ls3TPJD4KMuy@cluster.goavfak.mongodb.net/ascendtms?retryWrites=true&w=majority&appName=Cluster0";
    mongoose.connect(db_url, {});

    // Handle connection events
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
      res.send("MongoDB connection successful");
    });
  } catch (err) {
    // Log error message to console and exit process with error code
    console.error(err.message);
    process.exit(1);
  }
};

// Export connectDB function
module.exports = connectDB;
