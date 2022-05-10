const mongoose = require("mongoose");

mongoose
  .connect("mongodb:mongo/db") // "mongo" refers to the service in the docker-compose.yml
  .then((db) => console.log("Database is connected to", db.connection.host))
  .catch((err) => console.log(err));
