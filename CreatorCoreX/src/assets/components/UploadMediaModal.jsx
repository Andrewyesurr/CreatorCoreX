// UploadMediaModal.jsx
import React, { useState } from 'react';
import './UploadMediaModal.css';

const UploadMediaModal = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadType, setUploadType] = useState('profileImage'); // Default to profile image

  const handleUpload = async () => {
    if (!file) return;

    // Use JWT token for authentication
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    
    if (!token || !userStr) {
      console.warn("User not authenticated");
      return;
    }

    const user = JSON.parse(userStr);
    
    try {
      setUploading(true);
      
      // Create FormData for file upload to backend
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', user.id);
      formData.append('uploadType', uploadType); // 'profileImage' or 'bannerImage'
      
      const response = await fetch('http://localhost:5000/api/upload/profile-media', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        console.log('File uploaded successfully:', result);
        onClose();
        window.location.reload(); // Refresh to reflect new image
      } else {
        console.error('Upload failed:', response.statusText);
      }
    } catch (err) {
      console.error('Upload failed', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-media-modal">
      <div className="upload-modal-content">
        <h2>Upload Banner or Profile Picture</h2>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <div className="upload-btn-group">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button onClick={handleUpload} className="upload-btn" disabled={!file || uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadMediaModal;
