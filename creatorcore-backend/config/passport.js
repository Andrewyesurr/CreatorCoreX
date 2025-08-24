// config/passport.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

const ALLOWED_ROLES = new Set(["creator", "teamLeader", "individual"]);

/* Helpers */
function toSlug(str) {
  const base = (str || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .replace(/^\d+/, "") // avoid starting with numbers only
    .slice(0, 20);
  return base || "user";
}
async function uniqueUsername(base) {
  let candidate = base;
  let i = 1;
  // try a few suffixes if needed
  // (User.exists returns null or doc, so wrap in Boolean)
  while (await User.exists({ username: candidate })) {
    candidate = `${base}${i++}`;
    if (i > 99) break;
  }
  return candidate;
}

/* Session wiring (used only to carry oauthRole/oauthIntent between the entry route and callback) */
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

/* Google OAuth Strategy */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true, // <-- lets us read req.session.oauthRole / oauthIntent
    },
    // verify callback
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        // Read hints saved by /api/auth/google
        let rawRole = req.session?.oauthRole;
        // Map 'team' to 'teamLeader' for extra safety
        if (rawRole === 'team') rawRole = 'teamLeader';
        const desiredRole = ALLOWED_ROLES.has(rawRole)
          ? rawRole
          : undefined;
        const intent = req.session?.oauthIntent || "login"; // "signup" or "login"

        // Try to find by googleId first
        let user = await User.findOne({ googleId: profile.id });

        const primaryEmail = profile.emails?.[0]?.value || "";
        const photoUrl = profile.photos?.[0]?.value || "";
        const display = profile.displayName || primaryEmail?.split("@")[0] || "User";

        if (user) {
          // Optional light update (only fill blanks)
          let needsSave = false;
          if (!user.profileImage && photoUrl) {
            user.profileImage = photoUrl;
            needsSave = true;
          }
          if (!user.email && primaryEmail) {
            user.email = primaryEmail.toLowerCase();
            needsSave = true;
          }
          if (!user.username) {
            user.username = await uniqueUsername(toSlug(display));
            needsSave = true;
          }
          // Do NOT flip role on regular login; creation/role-change handled elsewhere
          if (needsSave) await user.save();
          return done(null, user);
        }

        // New user — build username + role
        const baseUsername =
          toSlug(display) || toSlug(primaryEmail.split("@")[0] || "user");
        const username = await uniqueUsername(baseUsername);

        // Only honor desiredRole on signup; otherwise default to creator
        const role =
          intent === "signup" && desiredRole ? desiredRole : "creator";

        user = await User.create({
          googleId: profile.id,
          username,
          email: primaryEmail.toLowerCase(),
          profileImage: photoUrl,
          role,
          // sensible defaults so front-end doesn't choke
          bio: "",
          website: "",
          teamName: "",
          teamMembers: [],
          teamPosts: [],
          bannerImage: "",
          bannerFocalX: 50,
          bannerFocalY: 50,
          bannerZoom: 100,
        });

        return done(null, user);
      } catch (err) {
        console.error("Google Auth Error:", err);
        return done(err, null);
      }
    }
  )
);
