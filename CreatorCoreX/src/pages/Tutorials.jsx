import React from 'react';
import './Tutorials.css';

const Tutorials = () => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <div className="page-header">
          <h1>Tutorials & Learning Center</h1>
          <p>Master CreatorCoreX with our comprehensive tutorials and guides</p>
        </div>
      
      <div className="tutorial-categories">
        <div className="category-tabs">
          <button className="category-tab active">Getting Started</button>
          <button className="category-tab">For Teams</button>
          <button className="category-tab">For Creators</button>
          <button className="category-tab">For Individuals</button>
          <button className="category-tab">Advanced Features</button>
        </div>
      </div>
      
      <div className="tutorial-content">
        <div className="quick-start">
          <h2>🚀 Quick Start Guide</h2>
          <div className="quick-start-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create Your Account</h3>
                <p>Sign up and complete your profile to get started on CreatorCoreX</p>
                <button className="btn-watch">📺 Watch Tutorial (3 min)</button>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Set Up Your Profile</h3>
                <p>Add your skills, portfolio, and preferences to attract the right opportunities</p>
                <button className="btn-watch">📺 Watch Tutorial (5 min)</button>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Start Exploring</h3>
                <p>Discover teams, creators, and projects that match your interests</p>
                <button className="btn-watch">📺 Watch Tutorial (4 min)</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tutorial-sections">
          <div className="tutorial-section">
            <h2>📚 Popular Tutorials</h2>
            <div className="tutorials-grid">
              <div className="tutorial-card">
                <div className="tutorial-thumbnail">
                  <div className="play-icon">▶️</div>
                  <div className="duration">8:45</div>
                </div>
                <div className="tutorial-info">
                  <h3>How to Create a Winning Portfolio</h3>
                  <p>Learn the best practices for showcasing your work and attracting clients</p>
                  <div className="tutorial-meta">
                    <span className="views">👁️ 12.5K views</span>
                    <span className="rating">⭐ 4.8</span>
                  </div>
                </div>
              </div>
              
              <div className="tutorial-card">
                <div className="tutorial-thumbnail">
                  <div className="play-icon">▶️</div>
                  <div className="duration">12:30</div>
                </div>
                <div className="tutorial-info">
                  <h3>Building and Managing Your Creative Team</h3>
                  <p>Step-by-step guide to forming successful creative teams</p>
                  <div className="tutorial-meta">
                    <span className="views">👁️ 8.2K views</span>
                    <span className="rating">⭐ 4.9</span>
                  </div>
                </div>
              </div>
              
              <div className="tutorial-card">
                <div className="tutorial-thumbnail">
                  <div className="play-icon">▶️</div>
                  <div className="duration">6:15</div>
                </div>
                <div className="tutorial-info">
                  <h3>Freelancer's Guide to CreatorCoreX</h3>
                  <p>Essential tips for independent creators and freelancers</p>
                  <div className="tutorial-meta">
                    <span className="views">👁️ 15.1K views</span>
                    <span className="rating">⭐ 4.7</span>
                  </div>
                </div>
              </div>
              
              <div className="tutorial-card">
                <div className="tutorial-thumbnail">
                  <div className="play-icon">▶️</div>
                  <div className="duration">10:20</div>
                </div>
                <div className="tutorial-info">
                  <h3>Using Content Studio Effectively</h3>
                  <p>Master our built-in content creation and management tools</p>
                  <div className="tutorial-meta">
                    <span className="views">👁️ 9.8K views</span>
                    <span className="rating">⭐ 4.6</span>
                  </div>
                </div>
              </div>
              
              <div className="tutorial-card">
                <div className="tutorial-thumbnail">
                  <div className="play-icon">▶️</div>
                  <div className="duration">7:55</div>
                </div>
                <div className="tutorial-info">
                  <h3>Collaboration Best Practices</h3>
                  <p>Learn how to work effectively with remote teams and clients</p>
                  <div className="tutorial-meta">
                    <span className="views">👁️ 11.3K views</span>
                    <span className="rating">⭐ 4.8</span>
                  </div>
                </div>
              </div>
              
              <div className="tutorial-card">
                <div className="tutorial-thumbnail">
                  <div className="play-icon">▶️</div>
                  <div className="duration">14:12</div>
                </div>
                <div className="tutorial-info">
                  <h3>Advanced Platform Features</h3>
                  <p>Unlock the full potential of CreatorCoreX with advanced features</p>
                  <div className="tutorial-meta">
                    <span className="views">👁️ 6.7K views</span>
                    <span className="rating">⭐ 4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tutorial-section">
            <h2>📖 Written Guides</h2>
            <div className="guides-list">
              <div className="guide-item">
                <div className="guide-icon">📝</div>
                <div className="guide-content">
                  <h3>Complete Beginner's Guide to CreatorCoreX</h3>
                  <p>Everything you need to know to get started, from setup to your first project</p>
                  <div className="guide-meta">
                    <span>📖 15 min read</span>
                    <span>🔄 Updated 2 days ago</span>
                  </div>
                </div>
                <button className="btn-read">Read Guide</button>
              </div>
              
              <div className="guide-item">
                <div className="guide-icon">🎯</div>
                <div className="guide-content">
                  <h3>Finding Your Ideal Team Members</h3>
                  <p>Strategies for recruiting and vetting creative professionals</p>
                  <div className="guide-meta">
                    <span>📖 8 min read</span>
                    <span>🔄 Updated 1 week ago</span>
                  </div>
                </div>
                <button className="btn-read">Read Guide</button>
              </div>
              
              <div className="guide-item">
                <div className="guide-icon">💰</div>
                <div className="guide-content">
                  <h3>Pricing Your Creative Services</h3>
                  <p>How to set competitive rates and negotiate fair compensation</p>
                  <div className="guide-meta">
                    <span>📖 12 min read</span>
                    <span>🔄 Updated 3 days ago</span>
                  </div>
                </div>
                <button className="btn-read">Read Guide</button>
              </div>
              
              <div className="guide-item">
                <div className="guide-icon">🚀</div>
                <div className="guide-content">
                  <h3>Growing Your Creative Business</h3>
                  <p>Scale your operations and build a sustainable creative enterprise</p>
                  <div className="guide-meta">
                    <span>📖 20 min read</span>
                    <span>🔄 Updated 5 days ago</span>
                  </div>
                </div>
                <button className="btn-read">Read Guide</button>
              </div>
            </div>
          </div>
          
          <div className="tutorial-section">
            <h2>❓ Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-question">How do I update my portfolio?</div>
                <div className="faq-answer">Go to your profile, click "Edit Portfolio", and you can add, remove, or rearrange your projects.</div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">What's the difference between teams and individual creators?</div>
                <div className="faq-answer">Teams are groups of creators working together, while individual creators work independently. Both can collaborate on projects.</div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">How do payments work on CreatorCoreX?</div>
                <div className="faq-answer">We use secure payment processing with milestone-based payments. Funds are held in escrow until project completion.</div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">Can I work with international clients?</div>
                <div className="faq-answer">Yes! CreatorCoreX supports global collaborations with multi-currency support and international payment methods.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Tutorials;
