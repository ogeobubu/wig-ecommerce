const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");
const {
  getUser,
  getAllUsers,
  editUser,
  deleteUser,
  getStatistics,
} = require("../controllers/user");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/", auth, getUser);
router.get("/all", auth, admin, getAllUsers);
router.patch("/:id", auth, editUser);
router.delete("/:id", auth, admin, deleteUser);
router.get("/stats", auth, admin, getStatistics);

module.exports = router;
