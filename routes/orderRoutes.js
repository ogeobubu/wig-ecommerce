const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrder,
  editOrder,
  deleteOrder,
} = require("../controllers/order");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

router.post("/", auth, admin, createOrder);
router.get("/", auth, getOrders);
router.get("/:id", auth, getOrder);
router.patch("/:id", auth, admin, editOrder);
router.delete("/:id", auth, admin, deleteOrder);

module.exports = router;
