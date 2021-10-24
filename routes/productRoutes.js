const express = require("express");
const router = express.Router();
const { createProducts } = require("../controllers/product");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

router.post("/", createProducts);

module.exports = router;
