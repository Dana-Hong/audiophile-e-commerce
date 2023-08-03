const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signupUser = async function (email, password) {
  // validation
  if (!email) {
    throw Error("Please enter an email address.");
  }
  if (!password) {
    throw Error("Please create your password.");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use.");
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw Error(
      "Password must contain at least 8 characters, including 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special symbol."
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email: email,
    password: hash,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  console.log("backend", !email, password);
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("No account associated with this email has been found.");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
