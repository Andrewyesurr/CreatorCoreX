import React, { useState } from 'react';
import './VideoGuides.css';

const VideoGuides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const videoCategories = [
    { id: 'all', name: 'All Categories', count: 48 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'project-management', name: 'Project Management', count: 8 },
    { id: 'communication', name: 'Communication', count: 6 },
    { id: 'payments', name: 'Payments & Billing', count: 7 },
    { id: 'account-settings', name: 'Account Settings', count: 9 },
    { id: 'troubleshooting', name: 'Technical Issues', count: 6 }
  ];

  const videos = [
    {
      id: 1,
      title: 'Creating Your First Project',
      category: 'getting-started',
      difficulty: 'beginner',
      duration: '4:32',
      views: '12.5k',
      thumbnail: '🎬',
      description: 'Learn how to create your first project on CreatorCore and set up your requirements.',
      tags: ['setup', 'project', 'beginner']
    },
    {
      id: 2,
      title: 'Setting Up Your Creator Profile',
      category: 'getting-started',
      difficulty: 'beginner',
      duration: '6:15',
      views: '8.9k',
      thumbnail: '👤',
      description: 'Complete guide to optimizing your creator profile for maximum visibility.',
      tags: ['profile', 'optimization', 'visibility']
    },
    {
      id: 3,
      title: 'Managing Multiple Projects',
      category: 'project-management',
      difficulty: 'intermediate',
      duration: '8:41',
      views: '5.2k',
      thumbnail: '📊',
      description: 'Advanced techniques for juggling multiple projects and deadlines effectively.',
      tags: ['management', 'organization', 'efficiency']
    },
    {
      id: 4,
      title: 'Effective Client Communication',
      category: 'communication',
      difficulty: 'intermediate',
      duration: '7:23',
      views: '6.8k',
      thumbnail: '💬',
      description: 'Best practices for communicating with clients throughout the project lifecycle.',
      tags: ['communication', 'clients', 'professional']
    },
    {
      id: 5,
      title: 'Understanding Payment Methods',
      category: 'payments',
      difficulty: 'beginner',
      duration: '5:17',
      views: '9.1k',
      thumbnail: '💳',
      description: 'Complete overview of payment options, fees, and withdrawal processes.',
      tags: ['payments', 'fees', 'withdrawal']
    },
    {
      id: 6,
      title: 'Advanced Portfolio Showcase',
      category: 'account-settings',
      difficulty: 'advanced',
      duration: '12:08',
      views: '3.4k',
      thumbnail: '🎨',
      description: 'Create stunning portfolio presentations that convert viewers into clients.',
      tags: ['portfolio', 'showcase', 'conversion']
    },
    {
      id: 7,
      title: 'Troubleshooting Upload Issues',
      category: 'troubleshooting',
      difficulty: 'intermediate',
      duration: '6:52',
      views: '4.7k',
      thumbnail: '🔧',
      description: 'Step-by-step solutions for common file upload and sharing problems.',
      tags: ['upload', 'files', 'technical']
    },
    {
      id: 8,
      title: 'Setting Up Two-Factor Authentication',
      category: 'account-settings',
      difficulty: 'beginner',
      duration: '3:45',
      views: '7.6k',
      thumbnail: '🔐',
      description: 'Secure your account with our comprehensive 2FA setup guide.',
      tags: ['security', '2fa', 'account']
    },
    {
      id: 9,
      title: 'Building Your Dream Team',
      category: 'project-management',
      difficulty: 'advanced',
      duration: '15:23',
      views: '2.9k',
      thumbnail: '👥',
      description: 'Advanced strategies for recruiting and managing creative teams.',
      tags: ['team', 'management', 'leadership']
    },
    {
      id: 10,
      title: 'Negotiating Fair Rates',
      category: 'communication',
      difficulty: 'advanced',
      duration: '9:37',
      views: '8.2k',
      thumbnail: '💰',
      description: 'Master the art of rate negotiation and value communication.',
      tags: ['negotiation', 'rates', 'value']
    },
    {
      id: 11,
      title: 'Platform Navigation Basics',
      category: 'getting-started',
      difficulty: 'beginner',
      duration: '5:28',
      views: '11.3k',
      thumbnail: '🧭',
      description: 'Get familiar with the platform interface and key features.',
      tags: ['navigation', 'interface', 'basics']
    },
    {
      id: 12,
      title: 'Resolving Payment Disputes',
      category: 'payments',
      difficulty: 'intermediate',
      duration: '8:14',
      views: '3.8k',
      thumbnail: '⚖️',
      description: 'Handle payment conflicts professionally and protect your interests.',
      tags: ['disputes', 'resolution', 'protection']
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || video.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return '#4caf50';
      case 'intermediate': return '#ff9800';
      case 'advanced': return '#f44336';
      default: return '#666';
    }
  };

  const playlists = [
    {
      title: 'Complete Beginner Guide',
      videos: 8,
      duration: '45 min',
      description: 'Everything you need to start your creative journey',
      icon: '🌟'
    },
    {
      title: 'Advanced Creator Masterclass',
      videos: 12,
      duration: '2.5 hrs',
      description: 'Expert-level strategies for seasoned creators',
      icon: '🎓'
    },
    {
      title: 'Quick Tips & Tricks',
      videos: 15,
      duration: '1.2 hrs',
      description: 'Short videos for specific solutions',
      icon: '⚡'
    },
    {
      title: 'Team Management Series',
      videos: 6,
      duration: '85 min',
      description: 'Build and lead successful creative teams',
      icon: '👥'
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Video Guides &amp; Tutorials</h1>
              <p>
                Master CreatorCore with our comprehensive video library. From getting started 
                to advanced techniques, learn at your own pace with step-by-step tutorials.
              </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">48</span>
                <span className="stat-label">Video Tutorials</span>
              </div>
              <div className="stat">
                <span className="stat-number">5.2hrs</span>
                <span className="stat-label">Total Content</span>
              </div>
              <div className="stat">
                <span className="stat-number">Weekly</span>
                <span className="stat-label">New Videos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="search-section">
        <div className="container">
          <div className="search-container">
            <div className="search-group">
              <input
                type="text"
                className="search-input"
                placeholder="Search videos by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-btn">🔍</button>
            </div>
            <div className="filter-group">
              <select
                className="filter-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {videoCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <select
                className="filter-select"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div className="results-count">
            Showing {filteredVideos.length} of {videos.length} videos
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="playlists-section">
        <div className="container">
          <h2 className="section-title">Featured Playlists</h2>
          <div className="playlists-grid">
            {playlists.map((playlist, index) => (
              <div key={index} className="playlist-card">
                <div className="playlist-icon">{playlist.icon}</div>
                <div className="playlist-content">
                  <h3>{playlist.title}</h3>
                  <p>{playlist.description}</p>
                  <div className="playlist-meta">
                    <span>{playlist.videos} videos</span>
                    <span>•</span>
                    <span>{playlist.duration}</span>
                  </div>
                  <button className="watch-playlist-btn">Watch Playlist</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section className="video-library">
        <div className="container">
          <h2 className="section-title">Video Library</h2>
          <div className="videos-grid">
            {filteredVideos.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <div className="thumbnail-icon">{video.thumbnail}</div>
                  <div className="video-duration">{video.duration}</div>
                  <div className="play-overlay">
                    <div className="play-button">▶</div>
                  </div>
                </div>
                <div className="video-content">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                  <div className="video-meta">
                    <span 
                      className="difficulty-badge"
                      style={{ backgroundColor: getDifficultyColor(video.difficulty) }}
                    >
                      {video.difficulty}
                    </span>
                    <span className="video-views">{video.views} views</span>
                  </div>
                  <div className="video-tags">
                    {video.tags.map((tag, index) => (
                      <span key={index} className="tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredVideos.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No videos found</h3>
              <p>Try adjusting your search terms or filters to find what you&apos;re looking for.</p>
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Learning Path */}
      <section className="learning-path">
        <div className="container">
          <h2 className="section-title">Recommended Learning Path</h2>
          <div className="path-container">
            <div className="path-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Get Started</h3>
                <p>Platform navigation, profile setup, and first project creation</p>
                <div className="step-videos">3 videos • 16 min</div>
              </div>
            </div>
            <div className="path-connector">→</div>
            <div className="path-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Build Skills</h3>
                <p>Communication, project management, and professional practices</p>
                <div className="step-videos">8 videos • 52 min</div>
              </div>
            </div>
            <div className="path-connector">→</div>
            <div className="path-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Master Advanced</h3>
                <p>Team building, rate negotiation, and scaling your business</p>
                <div className="step-videos">6 videos • 78 min</div>
              </div>
            </div>
          </div>
          <div className="path-cta">
            <button className="start-learning-btn">Start Learning Path</button>
          </div>
        </div>
      </section>

      {/* Request Video */}
      <section className="request-section">
        <div className="container">
          <div className="request-card">
            <div className="request-content">
              <h2>Can&apos;t Find What You&apos;re Looking For?</h2>
              <p>
                Request a custom video tutorial and our team will create content 
                specifically for your needs. Help shape our video library!
              </p>
              <div className="request-stats">
                <div className="request-stat">
                  <span className="stat-number">127</span>
                  <span className="stat-label">Videos Requested</span>
                </div>
                <div className="request-stat">
                  <span className="stat-number">89%</span>
                  <span className="stat-label">Requests Fulfilled</span>
                </div>
                <div className="request-stat">
                  <span className="stat-number">3-5</span>
                  <span className="stat-label">Days Average</span>
                </div>
              </div>
            </div>
            <div className="request-form">
              <h3>Request a Video</h3>
              <form>
                <input
                  type="text"
                  placeholder="Video topic or question"
                  className="request-input"
                />
                <select className="request-select">
                  <option value="">Select category</option>
                  <option value="getting-started">Getting Started</option>
                  <option value="project-management">Project Management</option>
                  <option value="communication">Communication</option>
                  <option value="payments">Payments</option>
                  <option value="account-settings">Account Settings</option>
                  <option value="troubleshooting">Technical Issues</option>
                </select>
                <textarea
                  placeholder="Describe what you'd like to learn..."
                  className="request-textarea"
                  rows="4"
                ></textarea>
                <button type="submit" className="submit-request-btn">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Level Up Your Skills?</h2>
          <p>
            Join thousands of creators who have mastered the platform with our video guides. 
            Start watching today and unlock your creative potential.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Browse All Videos</button>
            <button className="btn-secondary">Join Community</button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default VideoGuides;
