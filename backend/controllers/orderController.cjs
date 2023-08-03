const Order = require("../models/orderModel.cjs");

// GET/READ all Orders
const getOrders = async (req, res) => {
  const user_id = req.user._id;

  const orders = await Order.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(orders);
};

// CREATE new order
const createOrder = async (req, res) => {
  const { items, price } = req.body;

  //   add doc to db
  try {
    const user_id = req.user.id;
    const order = await Order.create({ items, price, user_id });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getOrders, createOrder };
