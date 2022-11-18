const mongoose = require("mongoose");

const connectDataBase = () => {
  console.log("Connecting to DB...", process.env.DB_LOCAL_URI);
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(con => {
      console.log(
        `MongoDB Database Connected with HOST:${con.connection.host}`
      );
    });
};

module.exports = connectDataBase;
