import React, { useState } from 'react';
import './CreatePostModal.css';
import axios from 'axios';

const CreatePostModal = ({ onClose }) => {
  const [caption, setCaption] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !caption || !city) {
      alert('Please add an image, caption, and city.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);
    formData.append('city', city);

    try {
      setUploading(true);
      const res = await axios.post('http://localhost:5000/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      console.log('✅ Post uploaded:', res.data);
      onClose();
    } catch (err) {
      console.error('❌ Upload failed:', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit} className="upload-form">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && <img src={preview} alt="preview" className="image-preview" />}

          <textarea
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter your city (e.g., Atlanta)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="city-input"
          />

          <button type="submit" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
