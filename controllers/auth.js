const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({
      message: "This user already exists.",
    });
  } else {
    function validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({
        message: "All fields required!",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Email is invalid",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = { username, email, password: hashPassword };

    await new User(createUser).save();

    res.status(201).json({
      message: "User has been created",
    });
  }
};

// exports.login = async (req, res) => {
//     const user = require("")
// }
