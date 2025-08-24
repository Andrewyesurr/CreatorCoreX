import React, { useState } from 'react';
import './Troubleshooting.css';

const Troubleshooting = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItem, setExpandedItem] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const troubleshootingItems = [
    {
      id: 1,
      category: 'account',
      title: "Can't log into my account",
      problem: "I'm having trouble signing in to my CreatorCoreX account",
      solution: "Try these steps: 1) Check your email/password spelling, 2) Clear browser cache and cookies, 3) Try incognito/private browsing mode, 4) Reset your password using 'Forgot Password' link, 5) Check if your account is temporarily locked due to multiple failed attempts.",
      difficulty: 'easy'
    },
    {
      id: 2,
      category: 'projects',
      title: "Project files not uploading",
      problem: "Files get stuck at 0% or fail to upload completely",
      solution: "Common fixes: 1) Check file size (max 100MB per file), 2) Ensure stable internet connection, 3) Try uploading one file at a time, 4) Check supported file formats (JPG, PNG, PDF, MP4, etc.), 5) Disable browser extensions temporarily, 6) Try a different browser.",
      difficulty: 'medium'
    },
    {
      id: 3,
      category: 'communication',
      title: "Messages not being delivered",
      problem: "Team members aren't receiving my messages or I'm not getting notifications",
      solution: "Check these settings: 1) Verify notification preferences in Settings > Notifications, 2) Check email spam folder, 3) Ensure team members are online or have email notifications enabled, 4) Try refreshing the page or logging out/in, 5) Check if messages are marked as 'sent' in your message history.",
      difficulty: 'easy'
    },
    {
      id: 4,
      category: 'performance',
      title: "Platform running slowly",
      problem: "Pages load slowly or the platform feels laggy",
      solution: "Performance optimization: 1) Clear browser cache and cookies, 2) Close unnecessary browser tabs, 3) Check internet speed (minimum 5Mbps recommended), 4) Disable unnecessary browser extensions, 5) Try using Chrome or Firefox, 6) Restart your browser, 7) Check for browser updates.",
      difficulty: 'medium'
    },
    {
      id: 5,
      category: 'payments',
      title: "Payment processing issues",
      problem: "Payments are failing or showing as pending",
      solution: "Payment troubleshooting: 1) Verify card details and expiry date, 2) Check if card has international transactions enabled, 3) Ensure sufficient funds, 4) Try a different payment method, 5) Contact your bank if payments are being blocked, 6) Check for any payment holds on your account.",
      difficulty: 'hard'
    },
    {
      id: 6,
      category: 'account',
      title: "Profile information not saving",
      problem: "Changes to my profile keep reverting back",
      solution: "Profile update issues: 1) Ensure all required fields are filled, 2) Check image file sizes (max 5MB for profile photos), 3) Don't navigate away before clicking 'Save', 4) Try updating one section at a time, 5) Clear browser cache, 6) Check for character limits in bio/description fields.",
      difficulty: 'easy'
    },
    {
      id: 7,
      category: 'projects',
      title: "Collaboration invites not working",
      problem: "Team invitations aren't being sent or received",
      solution: "Invitation troubleshooting: 1) Verify email addresses are correct, 2) Check recipient's spam folder, 3) Ensure you have permission to invite members, 4) Try resending the invitation, 5) Copy invitation link manually if email fails, 6) Check if recipient already has an account.",
      difficulty: 'medium'
    },
    {
      id: 8,
      category: 'communication',
      title: "Video calls not connecting",
      problem: "Unable to start or join video calls with team members",
      solution: "Video call fixes: 1) Allow camera and microphone permissions in browser, 2) Check internet connection stability, 3) Close other video applications, 4) Try refreshing the page, 5) Use Chrome or Firefox browsers, 6) Test your camera/mic in browser settings first, 7) Restart browser if needed.",
      difficulty: 'hard'
    }
  ];

  const filteredItems = troubleshootingItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.problem.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return '#4caf50';
      case 'medium': return '#ff9800';
      case 'hard': return '#f44336';
      default: return '#666';
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Troubleshooting Guide</h1>
            <p>Find quick solutions to common issues and get back to creating. Our comprehensive troubleshooting guide covers the most frequent problems and their solutions.</p>
          </div>
        </section>

      {/* Search and Filter */}
      <section className="search-section">
        <div className="container">
          <div className="search-container">
            <div className="search-group">
              <input
                type="text"
                placeholder="Search for issues or solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>
            <div className="filter-group">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                <option value="all">All Categories</option>
                <option value="account">Account Issues</option>
                <option value="projects">Project Management</option>
                <option value="communication">Communication</option>
                <option value="performance">Performance</option>
                <option value="payments">Payments</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🔧</div>
              <div className="stat-number">150+</div>
              <div className="stat-label">Solutions Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">95%</div>
              <div className="stat-label">Issues Resolved</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-number">&lt; 5 min</div>
              <div className="stat-label">Average Fix Time</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="common-issues">
        <div className="container">
          <h2 className="section-title">Common Issues & Solutions</h2>
          <div className="issues-list">
            {filteredItems.map(item => (
              <div key={item.id} className="issue-card">
                <div className="issue-header" onClick={() => toggleExpanded(item.id)}>
                  <div className="issue-info">
                    <h3>{item.title}</h3>
                    <p className="issue-problem">{item.problem}</p>
                  </div>
                  <div className="issue-meta">
                    <div 
                      className="difficulty-badge"
                      style={{backgroundColor: getDifficultyColor(item.difficulty)}}
                    >
                      {item.difficulty}
                    </div>
                    <button className="expand-btn">
                      {expandedItem === item.id ? '−' : '+'}
                    </button>
                  </div>
                </div>
                {expandedItem === item.id && (
                  <div className="issue-solution">
                    <h4>Solution:</h4>
                    <p>{item.solution}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Quick Access */}
      <section className="category-access">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <div className="categories-grid">
            <div className="category-card" onClick={() => setSelectedCategory('account')}>
              <div className="category-icon">👤</div>
              <h3>Account Issues</h3>
              <p>Login problems, profile updates, password resets</p>
              <div className="issue-count">12 common issues</div>
            </div>

            <div className="category-card" onClick={() => setSelectedCategory('projects')}>
              <div className="category-icon">📁</div>
              <h3>Project Management</h3>
              <p>File uploads, collaboration, project sharing</p>
              <div className="issue-count">18 common issues</div>
            </div>

            <div className="category-card" onClick={() => setSelectedCategory('communication')}>
              <div className="category-icon">💬</div>
              <h3>Communication</h3>
              <p>Messages, notifications, video calls</p>
              <div className="issue-count">15 common issues</div>
            </div>

            <div className="category-card" onClick={() => setSelectedCategory('performance')}>
              <div className="category-icon">⚡</div>
              <h3>Performance</h3>
              <p>Slow loading, browser issues, connectivity</p>
              <div className="issue-count">10 common issues</div>
            </div>

            <div className="category-card" onClick={() => setSelectedCategory('payments')}>
              <div className="category-icon">💳</div>
              <h3>Payments</h3>
              <p>Billing, transactions, payment methods</p>
              <div className="issue-count">8 common issues</div>
            </div>

            <div className="category-card">
              <div className="category-icon">🔧</div>
              <h3>Technical Issues</h3>
              <p>API errors, integrations, advanced features</p>
              <div className="issue-count">20 common issues</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Help */}
      <section className="emergency-help">
        <div className="container">
          <div className="emergency-card">
            <div className="emergency-content">
              <h2>Still Need Help?</h2>
              <p>If you can't find a solution to your problem, our support team is here to help you get back on track quickly.</p>
              <div className="help-options">
                <div className="help-option">
                  <span className="option-icon">💬</span>
                  <div className="option-text">
                    <h4>Live Chat</h4>
                    <p>Get instant help from our support team</p>
                  </div>
                </div>
                <div className="help-option">
                  <span className="option-icon">📧</span>
                  <div className="option-text">
                    <h4>Email Support</h4>
                    <p>Send us detailed information about your issue</p>
                  </div>
                </div>
                <div className="help-option">
                  <span className="option-icon">📱</span>
                  <div className="option-text">
                    <h4>Community Forums</h4>
                    <p>Ask the community for help and solutions</p>
                  </div>
                </div>
              </div>
              <div className="emergency-buttons">
                <button className="contact-btn primary" onClick={scrollToTop}>Contact Support</button>
                <button className="contact-btn secondary" onClick={scrollToTop}>Visit Forums</button>
              </div>
            </div>
            <div className="emergency-illustration">
              <div className="illustration-icon">🆘</div>
            </div>
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="system-status">
        <div className="container">
          <h2 className="section-title">System Status</h2>
          <div className="status-grid">
            <div className="status-item">
              <div className="status-indicator green"></div>
              <div className="status-info">
                <h4>Platform Services</h4>
                <p>All systems operational</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-indicator green"></div>
              <div className="status-info">
                <h4>File Upload System</h4>
                <p>Working normally</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-indicator yellow"></div>
              <div className="status-info">
                <h4>Email Notifications</h4>
                <p>Minor delays (&lt; 5 minutes)</p>
              </div>
            </div>
            <div className="status-item">
              <div className="status-indicator green"></div>
              <div className="status-info">
                <h4>Payment Processing</h4>
                <p>All systems operational</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Can't Find What You're Looking For?</h2>
          <p>Our comprehensive help resources and support team are here to assist you with any issue.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToTop}>
              Contact Support
            </button>
            <button className="btn-secondary" onClick={scrollToTop}>
              Browse FAQ
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Troubleshooting;
