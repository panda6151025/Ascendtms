const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
connectDB();
const app = require("./app.js");

//Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting down server due to Uncaught Rejection`);
  // process.exit(1);
});
//config
dotenv.config();

const server = app.listen(process.env.PORT, async () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});

// unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting down server due to Unhandled Rejection`);
  server.close(() => {
    // process.exit(1);
  });
});
