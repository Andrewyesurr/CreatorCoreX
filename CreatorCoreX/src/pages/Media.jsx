// src/pages/Media.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Media.css";

const Media = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [copiedPostId, setCopiedPostId] = useState(null); // For feedback

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await axios.get(`/api/posts/user/${userId}`);
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch user posts:", err);
      }
    };

    if (userId) {
      fetchUserPosts();
    }
  }, [userId]);

  const handleShare = async (post) => {
    const fullUrl = `${window.location.origin}${post.imageUrl}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiedPostId(post._id);
      setTimeout(() => setCopiedPostId(null), 2000); // Reset message
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="media-page">
      <h2>📸 Your Posts</h2>
      {posts.length === 0 ? (
        <p>No media yet. Upload something!</p>
      ) : (
        <div className="media-grid">
          {posts.map((post) => (
            <div key={post._id} className="media-card">
              {post.imageUrl.endsWith(".mp4") ? (
                <video src={post.imageUrl} controls />
              ) : (
                <img src={post.imageUrl} alt="User post" />
              )}
              <p>{post.caption}</p>
              <span className="media-tag">{post.role}</span>
              {post.location && <span className="media-location">{post.location}</span>}

              <button
                className="share-btn"
                onClick={() => handleShare(post)}
              >
                {copiedPostId === post._id ? "✅ Copied!" : "🔗 Share"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Media;
