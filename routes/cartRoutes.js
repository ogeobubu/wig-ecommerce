const express = require("express");
const router = express.Router();
const {
  createCart,
  editCart,
  deleteCart,
  getCart,
} = require("../controllers/cart");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

router.post("/", auth, admin, createCart);
router.get("/:id", auth, getCart);
router.patch("/:id", auth, admin, editCart);
router.delete("/:id", auth, admin, deleteCart);

module.exports = router;
