const jwt = require("jsonwebtoken");
const User = require("../models/User");

const admin = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (user.isAdmin === false) {
        return res.status(401).json({
          message: "Admin resource only.",
        });
      } else {
        next();
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Admin resource only.",
    });
  }
};

module.exports = admin;
