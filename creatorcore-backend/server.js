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
// ---- CORS: must be first ----
const allowedOrigins = [
  "https://creatorcorex.com",
  "https://staging.creatorcorex.com",
  "http://localhost:5173",
];
const corsOptions = {
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS: " + origin));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "X-CSRF-Token",
  ],
};
const app = express();
app.use(cors(corsOptions));
app.use((req, res, next) => {
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";

import authRoutes from "./routes/auth.js";
import googleAuthRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/user.js";
import postsRoutes from "./routes/Post.js"; // ✅ Fixed: now importing posts
import "./config/passport.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
const isProd = process.env.NODE_ENV === "production";

// ---- Ensure /uploads exists ----
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });


// ---- Security Middleware ----
if (isProd) {
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://cdnjs.cloudflare.com", "https://cdn.jsdelivr.net", "https://unpkg.com"],
        styleSrc: ["'self'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com", "https://cdn.jsdelivr.net", "https://unpkg.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "blob:", "https://cdn.jsdelivr.net", "https://unpkg.com"],
        connectSrc: ["'self'", "https://creatorcorex.com", "https://staging.creatorcorex.com", "http://localhost:5173"],
        frameSrc: ["'self'", "https://www.youtube.com", "https://www.youtube-nocookie.com", "https://youtu.be"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
      },
    },
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }));
}
app.use(
  mongoSanitize({
    replaceWith: '_',
    onlySanitize: ['body', 'params'], // Avoid mutating req.query (read-only in Express 5)
    onSanitize: ({ req, key }) => {
      // Optional: add logging here if needed
    },
  })
);
app.use(hpp());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    // Minimal structured log
    console.warn({ event: "rate_limit", ip: req.ip, path: req.originalUrl });
    res.status(429).json({ message: "Too many requests, please try again later." });
  },
});
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 100,
  delayMs: 250,
});
app.use(limiter);
app.use(speedLimiter);

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
