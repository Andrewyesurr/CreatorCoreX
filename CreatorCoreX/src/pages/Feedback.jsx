import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState('general');
  const [rating, setRating] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Share Your Feedback</h1>
            <p>Your voice matters! Help us improve CreatorCoreX by sharing your thoughts, suggestions, and experiences with our platform.</p>
          </div>
        </section>

        {/* Feedback Stats */}
      <section className="feedback-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">💬</div>
              <div className="stat-number">8,431</div>
              <div className="stat-label">Feedback Received</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">2,156</div>
              <div className="stat-label">Improvements Made</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">4.8/5</div>
              <div className="stat-label">Average Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-number">24h</div>
              <div className="stat-label">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="feedback-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Submit Your Feedback</h2>
              <p>We read every piece of feedback and use it to make CreatorCoreX better for everyone.</p>
            </div>

            <form className="feedback-form">
              {/* Feedback Type */}
              <div className="form-group">
                <label className="form-label">Feedback Category</label>
                <div className="category-buttons">
                  <button 
                    type="button" 
                    className={`category-btn ${feedbackType === 'general' ? 'active' : ''}`}
                    onClick={() => setFeedbackType('general')}
                  >
                    <span className="btn-icon">💬</span>
                    General
                  </button>
                  <button 
                    type="button" 
                    className={`category-btn ${feedbackType === 'bug' ? 'active' : ''}`}
                    onClick={() => setFeedbackType('bug')}
                  >
                    <span className="btn-icon">🐛</span>
                    Bug Report
                  </button>
                  <button 
                    type="button" 
                    className={`category-btn ${feedbackType === 'feature' ? 'active' : ''}`}
                    onClick={() => setFeedbackType('feature')}
                  >
                    <span className="btn-icon">💡</span>
                    Feature Request
                  </button>
                  <button 
                    type="button" 
                    className={`category-btn ${feedbackType === 'praise' ? 'active' : ''}`}
                    onClick={() => setFeedbackType('praise')}
                  >
                    <span className="btn-icon">👏</span>
                    Praise
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="form-group">
                <label className="form-label">Overall Experience Rating</label>
                <div className="rating-container">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star ${rating >= star ? 'active' : ''}`}
                      onClick={() => setRating(star)}
                    >
                      ⭐
                    </button>
                  ))}
                  <span className="rating-text">
                    {rating === 0 && "Click to rate"}
                    {rating === 1 && "Poor"}
                    {rating === 2 && "Fair"}
                    {rating === 3 && "Good"}
                    {rating === 4 && "Very Good"}
                    {rating === 5 && "Excellent"}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-input" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="your.email@example.com" />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="Brief summary of your feedback" />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Your Feedback</label>
                <textarea 
                  className="form-textarea" 
                  rows="6" 
                  placeholder="Please share your detailed feedback, suggestions, or report any issues you've encountered..."
                ></textarea>
              </div>

              {/* Priority Level */}
              <div className="form-group">
                <label className="form-label">Priority Level</label>
                <select className="form-select">
                  <option value="low">Low - General suggestion or minor issue</option>
                  <option value="medium">Medium - Improvement that would be helpful</option>
                  <option value="high">High - Important issue affecting my work</option>
                  <option value="urgent">Urgent - Critical issue preventing platform use</option>
                </select>
              </div>

              {/* File Upload */}
              <div className="form-group">
                <label className="form-label">Attachments (Optional)</label>
                <div className="file-upload">
                  <input type="file" id="file-upload" className="file-input" multiple />
                  <label htmlFor="file-upload" className="file-label">
                    <span className="upload-icon">📎</span>
                    Choose files or drag and drop
                  </label>
                  <p className="file-note">Upload screenshots, videos, or documents (max 10MB each)</p>
                </div>
              </div>

              {/* Follow-up */}
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkmark"></span>
                  I would like to receive follow-up communication about this feedback
                </label>
              </div>

              <button type="submit" className="submit-btn">
                <span className="btn-icon">📤</span>
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Feedback Types */}
      <section className="feedback-types">
        <div className="container">
          <h2 className="section-title">Types of Feedback We Value</h2>
          <div className="types-grid">
            <div className="type-card">
              <div className="type-icon">💡</div>
              <h3>Feature Suggestions</h3>
              <p>Ideas for new features or improvements to existing functionality that would enhance your experience.</p>
            </div>

            <div className="type-card">
              <div className="type-icon">🐛</div>
              <h3>Bug Reports</h3>
              <p>Technical issues, errors, or unexpected behavior you've encountered while using the platform.</p>
            </div>

            <div className="type-card">
              <div className="type-icon">🎨</div>
              <h3>Design Feedback</h3>
              <p>Suggestions about user interface, user experience, or visual design improvements.</p>
            </div>

            <div className="type-card">
              <div className="type-icon">⚡</div>
              <h3>Performance Issues</h3>
              <p>Reports about slow loading times, lag, or other performance-related concerns.</p>
            </div>

            <div className="type-card">
              <div className="type-icon">📱</div>
              <h3>Mobile Experience</h3>
              <p>Feedback specifically about using CreatorCoreX on mobile devices or tablets.</p>
            </div>

            <div className="type-card">
              <div className="type-icon">👏</div>
              <h3>Positive Feedback</h3>
              <p>Things you love about the platform that we should continue doing or expand upon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Improvements */}
      <section className="recent-improvements">
        <div className="container">
          <h2 className="section-title">Recent Improvements Based on Your Feedback</h2>
          <div className="improvements-timeline">
            <div className="timeline-item">
              <div className="timeline-date">Jan 2025</div>
              <div className="timeline-content">
                <h4>Enhanced Search Functionality</h4>
                <p>Added advanced filters and AI-powered recommendations based on user feedback about finding relevant creators.</p>
                <div className="feedback-count">Based on 247 feedback submissions</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Dec 2024</div>
              <div className="timeline-content">
                <h4>Mobile App Performance Boost</h4>
                <p>Improved loading times by 40% and fixed navigation issues reported by mobile users.</p>
                <div className="feedback-count">Based on 183 feedback submissions</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Nov 2024</div>
              <div className="timeline-content">
                <h4>Real-time Collaboration Tools</h4>
                <p>Launched live project collaboration features requested by our community.</p>
                <div className="feedback-count">Based on 156 feedback submissions</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Oct 2024</div>
              <div className="timeline-content">
                <h4>Dark Mode Theme</h4>
                <p>Added dark mode option after overwhelming user demand for better nighttime usability.</p>
                <div className="feedback-count">Based on 324 feedback submissions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternatives */}
      <section className="contact-alternatives">
        <div className="container">
          <h2 className="section-title">Other Ways to Reach Us</h2>
          <div className="alternatives-grid">
            <div className="alternative-card">
              <div className="alt-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Get immediate help with urgent issues</p>
              <button className="alt-btn" onClick={scrollToTop}>Start Chat</button>
            </div>

            <div className="alternative-card">
              <div className="alt-icon">📧</div>
              <h3>Email Support</h3>
              <p>Detailed support for complex issues</p>
              <button className="alt-btn" onClick={scrollToTop}>Send Email</button>
            </div>

            <div className="alternative-card">
              <div className="alt-icon">🗣️</div>
              <h3>Community Forums</h3>
              <p>Discuss with other users and get peer support</p>
              <button className="alt-btn" onClick={scrollToTop}>Visit Forums</button>
            </div>

            <div className="alternative-card">
              <div className="alt-icon">💬</div>
              <h3>Discord Community</h3>
              <p>Real-time chat with creators and staff</p>
              <button className="alt-btn" onClick={scrollToTop}>Join Discord</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Your Feedback Shapes Our Future</h2>
          <p>Every suggestion, report, and comment helps us build a better platform for creators worldwide.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToTop}>
              Submit Feedback
            </button>
            <button className="btn-secondary" onClick={scrollToTop}>
              View Our Roadmap
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Feedback;
