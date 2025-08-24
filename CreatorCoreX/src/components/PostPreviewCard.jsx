import React from "react";

export default function PostPreviewCard({ file, caption, loading }) {
  return (
    <div className={`post-preview-card${loading ? " loading" : ""}`}> 
      {file?.type?.startsWith("video") ? (
        <video src={file.previewUrl || URL.createObjectURL(file)} className="preview-media" autoPlay loop muted />
      ) : (
        <img src={file.previewUrl || URL.createObjectURL(file)} alt="preview" className="preview-media" />
      )}
      {loading && <div className="preview-loading-overlay">Uploading...</div>}
      {caption && <div className="preview-caption">{caption}</div>}
    </div>
  );
}
