const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    console.log(req.user);
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
    const users = await User.find();
    res.status(200).json({
      message: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
