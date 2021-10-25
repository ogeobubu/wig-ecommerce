const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrder,
  editOrder,
  deleteOrder,
  incomeOrder,
} = require("../controllers/order");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

router.post("/", auth, admin, createOrder);
router.get("/", auth, getOrders);
router.get("/:userId", auth, getOrder);
router.patch("/:id", auth, admin, editOrder);
router.delete("/:id", auth, admin, deleteOrder);
router.get("/income", auth, incomeOrder);

module.exports = router;
