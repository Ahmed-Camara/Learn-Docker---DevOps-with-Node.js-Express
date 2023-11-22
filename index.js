const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
} = require("./config/config");
const postRouter = require("./routes/postRoute");
const userRouter = require("./routes/userRoute");
const bodyParser = require("body-parser");
const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
const connectWithRetry = () => {
  mongoose
    .connect(mongoURL)
    .then(() => console.log("Successfully connected to DB"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("<h2>Hi There</h2>");
});
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);
const port = process.env.PORT || 3000;
console.log(`process.env.PORT : ${process.env.PORT}`);
app.listen(port, () => console.log(`Listening on port ${port}`));
