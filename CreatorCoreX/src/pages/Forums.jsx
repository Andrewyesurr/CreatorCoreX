import React from 'react';
import './Forums.css';

const Forums = () => {
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
            <h1>Community Forums</h1>
            <p>Connect with fellow creators, share insights, ask questions, and build meaningful relationships in our vibrant community.</p>
          </div>
        </section>

        {/* Forum Stats */}
        <section className="forum-stats">
          <div className="container">
            <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">25,847</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">156,392</div>
              <div className="stat-label">Total Posts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8,431</div>
              <div className="stat-label">Discussions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1,247</div>
              <div className="stat-label">Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="forum-categories">
        <div className="container">
          <h2 className="section-title">Forum Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-header">
                <div className="category-icon">💬</div>
                <div className="category-info">
                  <h3>General Discussion</h3>
                  <p>Share ideas, introduce yourself, and chat about anything creator-related</p>
                </div>
              </div>
              <div className="category-stats">
                <span className="posts-count">2,847 posts</span>
                <span className="last-activity">Last post 5 minutes ago</span>
              </div>
            </div>

            <div className="category-card">
              <div className="category-header">
                <div className="category-icon">❓</div>
                <div className="category-info">
                  <h3>Questions & Answers</h3>
                  <p>Get help from the community and share your expertise</p>
                </div>
              </div>
              <div className="category-stats">
                <span className="posts-count">3,692 posts</span>
                <span className="last-activity">Last post 12 minutes ago</span>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">🤝</div>
              <div className="category-info">
                <h3>Collaboration Opportunities</h3>
                <p>Find partners, team members, and project collaborators</p>
              </div>
              <div className="category-stats">
                <span className="posts-count">1,834 posts</span>
                <span className="last-activity">Last post 23 minutes ago</span>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">💡</div>
              <div className="category-info">
                <h3>Tips & Tutorials</h3>
                <p>Share knowledge, best practices, and helpful resources</p>
              </div>
              <div className="category-stats">
                <span className="posts-count">4,156 posts</span>
                <span className="last-activity">Last post 1 hour ago</span>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">🎨</div>
              <div className="category-info">
                <h3>Showcase Your Work</h3>
                <p>Share your projects and get feedback from the community</p>
              </div>
              <div className="category-stats">
                <span className="posts-count">2,963 posts</span>
                <span className="last-activity">Last post 45 minutes ago</span>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">🔧</div>
              <div className="category-info">
                <h3>Technical Support</h3>
                <p>Get help with platform features and technical issues</p>
              </div>
              <div className="category-stats">
                <span className="posts-count">1,567 posts</span>
                <span className="last-activity">Last post 2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="recent-discussions">
        <div className="container">
          <h2 className="section-title">Recent Discussions</h2>
          <div className="discussions-list">
            <div className="discussion-item">
              <div className="discussion-avatar">👩‍🎨</div>
              <div className="discussion-content">
                <h4>Best practices for remote team collaboration?</h4>
                <p className="discussion-preview">I'm building a creative team with members across different time zones. What tools and strategies work best for...</p>
                <div className="discussion-meta">
                  <span className="author">Sarah Miller</span>
                  <span className="category">Tips & Tutorials</span>
                  <span className="time">23 minutes ago</span>
                  <span className="replies">12 replies</span>
                </div>
              </div>
              <div className="discussion-status">
                <div className="status-badge active">Active</div>
              </div>
            </div>

            <div className="discussion-item">
              <div className="discussion-avatar">👨‍💻</div>
              <div className="discussion-content">
                <h4>Looking for a video editor for YouTube series</h4>
                <p className="discussion-preview">I run a tech review channel and need a skilled video editor for a new series. Experience with motion graphics preferred...</p>
                <div className="discussion-meta">
                  <span className="author">Alex Chen</span>
                  <span className="category">Collaboration Opportunities</span>
                  <span className="time">1 hour ago</span>
                  <span className="replies">8 replies</span>
                </div>
              </div>
              <div className="discussion-status">
                <div className="status-badge hot">Hot</div>
              </div>
            </div>

            <div className="discussion-item">
              <div className="discussion-avatar">👩‍💼</div>
              <div className="discussion-content">
                <h4>Platform feature request: Bulk messaging</h4>
                <p className="discussion-preview">Would love to see a feature that allows sending messages to multiple team members at once. This would really help with...</p>
                <div className="discussion-meta">
                  <span className="author">Maria Rodriguez</span>
                  <span className="category">General Discussion</span>
                  <span className="time">2 hours ago</span>
                  <span className="replies">15 replies</span>
                </div>
              </div>
              <div className="discussion-status">
                <div className="status-badge trending">Trending</div>
              </div>
            </div>

            <div className="discussion-item">
              <div className="discussion-avatar">👨‍🎬</div>
              <div className="discussion-content">
                <h4>How to price video production services?</h4>
                <p className="discussion-preview">I'm transitioning from freelance to team-based work and struggling with pricing. What factors should I consider when...</p>
                <div className="discussion-meta">
                  <span className="author">David Kim</span>
                  <span className="category">Questions & Answers</span>
                  <span className="time">3 hours ago</span>
                  <span className="replies">6 replies</span>
                </div>
              </div>
              <div className="discussion-status">
                <div className="status-badge answered">Answered</div>
              </div>
            </div>

            <div className="discussion-item">
              <div className="discussion-avatar">👩‍🎨</div>
              <div className="discussion-content">
                <h4>Check out my latest brand design project!</h4>
                <p className="discussion-preview">Just finished a complete rebrand for a sustainable fashion startup. Would love to get feedback from fellow designers...</p>
                <div className="discussion-meta">
                  <span className="author">Emily Johnson</span>
                  <span className="category">Showcase Your Work</span>
                  <span className="time">4 hours ago</span>
                  <span className="replies">22 replies</span>
                </div>
              </div>
              <div className="discussion-status">
                <div className="status-badge popular">Popular</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="community-guidelines">
        <div className="container">
          <h2 className="section-title">Community Guidelines</h2>
          <div className="guidelines-grid">
            <div className="guideline-card">
              <div className="guideline-icon">🤝</div>
              <h4>Be Respectful</h4>
              <p>Treat all community members with respect and kindness. No harassment or discriminatory behavior.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">💡</div>
              <h4>Stay On Topic</h4>
              <p>Keep discussions relevant to the category and helpful to other community members.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">🔍</div>
              <h4>Search Before Posting</h4>
              <p>Check if your question has already been answered to avoid duplicate discussions.</p>
            </div>
            <div className="guideline-card">
              <div className="guideline-icon">🏷️</div>
              <h4>Use Clear Titles</h4>
              <p>Write descriptive titles that help others understand what your post is about.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Forum CTA */}
      <section className="join-forum">
        <div className="container">
          <div className="join-content">
            <h2>Ready to Join the Conversation?</h2>
            <p>Connect with thousands of creators, share your expertise, and grow your network in our supportive community.</p>
            <div className="join-features">
              <div className="feature">
                <span className="feature-icon">✨</span>
                <span>Get expert advice from experienced creators</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🚀</span>
                <span>Discover collaboration opportunities</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📚</span>
                <span>Access exclusive tutorials and resources</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🏆</span>
                <span>Build your reputation in the community</span>
              </div>
            </div>
            <div className="join-buttons">
              <button className="btn-primary" onClick={scrollToTop}>Join Forums</button>
              <button className="btn-secondary" onClick={scrollToTop}>Browse as Guest</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Start Your First Discussion</h2>
          <p>Have a question, idea, or want to share something with the community? Create your first post today!</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToTop}>
              Create New Post
            </button>
            <button className="btn-secondary" onClick={scrollToTop}>
              Explore Categories
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Forums;
