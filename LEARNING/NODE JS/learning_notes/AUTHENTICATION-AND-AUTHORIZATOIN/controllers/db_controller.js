const User = require("../models/db_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//registration controller

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // const checkUser = await User.findOne({username})
    const checkUser = await User.findOne({ $or: [{ username }, { email }] });
    if (checkUser) {
      console.log("user already exists");
      res.status(401).json({
        success: true,
        message: "user already exists please login...",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash(password, salt);

      const newlycreateuser = new User({
        username,
        email,
        password: hashedpassword,
        role,
      });

      await newlycreateuser.save();
    }
  } catch {
    res.status(500).json({
      success: false,
      message: "something went wrong...",
    });
  }
};

//login controller
const loginuser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const checkuser = await User.findOne({ $or: [{ username }, { email }] });
    if (!checkuser) {
      return res.status(401).json({
        message: "no account found",
      });
    }

    const comparepassword = await bcrypt.compare(password, checkuser.password);

    if (!comparepassword) {
      return res.status(401).json({
        message: "wrong password",
      });
    }
    // access token
    const accesstoken = jwt.sign(
      {
        userId: checkuser._id,
        username: checkuser.username,
        userrole: checkuser.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );

    console.log(accesstoken);

    res.status(201).json({
      message: "log in successfully...",
      token: accesstoken,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "something went wrong...",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const getAllUsers = await User.find({});
    console.log(getAllUsers);
    res.status(201).json({
      success: true,
      message: "data fetched successfully...",
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "request is not succeeded...",
    });
  }
};

module.exports = {
  registerUser,
  loginuser,
  getAllUsers,
};
