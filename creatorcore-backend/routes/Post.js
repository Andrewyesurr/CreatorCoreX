// FIRST: Imports
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";
import { verifyToken } from "../middleware/authMiddleware.js";

// THEN: Define router
const router = express.Router();

// THEN: All routes
const uploadRoot = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadRoot)) fs.mkdirSync(uploadRoot, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadRoot),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    cb(null, `${Date.now()}-${base}${ext}`);
  },
});
const upload = multer({ storage });

/**
 * POST /api/posts/:postId/comments - add a comment
 */
router.post('/:postId/comments', verifyToken, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Comment text required" });
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const comment = await Comment.create({
      postId: post._id,
      userId: req.user.id,
      username: req.user.username,
      text,
    });

    return res.status(201).json({ comment });
  } catch (err) {
    console.error("❌ Error adding comment:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/posts/:postId/comments - get all comments for a post
 */
router.get('/:postId/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({ createdAt: 1 });
    return res.json({ comments });
  } catch (err) {
    console.error("❌ Error fetching comments:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * POST /api/posts - upload a new post
 */
router.post("/", verifyToken, upload.array("images"), async (req, res) => {
  try {
    const { caption, location, tags } = req.body;
    const files = req.files;

    if (!files || files.length === 0) return res.status(400).json({ msg: "No images uploaded." });
    if (!caption) return res.status(400).json({ msg: "Caption is required." });

    const imageUrls = files.map(f => `/uploads/${f.filename}`);

    const newPost = await Post.create({
      uid: req.user.id,
      username: req.user.username,
      caption,
      imageUrls,
      role: req.user.role,
      location: location || "",
      tags: tags ? String(tags).split(",").map((t) => t.trim()).filter(Boolean) : [],
    });

    return res.status(201).json({ success: true, post: newPost });
  } catch (err) {
    console.error("❌ Error uploading post:", err);
    return res.status(500).json({ msg: "Server error" });
  }
});

/**
 * GET /api/posts?role=...&city=... - filter posts
 */
router.get("/", async (req, res) => {
  try {
    const { role, city } = req.query;
    const query = {};
    if (role && role !== "all") query.role = role;
    if (city) query.location = city;

    const posts = await Post.find(query).sort({ createdAt: -1 });
    return res.json(posts);
  } catch (err) {
    console.error("❌ Error fetching posts:", err);
    return res.status(500).json({ msg: "Server error" });
  }
});

/**
 * GET /api/posts/user/:userId - user’s posts
 */
router.get("/user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ uid: req.params.userId }).sort({ createdAt: -1 });
    return res.json(posts);
  } catch (err) {
    console.error("❌ Error fetching user posts:", err);
    return res.status(500).json({ msg: "Server error" });
  }
});

// FINALLY: Export router
export default router;
