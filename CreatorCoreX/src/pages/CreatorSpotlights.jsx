import React from 'react';
import './CreatorSpotlights.css';

const CreatorSpotlights = () => {
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
            <h1>Creator Spotlights</h1>
            <p>Discover amazing creators making waves in their industries. Get inspired by their journeys, learn from their experiences, and see what's possible.</p>
          </div>
        </section>

      {/* Featured Creator */}
      <section className="featured-creator">
        <div className="container">
          <h2 className="section-title">Featured Creator of the Month</h2>
          <div className="featured-card">
            <div className="featured-image">
              <div className="creator-avatar-large">AW</div>
              <div className="featured-badge">Featured</div>
            </div>
            <div className="featured-content">
              <h3>Alex Waters</h3>
              <p className="creator-type">Tech Content Creator & Educator</p>
              <div className="creator-stats">
                <div className="stat">
                  <span className="stat-number">2.5M</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Videos</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Collaborations</span>
                </div>
              </div>
              <p className="creator-description">
                Alex has revolutionized tech education on social media, breaking down complex programming concepts into digestible content. 
                From coding tutorials to career advice, Alex has built a community of over 2.5 million aspiring developers.
              </p>
              <div className="creator-achievements">
                <h4>Recent Achievements:</h4>
                <ul>
                  <li>🏆 Tech Creator of the Year 2024</li>
                  <li>📚 Published "Code Your Way to Success" book</li>
                  <li>🎯 Launched successful coding bootcamp</li>
                  <li>💡 Mentored 1000+ developers</li>
                </ul>
              </div>
              <button className="view-profile-btn">View Full Profile</button>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Categories */}
      <section className="creator-categories">
        <div className="container">
          <h2 className="section-title">Creators by Category</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">🎬</div>
              <h3>Video Creators</h3>
              <p>YouTubers, TikTokers, and video content specialists</p>
              <div className="category-stats">
                <span>150+ Creators</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">📝</div>
              <h3>Content Writers</h3>
              <p>Bloggers, journalists, and copywriting experts</p>
              <div className="category-stats">
                <span>200+ Creators</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">🎨</div>
              <h3>Visual Artists</h3>
              <p>Designers, illustrators, and digital artists</p>
              <div className="category-stats">
                <span>180+ Creators</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">🎵</div>
              <h3>Audio Creators</h3>
              <p>Podcasters, musicians, and audio producers</p>
              <div className="category-stats">
                <span>120+ Creators</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">📱</div>
              <h3>Social Media</h3>
              <p>Instagram, Twitter, and platform specialists</p>
              <div className="category-stats">
                <span>300+ Creators</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-icon">🎮</div>
              <h3>Gaming Creators</h3>
              <p>Streamers, game developers, and esports content</p>
              <div className="category-stats">
                <span>95+ Creators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Creators */}
      <section className="trending-creators">
        <div className="container">
          <h2 className="section-title">Trending Creators</h2>
          <div className="trending-grid">
            <div className="creator-card">
              <div className="creator-header">
                <div className="creator-avatar">MJ</div>
                <div className="trending-indicator">🔥 Trending</div>
              </div>
              <h3>Maya Johnson</h3>
              <p className="creator-niche">Fitness & Wellness</p>
              <p className="creator-bio">Transforming lives through accessible fitness routines and mental health awareness.</p>
              <div className="creator-metrics">
                <div className="metric">
                  <span className="metric-value">850K</span>
                  <span className="metric-label">Followers</span>
                </div>
                <div className="metric">
                  <span className="metric-value">4.9</span>
                  <span className="metric-label">Rating</span>
                </div>
              </div>
              <div className="creator-tags">
                <span className="tag">Fitness</span>
                <span className="tag">Wellness</span>
                <span className="tag">Motivation</span>
              </div>
            </div>

            <div className="creator-card">
              <div className="creator-header">
                <div className="creator-avatar">RC</div>
                <div className="trending-indicator">⚡ Rising</div>
              </div>
              <h3>Ryan Chen</h3>
              <p className="creator-niche">Finance & Investing</p>
              <p className="creator-bio">Making financial literacy accessible to young professionals and students.</p>
              <div className="creator-metrics">
                <div className="metric">
                  <span className="metric-value">420K</span>
                  <span className="metric-label">Followers</span>
                </div>
                <div className="metric">
                  <span className="metric-value">4.8</span>
                  <span className="metric-label">Rating</span>
                </div>
              </div>
              <div className="creator-tags">
                <span className="tag">Finance</span>
                <span className="tag">Investing</span>
                <span className="tag">Education</span>
              </div>
            </div>

            <div className="creator-card">
              <div className="creator-header">
                <div className="creator-avatar">SL</div>
                <div className="trending-indicator">🌟 Featured</div>
              </div>
              <h3>Sofia Lopez</h3>
              <p className="creator-niche">Sustainable Living</p>
              <p className="creator-bio">Inspiring eco-friendly lifestyle choices and environmental consciousness.</p>
              <div className="creator-metrics">
                <div className="metric">
                  <span className="metric-value">290K</span>
                  <span className="metric-label">Followers</span>
                </div>
                <div className="metric">
                  <span className="metric-value">4.9</span>
                  <span className="metric-label">Rating</span>
                </div>
              </div>
              <div className="creator-tags">
                <span className="tag">Sustainability</span>
                <span className="tag">Lifestyle</span>
                <span className="tag">Environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Achievements */}
      <section className="creator-achievements">
        <div className="container">
          <h2 className="section-title">Notable Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Top Creator Awards 2024</h3>
              <p>Recognizing outstanding creators across various categories</p>
              <div className="award-winners">
                <div className="winner">
                  <strong>Best Educational Content:</strong> Alex Waters
                </div>
                <div className="winner">
                  <strong>Most Innovative Creator:</strong> Maya Johnson
                </div>
                <div className="winner">
                  <strong>Rising Star:</strong> Ryan Chen
                </div>
                <div className="winner">
                  <strong>Community Impact:</strong> Sofia Lopez
                </div>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">📈</div>
              <h3>Growth Milestones</h3>
              <p>Celebrating creators who reached major follower milestones</p>
              <div className="milestones">
                <div className="milestone">
                  <span className="milestone-number">10</span>
                  <span className="milestone-text">Creators hit 1M+ followers</span>
                </div>
                <div className="milestone">
                  <span className="milestone-number">25</span>
                  <span className="milestone-text">Creators reached 500K+ followers</span>
                </div>
                <div className="milestone">
                  <span className="milestone-number">50</span>
                  <span className="milestone-text">Creators crossed 100K+ followers</span>
                </div>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🤝</div>
              <h3>Collaboration Highlights</h3>
              <p>Successful partnerships and collaborations</p>
              <div className="collaborations">
                <div className="collab-item">
                  <strong>Tech Education Series:</strong> 5 creators, 10M+ views
                </div>
                <div className="collab-item">
                  <strong>Wellness Challenge:</strong> 12 creators, 50K participants
                </div>
                <div className="collab-item">
                  <strong>Finance Workshop:</strong> 8 creators, 25K attendees
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Spotlight Application */}
      <section className="spotlight-application">
        <div className="container">
          <h2 className="section-title">Want to be Featured?</h2>
          <div className="application-content">
            <div className="application-info">
              <h3>Apply for Creator Spotlight</h3>
              <p>Share your story and get the recognition you deserve. Our spotlight program features outstanding creators making a difference in their communities.</p>
              <div className="requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Active creator for at least 6 months</li>
                  <li>Positive community impact</li>
                  <li>Consistent, quality content</li>
                  <li>Engaging with your audience</li>
                  <li>Unique story or approach</li>
                </ul>
              </div>
              <div className="benefits">
                <h4>Spotlight Benefits:</h4>
                <ul>
                  <li>Featured on our main page</li>
                  <li>Increased visibility and followers</li>
                  <li>Collaboration opportunities</li>
                  <li>Creator badge and certification</li>
                  <li>Priority support and resources</li>
                </ul>
              </div>
            </div>
            <div className="application-form">
              <h3>Quick Application</h3>
              <form className="spotlight-form">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Email Address" className="form-input" />
                <input type="text" placeholder="Content Category" className="form-input" />
                <input type="url" placeholder="Portfolio/Profile Link" className="form-input" />
                <textarea placeholder="Tell us your story and why you should be featured..." className="form-textarea"></textarea>
                <button type="submit" className="submit-btn">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Discover More Amazing Creators</h2>
          <p>Explore our full creator directory and find inspiration for your next collaboration.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToTop}>
              Browse All Creators
            </button>
            <button className="btn-secondary" onClick={scrollToTop}>
              Join Creator Community
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default CreatorSpotlights;
