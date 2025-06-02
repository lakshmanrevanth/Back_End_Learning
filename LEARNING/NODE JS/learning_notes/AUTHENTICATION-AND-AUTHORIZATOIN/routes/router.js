const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginuser,
  getAllUsers,
} = require("../controllers/db_controller");

router.post("/register-user", registerUser);

router.post("/login-user", loginuser);

router.get("/get-all-users", getAllUsers);

module.exports = router;
