const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword, 
    });

    const token = generateToken(newUser);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    console.log("User registered successfully");
    return res.status(201).send({ message: "User registered successfully." });
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
      console.log("User does not exist with this email");
      return res
        .status(400)
        .send({ message: "User does not exist with this email." });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      checkUserWithEmail.password
    );

    if (!isValidPassword) {
      console.log("Invalid email or password");
      return res.status(400).send({ message: "Invalid email or password." });
    }

    const token = generateToken(checkUserWithEmail);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    console.log("Login successful", token);
    return res.status(200).send({ message: "Login successful.", token: token });
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log("Error logging in user:", err.message);
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).send({ message: "Logout successful." });
}

module.exports = { registerUser, loginUser, logoutUser };