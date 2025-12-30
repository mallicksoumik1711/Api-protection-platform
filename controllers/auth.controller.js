const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return res.status(400).send({ message: "Passwords do not match." });
    }
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
      console.log("Email already exists");
      return res.status(400).send({ message: "Email already in use." });
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    res.send({ message: "User registered successfully." });
    console.log("User registered successfully");
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log("Error registering user:", err.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUserWithEmail = await User.findOne({ email: email });
    if (!checkUserWithEmail) {
      console.log("Invalid email or password");
      return res.status(400).send({ message: "Invalid email or password." });
    }
    if(password !== checkUserWithEmail.password){
      console.log("Invalid email or password");
      return res.status(400).send({ message: "Invalid email or password." });
    }
    console.log("Login successful");
    return res.send({ message: "Login successful." });
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log("Error logging in user:", err.message);
  }
};

module.exports = { registerUser, loginUser };
