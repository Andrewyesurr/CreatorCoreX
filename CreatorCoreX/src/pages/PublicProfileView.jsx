// ...existing code up to the first export default...
import React, { useEffect, useState } from "react";
import "./OwnerProfileView.css";
import { FaLink } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const fixUrl = (u) => (u && u.startsWith("/uploads/") ? `${API_BASE}${u}` : u);
const prettyUrl = (u = "") => u.replace(/^https?:\/\//, "");

const PublicProfileView = ({ userData }) => {
  const [profile, setProfile] = useState(userData);
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
    // eslint-disable-next-line
  }, []);

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

  const username = profile?.username || "User";
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
            {/* Show follow and message buttons only if not owner */}
            {(() => {
              const currentUser = JSON.parse(localStorage.getItem("user") || "null");
              const currentUserId = currentUser?._id || currentUser?.id;
              if (profile._id && currentUserId && profile._id !== currentUserId) {
                return (
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                    <button
                      className="profile-follow-btn"
                      // TODO: Add follow logic here or lift state up if needed
                    >
                      Follow
                    </button>
                    <button
                      className="owner-message-btn"
                      style={{ background: '#fff', color: '#6a82fb', border: '1px solid #6a82fb', borderRadius: 24, padding: '8px 24px', fontWeight: 600, cursor: 'pointer' }}
                    >
                      Message
                    </button>
                  </div>
                );
              }
              return null;
            })()}
            <div className="owner-profile-stats">
              <span>
                <strong>{profile.followers?.length || 0}</strong> Followers
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
                    {post.imageUrl && post.imageUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                      <video src={fixUrl(post.imageUrl)} className="profile-post-media" />
                    ) : (
                      <img src={fixUrl(post.imageUrl)} alt="post" className="profile-post-media" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PublicProfileView;
