// routes/authRoutes.js
import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
const ALLOWED_ROLES = new Set(["creator", "teamLeader", "individual"]);

// Entry: /api/auth/google?role=teamLeader|creator|individual&intent=signup|login&redirect=/path
router.get(
  "/google",
  (req, res, next) => {
    const { role, intent, redirect } = req.query;
    console.log("[OAuth Entry] role:", role, "intent:", intent, "redirect:", redirect);

    if (role && ALLOWED_ROLES.has(role)) {
      req.session.oauthRole = role;
    } else if (role === "team") {
      req.session.oauthRole = "teamLeader";
      console.log("[OAuth Entry] Mapped 'team' -> 'teamLeader'");
    }
    if (intent) req.session.oauthIntent = intent; // "signup" or "login"
    if (redirect) req.session.oauthRedirect = redirect;

    console.log("[OAuth Entry] Session now:", req.session);
    next();
  },
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// Callback
router.get(
  "/google/callback",
  (req, _res, next) => {
    console.log("🔍 Google callback hit; session:", req.session);
    next();
  },
  passport.authenticate("google", {
    failureRedirect: "/signin",
    session: false, // we used session only to shuttle hints
  }),
  async (req, res) => {
    try {
      const user = req.user;
      if (!user) return res.redirect(`${FRONTEND_ORIGIN}/signin?error=NoUserFound`);

      const desiredRole = ALLOWED_ROLES.has(req.session.oauthRole) ? req.session.oauthRole : undefined;
      const intent = req.session.oauthIntent || "login";
      const redirectHint = req.session.oauthRedirect;

      // If this was a SIGNUP with a desiredRole, persist it
      if (desiredRole && intent === "signup" && user.role !== desiredRole && typeof user.save === "function") {
        try {
          user.role = desiredRole;
          await user.save();
          console.log("✅ Updated user role to:", desiredRole);
        } catch (e) {
          console.warn("⚠️ Could not update role:", e?.message);
        }
      }

      const token = jwt.sign(
        { id: user._id, username: user.username, role: user.role || desiredRole || "creator" },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      const effectiveRole = user.role || desiredRole || "creator";
      const defaultPath =
        effectiveRole === "teamLeader"
          ? "/setup-team"
          : effectiveRole === "individual"
          ? "/setup-individual"
          : "/setup-creator";

      const redirectPath = redirectHint || defaultPath;

      // cleanup
      req.session.oauthRole = undefined;
      req.session.oauthIntent = undefined;
      req.session.oauthRedirect = undefined;

      const url = `${FRONTEND_ORIGIN}/oauth-success?token=${encodeURIComponent(token)}&role=${encodeURIComponent(
        effectiveRole
      )}&redirect=${encodeURIComponent(redirectPath)}`;

      return res.redirect(url);
    } catch (err) {
      console.error("OAuth callback error:", err);
      return res.redirect(`${FRONTEND_ORIGIN}/signin?error=OAuthCallback`);
    }
  }
);

export default router;
