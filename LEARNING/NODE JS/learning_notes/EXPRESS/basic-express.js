const express = require("express");

const app = new express();

app.get("/", (req, res) => {
  res.send("Home page");
});

// multiple routes

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

// multiple routes with wanting only the specific id item

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
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
  const single_product = products.find((product) => product.id === productId);

  if (single_product) {
    res.json(single_product);
  } else {
    res.status(400).send("rejected");
  }
});

const port = 3000;

app.listen(port, () => {
  console.log("server has started");
});
