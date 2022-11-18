const dotenv = require("dotenv");
const app = require("./app");

const connectDataBase = require("./config/database");

// Handle Uncaught Exceptions
process.on("uncaughtException", err => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to Uncaught Exception");
  process.exit(1);
});

dotenv.config({ path: "server/.env" });

// Connecting to DB
connectDataBase();

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running...");
});

// Handle unhandled promise rejections
process.on("unhandledRejection", err => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
