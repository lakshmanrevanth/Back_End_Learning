const express = require("express");
const app = new express();

const basicMiddleWareFun = (req, res, next) => {
  console.log("middleware executed");

  next();
};

app.use(basicMiddleWareFun);

app.get("/", (req, res) => {
  res.send("homepage");
});
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "apple",
    },
    {
      id: 2,
      label: "sfak",
    },
    {
      id: 1,
      label: "sadfaf",
    },
  ];

  res.json(products);
});

app.listen(3000, () => {
  console.log("server has started...");
});
