// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    /* ----- Auth / Identity ----- */
    username: { type: String, required: true, unique: true, trim: true },
    email:    { type: String, required: true, unique: true, lowercase: true },
    password: { type: String }, // optional for OAuth users
    role:     { type: String, enum: ["creator", "teamLeader", "individual"], default: "creator" },

    /* ----- Profile fields ----- */
    name:         { type: String, default: "" }, // display name (alt)
    displayName:  { type: String, default: "" }, // if you prefer this key in UI
    bio:          { type: String, default: "" },
    website:      { type: String, default: "" },
    gender:       { type: String, enum: ["unspecified","female","male","nonbinary","other"], default: "unspecified" },
    showSuggestions: { type: Boolean, default: true },

    /* ----- Images ----- */
    profileImage: { type: String, default: "" },
    bannerImage:  { type: String, default: "" },
    bannerFocalX: { type: Number, default: 50 },   // %
    bannerFocalY: { type: Number, default: 50 },   // %
    bannerZoom:   { type: Number, default: 100 },  // %

  /* ----- TeamLeader extras ----- */
  teamName:   { type: String, default: "" },
  teamMembers:[{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  teamPosts:  [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],

  /* ----- Social: Followers/Following ----- */
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // users who follow this user
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // users this user follows

  /* ----- OAuth ----- */
  googleId:   { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
