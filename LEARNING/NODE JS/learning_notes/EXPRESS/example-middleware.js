const express = require("express");
const app = new express();

const getTimeStamp = (req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log(timestamp);

  next();
};

app.use(getTimeStamp);

app.get("/", (req, res) => {
  res.send("homepage");
});

app.listen(3000, () => {
  console.log("server has started...");
});
