require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.cjs");
const orderRoutes = require("./routes/order.cjs");
const cartRoutes = require("./routes/cart.cjs");

const app = express();

app.use(cors());
app.use(express.json());
// routes
app.use("/api/user", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests once we've connected to db
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db. Listening on port ${process.env.PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
