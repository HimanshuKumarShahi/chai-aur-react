const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Username in CAPS
    const usernameCaps = username.toUpperCase();

    // Create user in DB
    const user = await User.create({
      username: usernameCaps,
      email,
      password: hashedPassword
    });

    // Terms & Conditions
    const terms = `
Hello ${usernameCaps},

Welcome to ReelPro! Please read these Terms & Conditions carefully:

1. Respect all users and their content.
2. No uploading of illegal or offensive material.
3. All content you upload should be yours or you have rights to it.
4. Your account may be suspended if you violate any rules.
5. We may update T&C from time to time. Stay updated!

Thank you for joining ReelPro.

– The ReelPro Team
`;

    // Send welcome email
    await sendEmail(email, "Welcome to ReelPro!", terms);

    // Respond to frontend
    res.status(201).json({
      message: "Registration successful. Terms & Conditions sent to email!",
      username: usernameCaps,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed" });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
};

// FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = crypto.randomBytes(20).toString("hex");
    user.resetToken = token;
    user.resetTokenExpire = Date.now() + 3600000; // 1 hour
    await user.save();

    const link = `http://localhost:5173/reset/${token}`;
    await sendEmail(user.email, "Reset Password", `Click this link to reset your password:\n\n${link}`);

    res.json({ message: "Reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Forgot password failed" });
  }
};

// RESET PASSWORD
exports.resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findOne({
      resetToken: req.params.token,
      resetTokenExpire: { $gt: Date.now() }
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    user.password = await bcrypt.hash(password, 10);
    user.resetToken = null;
    user.resetTokenExpire = null;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Reset password failed" });
  }
};