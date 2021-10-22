const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");
const { getUser, getAllUsers } = require("../controllers/user");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/", auth, getUser);
router.get("/all", auth, admin, getAllUsers);

module.exports = router;
