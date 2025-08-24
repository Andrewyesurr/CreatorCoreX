import React from 'react';
import './OpportunitiesBoard.css';

const OpportunitiesBoard = () => {
  return (
    <div className="opportunities-board">
      <div className="page-header">
        <h1>Opportunities Board</h1>
        <p>Discover the latest job postings, freelance gigs, and collaboration opportunities</p>
      </div>
      
      <div className="filter-section">
        <div className="filter-tabs">
          <button className="filter-tab active">All Opportunities</button>
          <button className="filter-tab">Full-time Jobs</button>
          <button className="filter-tab">Freelance Gigs</button>
          <button className="filter-tab">Collaborations</button>
          <button className="filter-tab">Contests</button>
        </div>
        
        <div className="filter-controls">
          <select className="filter-select">
            <option>All Categories</option>
            <option>Design</option>
            <option>Development</option>
            <option>Marketing</option>
            <option>Writing</option>
            <option>Video/Audio</option>
          </select>
          
          <select className="filter-select">
            <option>Experience Level</option>
            <option>Entry Level</option>
            <option>Mid Level</option>
            <option>Senior Level</option>
          </select>
          
          <select className="filter-select">
            <option>Remote Options</option>
            <option>Remote Only</option>
            <option>Hybrid</option>
            <option>On-site</option>
          </select>
        </div>
      </div>
      
      <div className="opportunities-list">
        <div className="opportunity-card featured">
          <div className="opportunity-header">
            <div className="company-info">
              <div className="company-logo">TI</div>
              <div className="company-details">
                <h3>Senior UI/UX Designer</h3>
                <p className="company-name">TechInnovate Inc.</p>
                <div className="opportunity-meta">
                  <span className="location">📍 Remote</span>
                  <span className="type">💼 Full-time</span>
                  <span className="posted">🕒 2 hours ago</span>
                </div>
              </div>
            </div>
            <div className="salary-range">
              <span className="salary">$80K - $120K</span>
              <span className="period">/year</span>
            </div>
          </div>
          
          <div className="opportunity-description">
            <p>We're looking for a talented UI/UX Designer to join our growing product team. You'll be responsible for designing user experiences for our SaaS platform used by over 100,000 users worldwide.</p>
          </div>
          
          <div className="opportunity-skills">
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Adobe Creative Suite</span>
            <span className="skill-tag">Prototyping</span>
            <span className="skill-tag">User Research</span>
          </div>
          
          <div className="opportunity-actions">
            <button className="btn-apply-now">Apply Now</button>
            <button className="btn-save">💾 Save</button>
            <button className="btn-share">🔗 Share</button>
          </div>
        </div>
        
        <div className="opportunity-card">
          <div className="opportunity-header">
            <div className="company-info">
              <div className="company-logo">CM</div>
              <div className="company-details">
                <h3>Freelance Content Writer</h3>
                <p className="company-name">Creative Marketing Co.</p>
                <div className="opportunity-meta">
                  <span className="location">📍 Remote</span>
                  <span className="type">✍️ Freelance</span>
                  <span className="posted">🕒 1 day ago</span>
                </div>
              </div>
            </div>
            <div className="salary-range">
              <span className="salary">$50 - $75</span>
              <span className="period">/hour</span>
            </div>
          </div>
          
          <div className="opportunity-description">
            <p>Looking for an experienced content writer to create blog posts, social media content, and marketing copy for our B2B clients. 3-month project with potential for extension.</p>
          </div>
          
          <div className="opportunity-skills">
            <span className="skill-tag">Content Writing</span>
            <span className="skill-tag">SEO</span>
            <span className="skill-tag">Social Media</span>
            <span className="skill-tag">B2B Marketing</span>
          </div>
          
          <div className="opportunity-actions">
            <button className="btn-apply-now">Apply Now</button>
            <button className="btn-save">💾 Save</button>
            <button className="btn-share">🔗 Share</button>
          </div>
        </div>
        
        <div className="opportunity-card">
          <div className="opportunity-header">
            <div className="company-info">
              <div className="company-logo">IS</div>
              <div className="company-details">
                <h3>Video Editor Collaboration</h3>
                <p className="company-name">Indie Studios</p>
                <div className="opportunity-meta">
                  <span className="location">📍 Los Angeles, CA</span>
                  <span className="type">🤝 Collaboration</span>
                  <span className="posted">🕒 3 days ago</span>
                </div>
              </div>
            </div>
            <div className="salary-range">
              <span className="salary">Revenue</span>
              <span className="period">Share</span>
            </div>
          </div>
          
          <div className="opportunity-description">
            <p>Join our indie film project as a video editor. We're creating a short documentary and looking for someone passionate about storytelling. Great portfolio piece opportunity!</p>
          </div>
          
          <div className="opportunity-skills">
            <span className="skill-tag">Video Editing</span>
            <span className="skill-tag">Final Cut Pro</span>
            <span className="skill-tag">Color Grading</span>
            <span className="skill-tag">Storytelling</span>
          </div>
          
          <div className="opportunity-actions">
            <button className="btn-apply-now">Apply Now</button>
            <button className="btn-save">💾 Save</button>
            <button className="btn-share">🔗 Share</button>
          </div>
        </div>
        
        <div className="opportunity-card contest">
          <div className="contest-badge">🏆 Design Contest</div>
          <div className="opportunity-header">
            <div className="company-info">
              <div className="company-logo">GB</div>
              <div className="company-details">
                <h3>Logo Design Contest</h3>
                <p className="company-name">Green Buzz Cafe</p>
                <div className="opportunity-meta">
                  <span className="location">📍 Global</span>
                  <span className="type">🏆 Contest</span>
                  <span className="posted">🕒 5 days ago</span>
                </div>
              </div>
            </div>
            <div className="salary-range">
              <span className="salary">$2,500</span>
              <span className="period">Prize</span>
            </div>
          </div>
          
          <div className="opportunity-description">
            <p>Design a modern, eco-friendly logo for our new sustainable coffee shop chain. We're looking for something fresh that represents our commitment to the environment.</p>
          </div>
          
          <div className="contest-details">
            <div className="contest-info">
              <span>⏰ 15 days left</span>
              <span>👥 47 entries</span>
              <span>🎯 Guaranteed prize</span>
            </div>
          </div>
          
          <div className="opportunity-actions">
            <button className="btn-apply-now">Enter Contest</button>
            <button className="btn-save">💾 Save</button>
            <button className="btn-share">🔗 Share</button>
          </div>
        </div>
      </div>
      
      <div className="load-more">
        <button className="btn-load-more">Load More Opportunities</button>
      </div>
    </div>
  );
};

export default OpportunitiesBoard;
