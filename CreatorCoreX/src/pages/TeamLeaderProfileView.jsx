
import React, { useEffect, useState } from "react";
import CreatePostModal from "../components/CreatePostModal";
import { useNavigate } from "react-router-dom";
import "./OwnerProfileView.css";
import { FaLink } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const fixUrl = (u) => (u && u.startsWith("/uploads/") ? `${API_BASE}${u}` : u);
const prettyUrl = (u = "") => u.replace(/^https?:\/\//, "");

const TeamLeaderProfileView = ({ userData }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(userData);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [activeTab, setActiveTab] = useState("Posts");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = profile?._id || profile?.id || profile?.uid;
        if (!userId) return;
        const res = await fetch(`${API_BASE}/api/users/${userId}`);
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
          if (data.teamMembers && Array.isArray(data.teamMembers)) {
            fetchTeamMembers(data.teamMembers);
          }
        }
      } catch (e) {}
    };
    const fetchPosts = async () => {
      try {
        const userId = profile?._id || profile?.id || profile?.uid;
        if (!userId) return;
        const res = await fetch(`${API_BASE}/api/posts/user/${userId}`);
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (e) {}
    };
    const fetchTeamMembers = async (memberIds) => {
      const members = await Promise.all(
        memberIds.map(async (id) => {
          const res = await fetch(`${API_BASE}/api/users/${id}`);
          if (res.ok) return await res.json();
          return null;
        })
      );
      setTeamMembers(members.filter(Boolean));
    };
    fetchUser();
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  const handlePostCreated = () => {
    setShowCreatePost(false);
    const fetchPosts = async () => {
      try {
        const userId = profile?._id || profile?.id || profile?.uid;
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

  const handleInviteMember = () => {
    alert("Invite Member feature coming soon!");
  };

  const profileImage = fixUrl(profile?.profileImage) || "/default-pfp.jpg";
  const rawBanner = profile?.bannerImage || "/default-banner.jpg";
  const bannerImage = fixUrl(rawBanner);
  const bannerFocalX = typeof profile?.bannerFocalX === "number" ? profile.bannerFocalX : 50;
  const bannerFocalY = typeof profile?.bannerFocalY === "number" ? profile.bannerFocalY : 50;
  const bannerZoom = typeof profile?.bannerZoom === "number" ? profile.bannerZoom : 100;
  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${bannerFocalX}% ${bannerFocalY}%`,
    backgroundSize: `${bannerZoom}% auto`,
  };

  const teamName = profile?.teamName || "Team Name";
  const username = profile?.username || "username";
  const bio = profile?.bio || "No bio available.";
  const website = profile?.website;

  return (
    <div className="owner-profile-bg">
      <div className="owner-profile-card">
        <div className="owner-profile-banner" style={bannerStyle} role="img" aria-label="Profile banner" />
        <div className="owner-profile-row">
          <div className="owner-profile-picture-section">
            <img src={profileImage} alt="Profile" className="owner-profile-picture" />
          </div>
          <div className="owner-profile-info">
            <h2 className="owner-profile-username">{teamName}</h2>
            <div className="owner-profile-handle">@{username}</div>
            <span className="role-pill">Team Leader</span>
            <div className="owner-profile-bio">{bio}</div>
            {website && (
              <div className="owner-profile-website" style={{ marginTop: 8 }}>
                <FaLink style={{ marginRight: 6, verticalAlign: "middle" }} aria-hidden="true" />
                <a href={website.startsWith("http") ? website : `https://${website}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: "#3b82f6", textDecoration: "none", fontWeight: 500, wordBreak: "break-word" }}>
                  {prettyUrl(website)}
                </a>
              </div>
            )}
          </div>
          <div className="owner-profile-actions-stats">
            <div className="owner-profile-actions">
              <button className="owner-edit-btn" onClick={handleEditProfile}>Edit Profile</button>
              <button className="owner-create-btn" onClick={() => setShowCreatePost(true)}>Create Post</button>
              <button className="owner-invite-btn" onClick={handleInviteMember}>Invite Member</button>
            </div>
            <div className="owner-profile-stats">
              <span><strong>{teamMembers.length}</strong> Members</span>
              <span><strong>{posts.length}</strong> Posts</span>
            </div>
          </div>
        </div>
        <div className="owner-profile-tabs">
          {['Posts', 'Team', 'About'].map(tab => (
            <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>{tab}</button>
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
        {activeTab === 'Team' && (
          <div className="team-members-list">
            {teamMembers.length === 0 ? (
              <div>No team members yet.</div>
            ) : (
              <ul>
                {teamMembers.map(member => (
                  <li key={member._id} className="team-member-item">
                    <img src={fixUrl(member.profileImage) || "/default-pfp.jpg"} alt={member.username} className="team-member-avatar" />
                    <span className="team-member-username">{member.username}</span>
                    <span className="team-member-role">{member.role}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {activeTab === 'About' && (
          <div className="owner-profile-about">
            <div className="owner-profile-bio">{bio}</div>
            {website && (
              <div className="owner-profile-website" style={{ marginTop: 8 }}>
                <FaLink style={{ marginRight: 6, verticalAlign: "middle" }} aria-hidden="true" />
                <a href={website.startsWith("http") ? website : `https://${website}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: "#3b82f6", textDecoration: "none", fontWeight: 500, wordBreak: "break-word" }}>
                  {prettyUrl(website)}
                </a>
              </div>
            )}
            {/* Add socials, tags, contact, etc. here as needed */}
          </div>
        )}
      </div>
      {showCreatePost && (
        <CreatePostModal open={showCreatePost} onClose={() => setShowCreatePost(false)} onPostCreated={handlePostCreated} />
      )}
    </div>
  );
};

export default TeamLeaderProfileView;
