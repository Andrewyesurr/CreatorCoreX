import React from 'react';
import './ContentStudio.css';

const ContentStudio = () => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
      <div className="hero-section">
        <h1>Content Studio</h1>
        <p>Your all-in-one creative workspace for content creation and collaboration</p>
      </div>
      
      <div className="studio-features">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Design Tools</h3>
            <p>Access professional design tools for creating stunning visuals</p>
            <ul>
              <li>Vector graphics editor</li>
              <li>Photo editing suite</li>
              <li>Template library</li>
              <li>Brand kit manager</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <h3>Video Production</h3>
            <p>Create and edit professional videos with our integrated video studio</p>
            <ul>
              <li>Multi-track timeline</li>
              <li>Effects & transitions</li>
              <li>Audio mixing</li>
              <li>Export optimization</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Content Management</h3>
            <p>Organize and schedule your content across all platforms</p>
            <ul>
              <li>Content calendar</li>
              <li>Auto-scheduling</li>
              <li>Version control</li>
              <li>Team collaboration</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics Dashboard</h3>
            <p>Track performance and optimize your content strategy</p>
            <ul>
              <li>Engagement metrics</li>
              <li>Audience insights</li>
              <li>Performance reports</li>
              <li>ROI tracking</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="workspace-preview">
        <h2>Your Creative Workspace</h2>
        <div className="workspace-demo">
          <div className="demo-sidebar">
            <h4>Project Files</h4>
            <div className="file-list">
              <div className="file-item">📁 Brand Campaign 2024</div>
              <div className="file-item">📄 Social Media Posts</div>
              <div className="file-item">🎥 Product Demo Video</div>
              <div className="file-item">📊 Analytics Report</div>
            </div>
          </div>
          
          <div className="demo-main">
            <div className="demo-toolbar">
              <button>File</button>
              <button>Edit</button>
              <button>View</button>
              <button>Share</button>
            </div>
            <div className="demo-canvas">
              <div className="canvas-placeholder">
                <p>Content Creation Canvas</p>
                <p>Drag and drop assets here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Ready to Create?</h2>
        <p>Join thousands of creators using our Content Studio</p>
        <button className="studio-cta">Launch Content Studio</button>
      </div>
      </div>
    </div>
  );
};

export default ContentStudio;
