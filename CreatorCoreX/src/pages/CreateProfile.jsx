import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CreateProfile.css";
import OwnerProfileView from "./OwnerProfileView";
import PublicProfileView from "./PublicProfileView";

const CreatorProfile = () => {
  const { uid } = useParams(); // UID from URL
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null); // Logged in user
  const [profileUser, setProfileUser] = useState(null); // Profile being viewed
  const [isLoading, setIsLoading] = useState(true);

  // 🔐 Get logged-in user from backend session or localStorage
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/auth/me", {
          credentials: "include", // if using cookies
        });
        const data = await res.json();

        if (res.ok) {
          setCurrentUser(data.user);
          if (!uid && data.user?._id) {
            navigate(`/creator-profile/${data.user._id}`);
          }
        } else {
          console.warn("Not logged in.");
        }
      } catch (err) {
        console.error("Failed to fetch current user:", err);
      }
    };

    fetchCurrentUser();
  }, [uid, navigate]);

  // 📦 Fetch profile user from backend
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (!uid) return;

      try {
        const res = await fetch(`http://localhost:3000/api/users/${uid}`);
        const data = await res.json();

        if (res.ok) {
          setProfileUser(data.user);
        } else {
          console.warn("User not found.");
        }
      } catch (err) {
        console.error("Error fetching profile user:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileUser();
  }, [uid]);

  const isOwner = currentUser?._id === uid;

  if (isLoading) return <div className="loading">Loading profile...</div>;
  if (!profileUser) return <div className="not-found">User profile not found.</div>;

  return (
    <div className="creator-profile-container">
      {isOwner ? (
        <OwnerProfileView userData={profileUser} />
      ) : (
        <PublicProfileView userData={profileUser} />
      )}
    </div>
  );
};

export default CreatorProfile;
