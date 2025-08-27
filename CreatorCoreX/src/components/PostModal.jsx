import React from "react";
import "./PostModal.css";

export default function PostModal({ post, open, onClose }) {
  if (!open || !post) return null;
  const mediaUrl = post.imageUrls && post.imageUrls[0] ? `${import.meta.env.VITE_API_URL}${post.imageUrls[0]}` : null;
  const isVideo = mediaUrl && mediaUrl.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div className="post-modal-overlay" onClick={onClose}>
      <div className="post-modal-box" onClick={e => e.stopPropagation()}>
        <button className="post-modal-close" onClick={onClose}>×</button>
        <div className="post-modal-media">
          {isVideo ? (
            <video src={mediaUrl} controls autoPlay className="post-modal-media-content" />
          ) : (
            <img src={mediaUrl} alt={post.caption || "Post"} className="post-modal-media-content" />
          )}
        </div>
        <div className="post-modal-details">
          <div className="post-modal-header">
            <span className="post-modal-username">@{post.username}</span>
            {post.role && <span className="post-modal-role">{post.role}</span>}
            {post.location && <span className="post-modal-location">{post.location}</span>}
          </div>
          <div className="post-modal-caption">{post.caption}</div>
          {/* Add more post details here if needed */}
        </div>
      </div>
    </div>
  );
}
