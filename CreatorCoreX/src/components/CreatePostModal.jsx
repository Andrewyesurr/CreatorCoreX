// CreatePostModal.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './CreatePostModal.css';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

const CreatePostModal = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState('');

  const validatePost = (file, caption) => {
    const MAX_SIZE_MB = 10;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4'];
    if (!file || !allowedTypes.includes(file.type)) return 'Unsupported file type.';
    if (file.size > MAX_SIZE_MB * 1024 * 1024) return 'File too large (max 10MB).';
    if (!caption.trim()) return 'Caption cannot be empty.';
    return null;
  };

  const uploadPostWithRetry = async (formData, retries = 3) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const res = await axios.post(`${API_URL}/posts`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percent);
          },
        });
        return res.data;
      } catch (err) {
        if (attempt === retries) throw err;
        await new Promise((res) => setTimeout(res, 1000 * attempt));
      }
    }
  };

  const handleUpload = async () => {
    const error = validatePost(file, caption);
    if (error) return setUploadError(error);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('caption', caption);

    try {
      setUploading(true);
      setUploadError('');
      const data = await uploadPostWithRetry(formData);
      console.log('✅ Upload success:', data);
      setCaption('');
      setFile(null);
      setUploading(false);
      setUploadProgress(0);
    } catch (err) {
      console.error('❌ Upload failed:', err);
      setUploadError('Upload failed. Please try again.');
      localStorage.setItem('draftPost', JSON.stringify({ caption }));
      setUploading(false);
    }
  };

  return (
    <div className="post-modal">
      <h2>Create Post</h2>
      <input type="file" accept="image/*,video/mp4" onChange={(e) => setFile(e.target.files[0])} />
      <textarea placeholder="Write a caption..." value={caption} onChange={(e) => setCaption(e.target.value)} />

      {uploading && (
        <div className="upload-progress">
          <p>Uploading... {uploadProgress}%</p>
          <progress value={uploadProgress} max="100" />
        </div>
      )}

      {uploadError && (
        <div className="upload-error">
          <p>{uploadError}</p>
          <button onClick={handleUpload}>Retry</button>
        </div>
      )}

      <button className="submit-btn" onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Post'}
      </button>
    </div>
  );
};

export default CreatePostModal;
