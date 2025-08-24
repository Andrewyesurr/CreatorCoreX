import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import OwnerProfileView from "./OwnerProfileView";
import PublicProfileView from "./PublicProfileView";
import TeamLeaderProfileView from "./TeamLeaderProfileView";
import "./Profile.css";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Profile = () => {
  const { uid } = useParams();             // undefined for /profile, defined for /profile/:uid
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user") || "null"); }
    catch { return null; }
  });
  const [profileUser, setProfileUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // convenience
  const meId = useMemo(() => currentUser?._id || currentUser?.id || null, [currentUser]);
  const onOwnRoute = !uid;                                     // /profile
  const isOwner = onOwnRoute || (uid && meId && String(meId) === String(uid));

  useEffect(() => {
    let cancelled = false;

    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        if (onOwnRoute) {
          // my own page -> /api/auth/me (needs Bearer token)
          const token = localStorage.getItem("token") || "";
          if (!token) {
            // if you gate this route elsewhere, you can remove this
            navigate("/login", { replace: true });
            return;
          }
          const me = await axios.get(`${API_BASE}/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (cancelled) return;
          setProfileUser(me.data);
          setCurrentUser(me.data);
          localStorage.setItem("user", JSON.stringify(me.data));
          return;
        }

        // viewing someone else -> /api/users/:uid (public)
        const res = await axios.get(`${API_BASE}/api/users/${uid}`);
        if (cancelled) return;
        setProfileUser(res.data);
      } catch (err) {
        // recover from stale id by falling back to /auth/me
        if (axios.isAxiosError(err) && err.response?.status === 404 && !onOwnRoute) {
          try {
            const token = localStorage.getItem("token") || "";
            if (token) {
              const me = await axios.get(`${API_BASE}/api/auth/me`, {
                headers: { Authorization: `Bearer ${token}` },
              });
              if (cancelled) return;
              setProfileUser(me.data);
              setCurrentUser(me.data);
              localStorage.setItem("user", JSON.stringify(me.data));
              navigate("/profile", { replace: true });
              return;
            }
          } catch (e2) {
            console.error("Fallback /auth/me failed:", e2);
          }
        }
        console.error("Error fetching profile:", err);
        setProfileUser(null);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchProfile();
    return () => { cancelled = true; };
  }, [uid, onOwnRoute, navigate]);

  if (isLoading) return <div className="loading">Loading profile...</div>;
  if (!profileUser) return <div className="error">Profile not found.</div>;


  // Debug logs
  console.log("[Profile.jsx] profileUser:", profileUser);
  console.log("[Profile.jsx] profileUser.role:", profileUser && profileUser.role);

  // If it's your page and your role is teamLeader, show the team leader view; else owner view.
  if (isOwner) {
    return (
      <div className="profile-page">
        {profileUser.role === "teamLeader" ? (
          <TeamLeaderProfileView userData={profileUser} />
        ) : (
          <OwnerProfileView userData={profileUser} />
        )}
      </div>
    );
  }

  // Public view for other users
  return (
    <div className="profile-page">
      <PublicProfileView userData={profileUser} />
    </div>
  );
};

export default Profile;
