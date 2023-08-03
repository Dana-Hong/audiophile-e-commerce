const express = require("express");
const { getOrders, createOrder } = require("../controllers/orderController.cjs");
const router = express.Router();

router.get("/", getOrders);

router.post("/", createOrder);

module.exports = router;
