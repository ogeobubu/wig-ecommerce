const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({
        message: "This user does not exist",
      });
    } else {
      const { password, ...newUser } = user._doc;
      res.json({
        message: newUser,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const query = req.query.latest;
    const users = query
      ? await User.find({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json({
      message: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json({
      message: "User has been updated",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(400).json({
        message: "This user does not exist",
      });
    } else {
      return res.status(200).json({
        message: "User has been deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
