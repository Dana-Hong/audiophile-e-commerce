const Order = require("../models/orderModel.cjs");
const mongoose = require("mongoose");

// GET/READ all workouts
const getOrders = async (req, res) => {
  const orders = await Order.find({}).sort({ createdAt: -1 });
  res.status(200).json(orders);
};

// CREATE new workout
const createWorkout = async (req, res) => {
  const { items, price } = req.body;

  //   add doc to db
  try {
    const workout = await Order.create({ items, price });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getOrders, createWorkout };
