const Cart = require("../models/cartModel.cjs");
const mongoose = require("mongoose");

// GET cart data
const getCart = async (req, res) => {
  const user_id = req.user._id;
  const cart = await Cart.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(cart);
};

// CREATE new order
const createCart = async (req, res) => {
  const { items } = req.body;

  //   add doc to db
  try {
    const user_id = req.user.id;
    const cart = await Cart.create({ items, user_id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: "No cart" });

  const cart = await Cart.findOneAndUpdate(
    { user_id: id },
    {
      ...req.body,
    }
  );

  if (!cart) {
    return res.status(404).json({ error: "No such cart" });
  }

  res.status(200).json(cart);
};

module.exports = { getCart, createCart, updateCart };
