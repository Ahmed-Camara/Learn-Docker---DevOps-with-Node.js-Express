const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi There</h2>");
});
const port = process.env.PORT || 3000;
console.log(`process.env.PORT : ${process.env.PORT}`);
app.listen(port, () => console.log(`Listening on port ${port}`));
