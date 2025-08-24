import React, { useState } from 'react';
import './FeatureRequests.css';

const FeatureRequests = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const featureRequests = [
    {
      id: 1,
      title: "Advanced Team Analytics Dashboard",
      description: "A comprehensive analytics dashboard showing team performance metrics, collaboration patterns, and project success rates.",
      category: "analytics",
      status: "under-review",
      votes: 247,
      submittedBy: "Sarah_Designer",
      submittedDate: "Dec 15, 2024",
      comments: 23
    },
    {
      id: 2,
      title: "Mobile App with Offline Sync",
      description: "A dedicated mobile app that allows creators to work offline and sync their changes when connected to the internet.",
      category: "mobile",
      status: "planned",
      votes: 189,
      submittedBy: "TechMike",
      submittedDate: "Dec 20, 2024",
      comments: 31
    },
    {
      id: 3,
      title: "AI-Powered Creator Matching",
      description: "Use machine learning to suggest the best creator matches based on skills, work style, and past collaboration success.",
      category: "ai",
      status: "in-development",
      votes: 156,
      submittedBy: "DataNinja",
      submittedDate: "Jan 5, 2025",
      comments: 18
    },
    {
      id: 4,
      title: "Video Call Integration",
      description: "Built-in video calling functionality for team meetings and client presentations without leaving the platform.",
      category: "communication",
      status: "completed",
      votes: 134,
      submittedBy: "VideoProducer",
      submittedDate: "Nov 28, 2024",
      comments: 45
    },
    {
      id: 5,
      title: "Multi-Language Support",
      description: "Platform localization supporting major languages including Spanish, French, German, and Japanese.",
      category: "localization",
      status: "under-review",
      votes: 98,
      submittedBy: "GlobalCreator",
      submittedDate: "Jan 8, 2025",
      comments: 12
    }
  ];

  const filteredRequests = featureRequests.filter(request => 
    selectedCategory === 'all' || request.category === selectedCategory
  );

  const sortedRequests = [...filteredRequests].sort((a, b) => {
    if (sortBy === 'popular') return b.votes - a.votes;
    if (sortBy === 'recent') return new Date(b.submittedDate) - new Date(a.submittedDate);
    if (sortBy === 'comments') return b.comments - a.comments;
    return 0;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#4caf50';
      case 'in-development': return '#ff9800';
      case 'planned': return '#2196f3';
      case 'under-review': return '#9c27b0';
      default: return '#666';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-development': return 'In Development';
      case 'planned': return 'Planned';
      case 'under-review': return 'Under Review';
      default: return 'Open';
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Feature Requests</h1>
            <p>Help shape the future of CreatorCoreX! Vote on feature requests, submit your own ideas, and see what's coming next to our platform.</p>
          </div>
        </section>

        {/* Request Stats */}
        <section className="request-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">💡</div>
                <div className="stat-number">1,847</div>
              <div className="stat-label">Total Requests</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-number">234</div>
              <div className="stat-label">Completed Features</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">67</div>
              <div className="stat-label">In Development</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-number">15,432</div>
              <div className="stat-label">Total Votes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit New Request */}
      <section className="submit-request">
        <div className="container">
          <div className="submit-card">
            <div className="submit-content">
              <h2>Have a Feature Idea?</h2>
              <p>Share your innovative ideas to help us build the creator platform of the future. Every great feature starts with a community suggestion!</p>
              <button className="submit-btn" onClick={scrollToTop}>
                <span className="btn-icon">💡</span>
                Submit Feature Request
              </button>
            </div>
            <div className="submit-illustration">
              <div className="illustration-icon">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="requests-list">
        <div className="container">
          <div className="list-header">
            <h2 className="section-title">Community Feature Requests</h2>
            <div className="controls">
              <div className="filter-group">
                <label>Category:</label>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Categories</option>
                  <option value="analytics">Analytics</option>
                  <option value="mobile">Mobile</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="communication">Communication</option>
                  <option value="localization">Localization</option>
                </select>
              </div>
              <div className="sort-group">
                <label>Sort by:</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="popular">Most Popular</option>
                  <option value="recent">Most Recent</option>
                  <option value="comments">Most Discussed</option>
                </select>
              </div>
            </div>
          </div>

          <div className="requests-grid">
            {sortedRequests.map(request => (
              <div key={request.id} className="request-card">
                <div className="request-header">
                  <div className="request-status" style={{backgroundColor: getStatusColor(request.status)}}>
                    {getStatusText(request.status)}
                  </div>
                  <div className="request-votes">
                    <button className="vote-btn">
                      <span className="vote-icon">👍</span>
                      {request.votes}
                    </button>
                  </div>
                </div>
                
                <div className="request-content">
                  <h3>{request.title}</h3>
                  <p>{request.description}</p>
                  
                  <div className="request-meta">
                    <div className="meta-info">
                      <span className="submitted-by">By {request.submittedBy}</span>
                      <span className="submitted-date">{request.submittedDate}</span>
                    </div>
                    <div className="meta-stats">
                      <span className="comments-count">
                        <span className="comment-icon">💬</span>
                        {request.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="feature-categories">
        <div className="container">
          <h2 className="section-title">Popular Request Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">📊</div>
              <h3>Analytics & Insights</h3>
              <p>Advanced reporting, performance metrics, and data visualization tools</p>
              <div className="category-count">89 requests</div>
            </div>

            <div className="category-card">
              <div className="category-icon">📱</div>
              <h3>Mobile Experience</h3>
              <p>Mobile apps, responsive design, and offline functionality</p>
              <div className="category-count">67 requests</div>
            </div>

            <div className="category-card">
              <div className="category-icon">🤖</div>
              <h3>AI & Automation</h3>
              <p>Machine learning features, automated workflows, and smart suggestions</p>
              <div className="category-count">145 requests</div>
            </div>

            <div className="category-card">
              <div className="category-icon">💬</div>
              <h3>Communication</h3>
              <p>Chat improvements, video calls, and collaboration tools</p>
              <div className="category-count">78 requests</div>
            </div>

            <div className="category-card">
              <div className="category-icon">🎨</div>
              <h3>Creative Tools</h3>
              <p>Design utilities, content creation aids, and artistic features</p>
              <div className="category-count">112 requests</div>
            </div>

            <div className="category-card">
              <div className="category-icon">🔧</div>
              <h3>Platform Improvements</h3>
              <p>Performance, security, accessibility, and general enhancements</p>
              <div className="category-count">156 requests</div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="development-roadmap">
        <div className="container">
          <h2 className="section-title">Development Roadmap</h2>
          <div className="roadmap-timeline">
            <div className="roadmap-item">
              <div className="roadmap-quarter">Q1 2025</div>
              <div className="roadmap-content">
                <h4>AI-Powered Features</h4>
                <ul>
                  <li>Smart creator matching algorithm</li>
                  <li>Automated project recommendations</li>
                  <li>Content suggestion engine</li>
                </ul>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '65%'}}></div>
                </div>
                <span className="progress-text">65% Complete</span>
              </div>
            </div>

            <div className="roadmap-item">
              <div className="roadmap-quarter">Q2 2025</div>
              <div className="roadmap-content">
                <h4>Mobile Platform</h4>
                <ul>
                  <li>Native iOS and Android apps</li>
                  <li>Offline sync capabilities</li>
                  <li>Mobile-optimized workflows</li>
                </ul>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '30%'}}></div>
                </div>
                <span className="progress-text">30% Complete</span>
              </div>
            </div>

            <div className="roadmap-item">
              <div className="roadmap-quarter">Q3 2025</div>
              <div className="roadmap-content">
                <h4>Advanced Analytics</h4>
                <ul>
                  <li>Comprehensive dashboard redesign</li>
                  <li>Predictive analytics</li>
                  <li>Custom reporting tools</li>
                </ul>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '10%'}}></div>
                </div>
                <span className="progress-text">Planning Phase</span>
              </div>
            </div>

            <div className="roadmap-item">
              <div className="roadmap-quarter">Q4 2025</div>
              <div className="roadmap-content">
                <h4>Global Expansion</h4>
                <ul>
                  <li>Multi-language support</li>
                  <li>Regional payment methods</li>
                  <li>Local compliance features</li>
                </ul>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '5%'}}></div>
                </div>
                <span className="progress-text">Research Phase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How Feature Requests Work</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Submit Your Idea</h3>
                <p>Share your feature request with detailed description and use cases</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Community Voting</h3>
                <p>Other users vote and comment on your request to show support</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Team Review</h3>
                <p>Our product team evaluates popular requests for feasibility and impact</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Development</h3>
                <p>Approved features are added to our roadmap and development begins</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Release & Feedback</h3>
                <p>Features are released and we gather feedback for improvements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Your Ideas Drive Innovation</h2>
          <p>Join thousands of creators helping to build the future of creative collaboration.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToTop}>
              Submit Feature Request
            </button>
            <button className="btn-secondary" onClick={scrollToTop}>
              Browse All Requests
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default FeatureRequests;
