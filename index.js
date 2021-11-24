const express = require("express");
const mongoose = require("mongoose");

const {
  NODE_ENV,
  MONGO_DB_HOST,
  MONGO_DB_PORT,
  MONGO_DB_USER,
  MONGO_DB_PASSWORD,
} = require("./config/config");

const app = express();

const mongoURL = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}:${MONGO_DB_PORT}/?authSource=admin`;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Succesfully connected to DB"))
  .catch((e) => console.log(e));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!!</h1><sub>How you doing...</sub>");
  console.log("yeah it ran");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
