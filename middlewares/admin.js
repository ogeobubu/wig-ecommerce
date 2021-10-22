const jwt = require("jsonwebtoken");
const User = require("../models/User");

const admin = async (req, res, next) => {
  try {
    if (req.user.isAdmin === true) {
      next();
    } else {
      return res.status(401).json({
        message: "Admin resource only.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Admin resource only.",
    });
  }
};

module.exports = admin;
