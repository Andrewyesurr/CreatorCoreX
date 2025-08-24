// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path";
import fs from "fs";

import authRoutes from "./routes/auth.js";
import googleAuthRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/user.js";
import postsRoutes from "./routes/Post.js"; // ✅ Fixed: now importing posts
import "./config/passport.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
const isProd = process.env.NODE_ENV === "production";

// ---- Ensure /uploads exists ----
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// ---- CORS ----
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
  })
);
app.use((req, res, next) => {
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// ---- Parsers ----
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// ---- Session (for Google OAuth role/intent handoff) ----
if (isProd) {
  app.set("trust proxy", 1);
}
app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: isProd,
      httpOnly: true,
      sameSite: isProd ? "none" : "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// ---- Passport ----
app.use(passport.initialize());
app.use(passport.session());

// ---- Static: /uploads ----
app.use("/uploads", express.static(uploadsDir));

// ---- Health check ----
app.get("/healthz", (_req, res) => res.json({ ok: true }));

// ---- Routes ----
app.use("/api/auth", authRoutes);
app.use("/api/auth", googleAuthRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes); // ✅ Fixed: posts route is now mounted

// ---- 404 for unknown API routes ----
app.use("/api", (_req, res) => res.status(404).json({ message: "Not Found" }));

// ---- Error handler ----
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Server error" });
});

// ---- DB connect + start ----
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`🌐 FRONTEND_ORIGIN: ${FRONTEND_ORIGIN}`);
      console.log(`🔐 NODE_ENV=${process.env.NODE_ENV || "development"} | cookie.secure=${isProd} | sameSite=${isProd ? "none" : "lax"}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
