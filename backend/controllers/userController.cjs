const User = require("../models/userModel.cjs");
const jwt = require("jsonwebtoken");

function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
}

// login user
async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    const type =
      error.message === "No account associated with this email has been found."
        ? "email"
        : error.message === "All fields must be filled."
        ? "all"
        : "password";
    res.status(400).json({ type, message: error.message });
  }
}

// signup user
async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.signupUser(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    const type =
      error.message === "Please enter an email address." ||
      error.message === "Email already in use."
        ? "email"
        : "password";
    res.status(400).json({ type, message: error.message });
  }
}

module.exports = { loginUser, signupUser };
