const express = require("express");
const router = express.Router();
const {
  createProducts,
  getProducts,
  getProduct,
  editProduct,
} = require("../controllers/product");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

router.post("/", auth, admin, createProducts);
router.get("/all", auth, getProducts);
router.get("/all", auth, getProducts);
router.get("/:id", auth, getProduct);
router.post("/:id", auth, admin, editProduct);

module.exports = router;
