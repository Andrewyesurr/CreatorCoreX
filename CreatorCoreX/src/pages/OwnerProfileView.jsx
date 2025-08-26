import React, { useEffect, useState } from "react";
import CreatePostModal from "../components/CreatePostModal";
import { useNavigate } from "react-router-dom";
import "./OwnerProfileView.css";
import { FaLink } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const fixUrl = (u) => (u && u.startsWith("/uploads/") ? `${API_BASE}${u}` : u);
const prettyUrl = (u = "") => u.replace(/^https?:\/\//, "");

const OwnerProfileView = ({ userData }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(userData);
  const [followers, setFollowers] = useState(userData.followers || []);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [followError, setFollowError] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("user") || "null");
  const currentUserId = currentUser?._id || currentUser?.id;
  const authToken = localStorage.getItem("token");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("Posts");

  useEffect(() => {
    // Always fetch latest user data and posts on mount
    const fetchUser = async () => {
      try {
        const userId = profile?._id || profile?.id;
        if (!userId) return;
        const res = await fetch(`${API_BASE}/api/users/${userId}`);
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
          setFollowers(data.followers || []);
        }
      } catch (e) {}
    };
    const fetchPosts = async () => {
      try {
        const userId = profile?._id || profile?.id;
        if (!userId) return;
        const res = await fetch(`${API_BASE}/api/posts/user/${userId}`);
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (e) {}
    };
    fetchUser();
    fetchPosts();
    // Only check follow status if NOT owner
    if (
      authToken &&
      profile?._id &&
      currentUserId &&
      profile._id !== currentUserId
    ) {
      fetch(`${API_BASE}/api/users/${profile._id}/is-following`, {
        headers: { Authorization: `Bearer ${authToken}` }
      })
        .then(res => res.json())
        .then(data => setIsFollowing(!!data.isFollowing))
        .catch(() => setIsFollowing(false));
    } else {
      setIsFollowing(false);
    }
    // eslint-disable-next-line
  }, [profile?._id]);
  // Follow/unfollow logic
  const handleFollowToggle = async () => {
    if (!authToken) return setFollowError("You must be logged in to follow.");
    setFollowError("");
    setFollowLoading(true);
    try {
      if (isFollowing) {
        await fetch(`${API_BASE}/api/users/${profile._id}/unfollow`, {
          method: "POST",
          headers: { Authorization: `Bearer ${authToken}` }
        });
        setIsFollowing(false);
        setFollowers(f => f.filter(id => String(id) !== String(currentUserId)));
      } else {
        await fetch(`${API_BASE}/api/users/${profile._id}/follow`, {
          method: "POST",
          headers: { Authorization: `Bearer ${authToken}` }
        });
        setIsFollowing(true);
        setFollowers(f => [...f, currentUserId]);
      }
    } catch (err) {
      setFollowError("Failed to update follow status");
    } finally {
      setFollowLoading(false);
    }
  };

  // After post creation, refresh posts
  const handlePostCreated = () => {
    setShowCreatePost(false);
    // refetch posts
    const fetchPosts = async () => {
      try {
        const userId = profile?._id || profile?.id;
        if (!userId) return;
        const res = await fetch(`${API_BASE}/api/posts/user/${userId}`);
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (e) {}
    };
    fetchPosts();
  };

  const handleEditProfile = () => {
    navigate("/edit-profile", { state: { user: profile } });
  };

  // Images (prefix server-relative uploads)
  const profileImage = fixUrl(profile?.profileImage) || "/default-pfp.jpg";
  const rawBanner = profile?.bannerImage || "/default-banner.jpg";
  const bannerImage = fixUrl(rawBanner);

  // Banner crop settings (with sane defaults)
  const bannerFocalX = typeof profile?.bannerFocalX === "number" ? profile.bannerFocalX : 50;
  const bannerFocalY = typeof profile?.bannerFocalY === "number" ? profile.bannerFocalY : 50;
  const bannerZoom = typeof profile?.bannerZoom === "number" ? profile.bannerZoom : 100;

  // Inline style applied to the banner container (height is controlled by CSS)
  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${bannerFocalX}% ${bannerFocalY}%`,
    backgroundSize: `${bannerZoom}% auto`,
  };

  const username = profile?.username || "Your Name";
  const handle = profile?.username?.toLowerCase() || "username";
  const bio = profile?.bio || "No bio available.";
  const website = profile?.website;

  return (
    <div className="owner-profile-bg">
      <div className="owner-profile-card">
        {/* Banner (90px tall via CSS). Uses background so focal/zoom work */}
        <div
          className="owner-profile-banner"
          style={bannerStyle}
          role="img"
          aria-label="Profile banner"
        />

        <div className="owner-profile-row">
          <div className="owner-profile-picture-section">
            <img
              src={profileImage}
              alt="Profile"
              className="owner-profile-picture"
            />
          </div>

          <div className="owner-profile-info">
            <h2 className="owner-profile-username">{username}</h2>
            <div className="owner-profile-handle">@{handle}</div>
            <div className="owner-profile-bio">{bio}</div>

            {website && (
              <div className="owner-profile-website" style={{ marginTop: 8 }}>
                <FaLink
                  style={{ marginRight: 6, verticalAlign: "middle" }}
                  aria-hidden="true"
                />
                <a
                  href={website.startsWith("http") ? website : `https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#3b82f6",
                    textDecoration: "none",
                    fontWeight: 500,
                    wordBreak: "break-word",
                  }}
                >
                  {prettyUrl(website)}
                </a>
              </div>
            )}
          </div>

          <div className="owner-profile-actions-stats">
            {/* Only show owner tools if this is the current user's profile */}
            {profile._id === currentUserId && (
              <div className="owner-profile-actions" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <button className="owner-edit-btn" onClick={handleEditProfile}>
                  Edit Profile
                </button>
                <button className="owner-create-btn" onClick={() => setShowCreatePost(true)}>
                  Create Post
                </button>
              </div>
            )}
            {/* Show follow button if not owner (never for owner) */}
            {profile._id !== currentUserId && (
              <div className="profile-follow-btn-wrap">
                <button
                  className={`profile-follow-btn${isFollowing ? ' following' : ''}`}
                  onClick={handleFollowToggle}
                  disabled={followLoading}
                >
                  {followLoading ? (
                    <span className="profile-follow-spinner"></span>
                  ) : isFollowing ? 'Unfollow' : 'Follow'}
                </button>
                {followError && <div className="profile-follow-error">{followError}</div>}
              </div>
            )}
            <div className="owner-profile-stats">
              <span>
                <strong>{followers.length}</strong> Followers
              </span>
              <span>
                <strong>{posts.length}</strong> Posts
              </span>
              <span>
                <strong>0</strong> Likes
              </span>
            </div>
          </div>
        </div>

        <div className="owner-profile-tabs">
          {['Posts', 'Photos', 'Videos', 'Likes'].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Posts' && (
          posts.length === 0 ? (
            <div className="owner-profile-empty">No posts yet.</div>
          ) : (
            <div className="profile-posts-grid">
              {posts.map(post => (
                <div className="profile-post-card" key={post._id}>
                  <div className="profile-post-media-wrap">
                    {post.imageUrls && post.imageUrls[0] && post.imageUrls[0].match(/\.(mp4|webm|ogg)$/i) ? (
                      <video src={fixUrl(post.imageUrls[0])} className="profile-post-media" />
                    ) : (
                      <img src={fixUrl(post.imageUrls && post.imageUrls[0])} alt="post" className="profile-post-media" />
                    )}
                  </div>
                  {/* Optionally overlay icons for video/reel here */}
                </div>
              ))}
            </div>
          )
        )}
      </div>
    {showCreatePost && (
      <CreatePostModal open={showCreatePost} onClose={() => setShowCreatePost(false)} onPostCreated={handlePostCreated} />
    )}
  </div>
  );
};

export default OwnerProfileView;
