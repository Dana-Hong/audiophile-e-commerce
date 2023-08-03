const express = require("express");
const { getCart, createCart, updateCart } = require("../controllers/cartController.cjs");
const requireAuth = require("../middleware/requireAuth.cjs");
const router = express.Router();

router.use(requireAuth);

router.get("/", getCart);

router.post("/", createCart);

router.patch("/:id", updateCart);

module.exports = router;
