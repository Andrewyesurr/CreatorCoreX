import React, { useState, useRef, useEffect } from "react";
import Cropper from "react-easy-crop";
import getCroppedBlob from "../utils/getCroppedBlob";
import "./CreatePostModal.css";
// For emoji picker, carousel, and date picker
// import EmojiPicker from 'emoji-picker-react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

export default function CreatePostModal({ open, onClose, onPostCreated }) {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]); // Array of File
  const [previewUrls, setPreviewUrls] = useState([]); // Array of string
  const [currentIdx, setCurrentIdx] = useState(0); // For carousel
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);

  const reset = () => {
    setStep(1);
    setFiles([]);
    setPreviewUrls([]);
    setCurrentIdx(0);
    setCaption("");
    setLocation("");
    setVisibility("public");
    setUploading(false);
    setUploadProgress(0);
    setError("");
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setRotation(0);
    setCroppedAreaPixels(null);
  };

  const handleFile = (e) => {
    const fileList = e.target?.files || e.dataTransfer?.files;
    if (!fileList || fileList.length === 0) return;
    const arr = Array.from(fileList);
    setFiles(arr);
    setPreviewUrls(arr.map(f => URL.createObjectURL(f)));
    setCurrentIdx(0);
    // If all images, go to crop, else go to details
    if (arr.every(f => f.type.startsWith("image"))) setStep(2);
    else setStep(3);
  };

  const handleCropDone = async () => {
    if (!croppedAreaPixels) return setStep(3);
    // Only crop current image
    const file = files[currentIdx];
    const blob = await getCroppedBlob(previewUrls[currentIdx], croppedAreaPixels);
    const url = URL.createObjectURL(blob);
    const newFiles = [...files];
    newFiles[currentIdx] = new File([blob], file.name, { type: blob.type });
    const newPreviewUrls = [...previewUrls];
    newPreviewUrls[currentIdx] = url;
    setFiles(newFiles);
    setPreviewUrls(newPreviewUrls);
    setStep(3);
  };

  const handleCropReset = () => {
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setRotation(0);
    setCroppedAreaPixels(null);
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const uploadPost = async () => {
    setUploading(true);
    setError("");
    setUploadProgress(0);
    try {
      const formData = new FormData();
      files.forEach((f, i) => formData.append("images", f));
      formData.append("caption", caption);
      formData.append("location", location);
      formData.append("visibility", visibility);

      await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", import.meta.env.VITE_API_URL + "/api/posts");
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            setUploadProgress(Math.round((e.loaded / e.total) * 100));
          }
        };
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            setUploadProgress(100);
            resolve(xhr.response);
          } else {
            let msg = xhr.responseText || "Upload failed";
            try {
              const json = JSON.parse(xhr.responseText);
              if (json.msg) msg = json.msg;
            } catch {}
            reject(new Error(msg));
          }
        };
        xhr.onerror = () => reject(new Error("Network error"));
        xhr.send(formData);
      });

      onPostCreated?.();
      handleCancel();
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setUploading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleCancel}>×</button>
        <h2>Create a Post</h2>

        {step === 1 && (
          <div className="upload-section">
            <p>Drag & drop or select photos/videos to share</p>
            <div
              className="drop-area"
              onClick={() => inputRef.current.click()}
              onDrop={(e) => { e.preventDefault(); handleFile(e); }}
              onDragOver={(e) => e.preventDefault()}
              tabIndex={0}
              role="button"
              aria-label="Select files"
            >
              <span className="drop-icon">📁</span>
              <span>Click or drop files here</span>
              <input
                ref={inputRef}
                type="file"
                accept="image/*,video/*"
                style={{ display: "none" }}
                onChange={handleFile}
                multiple
              />
            </div>
          </div>
        )}

        {step === 2 && previewUrls.length > 0 && (
          <div className="crop-section">
            <div className="carousel-preview">
              {previewUrls.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Preview ${idx + 1}`}
                  className={`carousel-thumb${idx === currentIdx ? ' active' : ''}`}
                  onClick={() => setCurrentIdx(idx)}
                  style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8, margin: 2, border: idx === currentIdx ? '2px solid #6a82fb' : '2px solid transparent', cursor: 'pointer' }}
                />
              ))}
            </div>
            <div style={{ width: 350, height: 350, background: '#222', margin: '0 auto', borderRadius: 12, position: 'relative', overflow: 'hidden' }}>
              <Cropper
                image={previewUrls[currentIdx]}
                crop={crop}
                zoom={zoom}
                minZoom={0.3}
                maxZoom={3}
                rotation={rotation}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
                onCropComplete={(_, area) => setCroppedAreaPixels(area)}
                cropShape="rect"
                showGrid={true}
                style={{ containerStyle: { width: '100%', height: '100%' }, cropAreaStyle: { border: '2px solid #fff', borderRadius: 8, background: 'rgba(0,0,0,0.2)' } }}
              />
            </div>
            <div className="controls">
              <label>Zoom</label>
              <input
                type="range"
                min={0.3}
                max={3}
                step={0.01}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
              />
              <label>Rotate</label>
              <input
                type="range"
                min={-180}
                max={180}
                step={1}
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
              />
              <div className="crop-actions">
                <button onClick={handleCropReset} type="button">Reset</button>
                <button onClick={() => setStep(1)} type="button">Cancel</button>
                <button onClick={handleCropDone} type="button">Next</button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="details-section">
            <div className="carousel-preview">
              {previewUrls.map((url, idx) => (
                files[idx].type.startsWith('video') ? (
                  <video
                    key={idx}
                    src={url}
                    controls
                    className={`carousel-thumb${idx === currentIdx ? ' active' : ''}`}
                    onClick={() => setCurrentIdx(idx)}
                    style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8, margin: 2, border: idx === currentIdx ? '2px solid #6a82fb' : '2px solid transparent', cursor: 'pointer' }}
                  />
                ) : (
                  <img
                    key={idx}
                    src={url}
                    alt={`Preview ${idx + 1}`}
                    className={`carousel-thumb${idx === currentIdx ? ' active' : ''}`}
                    onClick={() => setCurrentIdx(idx)}
                    style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8, margin: 2, border: idx === currentIdx ? '2px solid #6a82fb' : '2px solid transparent', cursor: 'pointer' }}
                  />
                )
              ))}
            </div>
            {files[currentIdx] && files[currentIdx].type.startsWith("video") ? (
              <video src={previewUrls[currentIdx]} controls className="preview-media" />
            ) : (
              <img src={previewUrls[currentIdx]} alt="Preview" className="preview-media" />
            )}
            <textarea
              placeholder="Write a caption..."
              maxLength={2200}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              disabled={uploading}
            />
            <label htmlFor="location-select" style={{ width: '100%', marginBottom: 4, color: '#fff', fontWeight: 500 }}>Location</label>
            <select
              id="location-select"
              value={location}
              onChange={e => setLocation(e.target.value)}
              disabled={uploading}
              className="location-input"
              style={{ marginBottom: 4 }}
            >
              <option value="">Select a location</option>
              <option value="Atlanta">Atlanta</option>
            </select>
            <div style={{ color: '#bbb', fontSize: 13, marginBottom: 8, width: '100%' }}>
              <strong>Note:</strong> Currently, CreatorCore is only available in <b>Atlanta</b>. More locations coming soon!
            </div>
            <div className="visibility-toggle">
              <label>
                <input
                  type="radio"
                  className="visibility-radio"
                  name="visibility"
                  value="public"
                  checked={visibility === "public"}
                  onChange={() => setVisibility("public")}
                  disabled={uploading}
                />
                <span className="visibility-btn">Public</span>
              </label>
              <label>
                <input
                  type="radio"
                  className="visibility-radio"
                  name="visibility"
                  value="private"
                  checked={visibility === "private"}
                  onChange={() => setVisibility("private")}
                  disabled={uploading}
                />
                <span className="visibility-btn">Private</span>
              </label>
            </div>
            <button 
              className="modal-action-btn gradient-btn" 
              onClick={uploadPost} 
              disabled={uploading || files.length === 0}
            >
              {uploading ? `Posting... (${uploadProgress}%)` : "Share"}
            </button>
            {uploading && (
              <div className="upload-progress-bar">
                <div className="upload-progress" style={{ width: `${uploadProgress}%` }} />
              </div>
            )}
            {error && <p className="error-text">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
