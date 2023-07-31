require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.cjs");

const app = express();

app.use(express.json());
// routes
app.use("/api/user", userRoutes);

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
