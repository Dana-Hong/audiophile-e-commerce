const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  items: {
    type: Array,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
