import express from "express";
import path from "path";
import fs from "fs";
import User from "../models/user.js";
import upload from "../middleware/upload.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ------------------ FOLLOW / UNFOLLOW ------------------ */

/**
 * POST /api/users/:uid/follow - follow a user
 */
router.post('/:uid/follow', verifyToken, async (req, res) => {
  try {
    const targetId = req.params.uid;
    const userId = req.user.id;
    if (userId === targetId) return res.status(400).json({ message: "Cannot follow yourself" });

    const user = await User.findById(userId);
    const target = await User.findById(targetId);
    if (!user || !target) return res.status(404).json({ message: "User not found" });

    if (user.following.includes(targetId)) {
      return res.status(400).json({ message: "Already following" });
    }

    user.following.push(targetId);
    target.followers.push(userId);

    await user.save();
    await target.save();

    return res.json({ message: "Followed" });
  } catch (err) {
    console.error("❌ Error following user:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * POST /api/users/:uid/unfollow - unfollow a user
 */
router.post('/:uid/unfollow', verifyToken, async (req, res) => {
  try {
    const targetId = req.params.uid;
    const userId = req.user.id;
    if (userId === targetId) return res.status(400).json({ message: "Cannot unfollow yourself" });

    const user = await User.findById(userId);
    const target = await User.findById(targetId);
    if (!user || !target) return res.status(404).json({ message: "User not found" });

    user.following = user.following.filter(id => String(id) !== String(targetId));
    target.followers = target.followers.filter(id => String(id) !== String(userId));

    await user.save();
    await target.save();

    return res.json({ message: "Unfollowed" });
  } catch (err) {
    console.error("❌ Error unfollowing user:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/users/:uid/is-following - check if current user is following :uid
 */
router.get('/:uid/is-following', verifyToken, async (req, res) => {
  try {
    const targetId = req.params.uid;
    const userId = req.user.id;
    if (userId === targetId) return res.json({ isFollowing: false });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isFollowing = user.following.includes(targetId);
    return res.json({ isFollowing });
  } catch (err) {
    console.error("❌ Error checking follow status:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

/* ------------------ GET ALL USERS ------------------ */

/**
 * GET /api/users?search=&role=
 */
router.get("/", async (req, res) => {
  try {
    const { search = "", role } = req.query;
    const query = {};

    if (role && role !== "all") {
      query.role = role;
    }

    if (search) {
      const regex = new RegExp(search, "i");
      query.$or = [
        { username: regex },
        { name: regex },
        { displayName: regex },
        { bio: regex },
        { website: regex },
        { teamName: regex },
      ];
    }

    const users = await User.find(query).sort({ createdAt: -1 }).lean();
    users.forEach(u => { delete u.password; delete u.__v; });

    return res.json(users);
  } catch (err) {
    console.error("❌ Error fetching users:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

/* ------------------ GET / PUT ONE USER ------------------ */

const sanitizeUser = (u) => {
  if (!u) return u;
  const obj = u.toObject ? u.toObject() : { ...u };
  delete obj.password;
  delete obj.__v;
  return obj;
};

const ensureOwner = (req, res, next) => {
  const authId = req.user?.id || req.user?._id;
  if (!authId || String(authId) !== String(req.params.uid)) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

/**
 * GET /api/users/:uid - public profile
 */
router.get("/:uid", async (req, res) => {
  try {
    const user = await User.findById(req.params.uid).lean();
    if (!user) return res.status(404).json({ message: "User not found" });
    delete user.password;
    delete user.__v;
    return res.json(user);
  } catch (err) {
    console.error("❌ Error fetching user:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * PUT /api/users/:uid - update user profile
 */
router.put("/:uid", verifyToken, ensureOwner, async (req, res) => {
  try {
    const user = await User.findById(req.params.uid);
    if (!user) return res.status(404).json({ message: "User not found" });

    const allowed = [
      "bio", "website", "gender", "username", "name", "displayName",
      "showSuggestions", "profileImage", "bannerImage",
      "bannerFocalX", "bannerFocalY", "bannerZoom"
    ];

    for (const key of allowed) {
      if (req.body[key] !== undefined) {
        if (["bannerFocalX", "bannerFocalY"].includes(key)) {
          const val = Number(req.body[key]);
          user[key] = Number.isFinite(val) ? Math.min(100, Math.max(0, val)) : user[key];
        } else if (key === "bannerZoom") {
          const val = Number(req.body[key]);
          user[key] = Number.isFinite(val) ? Math.min(300, Math.max(50, val)) : user[key];
        } else {
          user[key] = req.body[key];
        }
      }
    }

    await user.save();
    return res.json({ message: "Profile updated", user: sanitizeUser(user) });
  } catch (err) {
    console.error("❌ Error updating profile:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

/* ------------------ PROFILE IMAGE & BANNER ------------------ */

const removeIfLocal = (maybeUrlPath) => {
  if (!maybeUrlPath) return;
  try {
    const clean = String(maybeUrlPath).split("?")[0];
    if (!clean.startsWith("/uploads/")) return;
    const filename = path.basename(clean);
    const abs = path.join(process.cwd(), "uploads", filename);
    if (fs.existsSync(abs)) fs.unlinkSync(abs);
  } catch (e) {
    console.warn("⚠️ Could not remove file:", maybeUrlPath, e.message);
  }
};

router.patch("/:uid/profile-picture", verifyToken, ensureOwner, upload.single("profileImage"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const user = await User.findById(req.params.uid);
    if (!user) return res.status(404).json({ message: "User not found" });

    removeIfLocal(user.profileImage);
    user.profileImage = `/uploads/${req.file.filename}`;
    await user.save();

    return res.json({ profileImage: user.profileImage });
  } catch (err) {
    console.error("❌ Error uploading profile picture:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

router.patch("/:uid/banner-image", verifyToken, ensureOwner, upload.single("bannerImage"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const user = await User.findById(req.params.uid);
    if (!user) return res.status(404).json({ message: "User not found" });

    removeIfLocal(user.bannerImage);
    user.bannerImage = `/uploads/${req.file.filename}`;
    await user.save();

    return res.json({ bannerImage: user.bannerImage });
  } catch (err) {
    console.error("❌ Error uploading banner image:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
