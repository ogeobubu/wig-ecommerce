const express = require("express");
const router = express.Router();
const { payment } = require("../controllers/flutter");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

router.post("/", payment);

module.exports = router;
