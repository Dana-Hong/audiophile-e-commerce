const express = require("express");
const { getOrders, createOrder } = require("../controllers/orderController.cjs");
const requireAuth = require("../middleware/requireAuth.cjs");

const router = express.Router();

router.use(requireAuth);

router.post("/", createOrder);

router.get("/", getOrders);

module.exports = router;
