const express = require("express");
const router = express.Router();
const authMiddleWare = require("../middlewares/auth_middleware");

router.get("/welcome", authMiddleWare, (req, res) => {
  console.log("homepage");
  res.status(201).json({
    message: "fucking i will win this time...",
  });
});

module.exports = router;
