const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
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
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "This user does not exist.",
      });
    } else {
      const comparePassword = await bcrypt.compare(password, user.password);

      if (!comparePassword) {
        return res.status(400).json({
          message: "Incorrect password.",
        });
      }

      const loginUser = {
        email,
        password,
      };

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.status(200).json({
        message: "User has successfully logged in.",
        token,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
