const express = require("express");
const { getOrders, createWorkout } = require("../controllers/orderController.cjs");
const router = express.Router();

router.get("/", getOrders);

router.post("/", createWorkout);

module.exports = router;
