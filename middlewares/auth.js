const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("authorization");

    if (!token) {
      return res.status(401).json({
        message: "Invalid authentication",
      });
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Invalid authentication",
          });
        }

        req.user = user;
        next();
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = auth;
