// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

/**
 * Verifies a JWT from the Authorization header (preferred) or cookies (fallback).
 * Attaches { id, role, username? } to req.user on success.
 */
export const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization || "";
  let token = null;

  // Prefer "Authorization: Bearer <token>"
  if (auth.startsWith("Bearer ")) {
    token = auth.slice(7).trim();
  }
  // Optional fallback to cookie if you use cookie-parser and set a cookie named "token"
  else if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Your tokens are issued as { id, role } — username may be absent
    req.user = {
      id: decoded.id,
      role: decoded.role,
      ...(decoded.username ? { username: decoded.username } : {}),
    };

    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(403).json({ msg: "Token is not valid" });
  }
};

/**
 * Optional helper: ensure the caller is the owner of :uid or an admin.
 * Use on routes like PUT /api/users/:uid, PATCH /api/users/:uid/...
 */
export const ensureOwnerOrAdmin = (req, res, next) => {
  const isOwner = req.user?.id === req.params.uid;
  const isAdmin = req.user?.role === "admin";
  if (isOwner || isAdmin) return next();
  return res.status(403).json({ message: "Forbidden" });
};
