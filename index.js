const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
} = require("./config/config");
const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
mongoose
  .connect(mongoURL)
  .then(() => console.log("Successfully connected to DB"))
  .catch((e) => console.log(e));
app.get("/", (req, res) => {
  res.send("<h2>Hi There</h2>");
});
const port = process.env.PORT || 3000;
console.log(`process.env.PORT : ${process.env.PORT}`);
app.listen(port, () => console.log(`Listening on port ${port}`));
