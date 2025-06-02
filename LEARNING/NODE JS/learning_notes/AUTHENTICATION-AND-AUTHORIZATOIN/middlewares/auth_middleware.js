const express = require("express");

const authMiddleWare = (req, res, next) => {
  const authheader = req.headers["authorization"];

  console.log(authheader);

  next();
};

module.exports = authMiddleWare;
