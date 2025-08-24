import React from 'react';
import './CreatePortfolio.css';

const CreatePortfolio = () => {
  return (
    <div className="create-portfolio">
      <div className="page-header">
        <h1>Create Your Portfolio</h1>
        <p>Showcase your best work and attract potential clients and collaborators</p>
      </div>
      
      <div className="portfolio-builder">
        <div className="builder-sidebar">
          <div className="template-section">
            <h3>Choose a Template</h3>
            <div className="template-grid">
              <div className="template-card active">
                <div className="template-preview">
                  <div className="template-layout modern">
                    <div className="layout-header"></div>
                    <div className="layout-grid">
                      <div className="layout-item"></div>
                      <div className="layout-item"></div>
                      <div className="layout-item"></div>
                    </div>
                  </div>
                </div>
                <span className="template-name">Modern Grid</span>
              </div>
              
              <div className="template-card">
                <div className="template-preview">
                  <div className="template-layout minimal">
                    <div className="layout-header"></div>
                    <div className="layout-content">
                      <div className="layout-item wide"></div>
                      <div className="layout-item wide"></div>
                    </div>
                  </div>
                </div>
                <span className="template-name">Minimal</span>
              </div>
              
              <div className="template-card">
                <div className="template-preview">
                  <div className="template-layout creative">
                    <div className="layout-sidebar"></div>
                    <div className="layout-main">
                      <div className="layout-item"></div>
                      <div className="layout-item"></div>
                    </div>
                  </div>
                </div>
                <span className="template-name">Creative</span>
              </div>
            </div>
          </div>
          
          <div className="customization-section">
            <h3>Customize</h3>
            <div className="customization-options">
              <div className="option-group">
                <label>Color Theme</label>
                <div className="color-palette">
                  <div className="color-option active" style={{backgroundColor: '#1877f2'}}></div>
                  <div className="color-option" style={{backgroundColor: '#42b883'}}></div>
                  <div className="color-option" style={{backgroundColor: '#ff6b35'}}></div>
                  <div className="color-option" style={{backgroundColor: '#6c5ce7'}}></div>
                  <div className="color-option" style={{backgroundColor: '#fd79a8'}}></div>
                </div>
              </div>
              
              <div className="option-group">
                <label>Font Style</label>
                <select className="font-select">
                  <option>Poppins (Modern)</option>
                  <option>Roboto (Clean)</option>
                  <option>Playfair (Elegant)</option>
                  <option>Montserrat (Bold)</option>
                </select>
              </div>
              
              <div className="option-group">
                <label>Layout Style</label>
                <div className="layout-options">
                  <button className="layout-btn active">Grid</button>
                  <button className="layout-btn">Masonry</button>
                  <button className="layout-btn">Carousel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="builder-main">
          <div className="portfolio-preview">
            <div className="preview-header">
              <div className="preview-controls">
                <button className="preview-btn active">Desktop</button>
                <button className="preview-btn">Tablet</button>
                <button className="preview-btn">Mobile</button>
              </div>
              <button className="btn-preview-live">Preview Live</button>
            </div>
            
            <div className="preview-canvas">
              <div className="canvas-header">
                <div className="profile-section">
                  <div className="profile-image">
                    <div className="avatar-placeholder">
                      <span>📷</span>
                      <p>Add Photo</p>
                    </div>
                  </div>
                  <div className="profile-info">
                    <input type="text" placeholder="Your Name" className="name-input" />
                    <input type="text" placeholder="Your Title (e.g., Graphic Designer)" className="title-input" />
                    <textarea placeholder="Write a brief bio about yourself..." className="bio-input"></textarea>
                  </div>
                </div>
              </div>
              
              <div className="canvas-content">
                <div className="section-header">
                  <h3>Portfolio Projects</h3>
                  <button className="btn-add-project">+ Add Project</button>
                </div>
                
                <div className="projects-grid">
                  <div className="project-slot empty">
                    <div className="project-placeholder">
                      <span>🖼️</span>
                      <p>Add Project</p>
                      <button className="btn-upload">Upload Images</button>
                    </div>
                  </div>
                  
                  <div className="project-slot empty">
                    <div className="project-placeholder">
                      <span>🖼️</span>
                      <p>Add Project</p>
                      <button className="btn-upload">Upload Images</button>
                    </div>
                  </div>
                  
                  <div className="project-slot empty">
                    <div className="project-placeholder">
                      <span>🖼️</span>
                      <p>Add Project</p>
                      <button className="btn-upload">Upload Images</button>
                    </div>
                  </div>
                  
                  <div className="project-slot sample">
                    <div className="project-preview">
                      <div className="project-image">Sample Project</div>
                      <div className="project-info">
                        <h4>Brand Identity Design</h4>
                        <p>Modern logo and branding for tech startup</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="portfolio-actions">
        <div className="action-buttons">
          <button className="btn-save-draft">Save as Draft</button>
          <button className="btn-publish">Publish Portfolio</button>
        </div>
        
        <div className="portfolio-settings">
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Make portfolio public
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Allow downloads
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Enable contact form
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePortfolio;
