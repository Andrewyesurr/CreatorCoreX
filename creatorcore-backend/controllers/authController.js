// controllers/authController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const ALLOWED_ROLES = new Set(["creator", "teamLeader", "individual"]);

const sanitizeUser = (u) => {
  if (!u) return u;
  const obj = u.toObject ? u.toObject() : { ...u };
  delete obj.password;
  delete obj.__v;
  return obj;
};

const safeRole = (r) => (ALLOWED_ROLES.has(r) ? r : "creator");

/* ---------------- SIGNUP (email/password) ---------------- */
export const signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Username, email and password are required." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });
    }

    const existingEmail = await User.findOne({ email: email.toLowerCase() });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already in use." });
    }
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already taken." });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: hash,
      role: safeRole(role),
      bio: "",
      website: "",
      gender: "unspecified",
      showSuggestions: true,
      profileImage: "",
      bannerImage: "",
      bannerFocalX: 50,
      bannerFocalY: 50,
      bannerZoom: 100,
      teamName: "",
      teamMembers: [],
      teamPosts: [],
    });

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(201).json({ token, user: sanitizeUser(user) });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------- LOGIN (email/password) ---------------- */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and password are required." });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ message: "Invalid credentials." });

    // If this is a Google-only account, block password login
    if (!user.password) {
      return res.status(400).json({
        message:
          "This account uses Google Sign-In. Use 'Continue with Google' instead.",
      });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({ token, user: sanitizeUser(user) });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

/* ---------------- CURRENT USER (/me) ---------------- */
export const getProfile = async (req, res) => {
  try {
    // verifyToken sets req.user = { id, username, role } from JWT
    const userId = req.user?.id || req.user?._id;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(sanitizeUser(user));
  } catch (err) {
    console.error("Get profile error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
