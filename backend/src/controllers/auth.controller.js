const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isUserExists = await userModel.findOne({ email });

    if (isUserExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hash,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: false, // true in production
        sameSite: strict
    });

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({
      message: "user registered successfully",
      user: userWithoutPassword,
    });
  } catch (err) {
    res.status(500).json({ message: "error in registering user" });
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "strict",
    });

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(200).json({
      message: `user logged in successfully, ${user.username}`,
      user: userWithoutPassword,
    });
  } catch (err) {
    res.status(500).json({ message: "error in logging in user" });
  }
};


const logout = (req, res) => {
  
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "logged out successfully",
    })

    
  } catch(err) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = { registerUser, loginUser, logout };
