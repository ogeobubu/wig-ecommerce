const express = require("express");
const router = express.Router();
const {
  createProducts,
  getProducts,
  getProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

router.post("/", auth, admin, createProducts);
router.get("/all", auth, getProducts);
router.get("/all", auth, getProducts);
router.get("/:id", auth, getProduct);
router.patch("/:id", auth, admin, editProduct);
router.delete("/:id", auth, admin, deleteProduct);

module.exports = router;
