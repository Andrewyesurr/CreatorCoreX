import React from "react";

export default function UploadProgress({ progress = 0, error = "", retry = null }) {
  return (
    <div className="upload-progress">
      <div className="progress-bar-bg">
        <div className="progress-bar-fg" style={{ width: `${progress}%` }} />
      </div>
      {error && (
        <div className="upload-error">
          <span>{error}</span>
          {retry && (
            <button className="retry-btn" onClick={retry}>
              Retry
            </button>
          )}
        </div>
      )}
    </div>
  );
}
