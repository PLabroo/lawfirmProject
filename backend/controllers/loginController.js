// controllers/authController.js

const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require("../middleware/errorTypes");
const User = require("../models/login"); // Adjust the path as necessary
const jwt = require("jsonwebtoken");

// Login function
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) throw new NotFoundError("User not found");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new UnauthorizedError("Invalid credentials");

    const expiresIn = "1h";
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn,
    });

    const expirationTime = (Math.floor(Date.now() / 1000) + 60)*1000;
    res
      .status(200)
      .json({
        isSuccess: true,
        message: "Login successful",
        token: token,
        expirationTime,
      });
  } catch (error) {
    next(error);
  }
};

// Register function
exports.register = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError("User already exists");
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    res
      .status(201)
      .json({ isSuccess: true, message: "User registered successfully!" });
  } catch (error) {
    next(error);
  }
};
