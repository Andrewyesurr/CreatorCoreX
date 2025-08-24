import React from 'react';
import './Discord.css';

const Discord = () => {
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
            <div className="discord-logo">
              <div className="discord-icon">💬</div>
            </div>
            <h1>Join Our Discord Community</h1>
            <p>Connect with creators in real-time, participate in live discussions, and be part of our vibrant Discord server with over 15,000 active members.</p>
          </div>
        </section>

        {/* Server Stats */}
        <section className="server-stats">
          <div className="container">
            <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">15,247</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💬</div>
              <div className="stat-number">45</div>
              <div className="stat-label">Channels</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌍</div>
              <div className="stat-number">80+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Activity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Features */}
      <section className="discord-features">
        <div className="container">
          <h2 className="section-title">What's Inside Our Discord</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Creator Channels</h3>
              <p>Dedicated spaces for different creator types - designers, writers, video editors, musicians, and more.</p>
              <ul className="feature-list">
                <li>#graphic-design</li>
                <li>#video-production</li>
                <li>#content-writing</li>
                <li>#music-production</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Job & Opportunities</h3>
              <p>Real-time job postings, collaboration opportunities, and freelance gigs shared by community members.</p>
              <ul className="feature-list">
                <li>#job-board</li>
                <li>#collaboration-requests</li>
                <li>#freelance-opportunities</li>
                <li>#team-recruitment</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Learning & Growth</h3>
              <p>Share resources, tutorials, and get feedback on your work from experienced professionals.</p>
              <ul className="feature-list">
                <li>#resources-sharing</li>
                <li>#feedback-exchange</li>
                <li>#tutorials</li>
                <li>#skill-development</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎉</div>
              <h3>Community Events</h3>
              <p>Participate in regular events, workshops, challenges, and networking sessions.</p>
              <ul className="feature-list">
                <li>Weekly design challenges</li>
                <li>Live Q&A sessions</li>
                <li>Virtual networking</li>
                <li>Skill workshops</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Technical Support</h3>
              <p>Get instant help with platform features, technical issues, and account problems.</p>
              <ul className="feature-list">
                <li>#tech-support</li>
                <li>#platform-help</li>
                <li>#bug-reports</li>
                <li>#feature-requests</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>General Chat</h3>
              <p>Casual conversations, introductions, and building friendships with fellow creators.</p>
              <ul className="feature-list">
                <li>#general-chat</li>
                <li>#introductions</li>
                <li>#random</li>
                <li>#off-topic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live Activity */}
      <section className="live-activity">
        <div className="container">
          <h2 className="section-title">Live Activity</h2>
          <div className="activity-feed">
            <div className="activity-item">
              <div className="activity-avatar">🎨</div>
              <div className="activity-content">
                <div className="activity-header">
                  <span className="username">Sarah_Designer</span>
                  <span className="channel">#graphic-design</span>
                  <span className="timestamp">2 minutes ago</span>
                </div>
                <p>Just shared a new logo design for feedback! Would love to hear your thoughts 🎯</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-avatar">🎬</div>
              <div className="activity-content">
                <div className="activity-header">
                  <span className="username">VideoMike</span>
                  <span className="channel">#collaboration-requests</span>
                  <span className="timestamp">5 minutes ago</span>
                </div>
                <p>Looking for a motion graphics artist for a new project. DM me if interested!</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-avatar">📝</div>
              <div className="activity-content">
                <div className="activity-header">
                  <span className="username">ContentQueen</span>
                  <span className="channel">#resources-sharing</span>
                  <span className="timestamp">8 minutes ago</span>
                </div>
                <p>Found an amazing free stock photo site! Link in the resources channel 📸</p>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-avatar">🎵</div>
              <div className="activity-content">
                <div className="activity-header">
                  <span className="username">BeatMaker_Pro</span>
                  <span className="channel">#music-production</span>
                  <span className="timestamp">12 minutes ago</span>
                </div>
                <p>New beat drop! Check out my latest creation in voice chat 🔥</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Rules */}
      <section className="discord-rules">
        <div className="container">
          <h2 className="section-title">Community Guidelines</h2>
          <div className="rules-grid">
            <div className="rule-card">
              <div className="rule-number">1</div>
              <div className="rule-content">
                <h4>Be Respectful</h4>
                <p>Treat everyone with kindness and respect. No harassment, discrimination, or hate speech.</p>
              </div>
            </div>

            <div className="rule-card">
              <div className="rule-number">2</div>
              <div className="rule-content">
                <h4>Use Appropriate Channels</h4>
                <p>Keep discussions relevant to the channel topic. Use #general for casual chat.</p>
              </div>
            </div>

            <div className="rule-card">
              <div className="rule-number">3</div>
              <div className="rule-content">
                <h4>No Spam or Self-Promotion</h4>
                <p>Avoid excessive self-promotion. Share your work in designated showcase channels.</p>
              </div>
            </div>

            <div className="rule-card">
              <div className="rule-number">4</div>
              <div className="rule-content">
                <h4>Keep it Professional</h4>
                <p>This is a creative workspace. Keep content appropriate and professional.</p>
              </div>
            </div>

            <div className="rule-card">
              <div className="rule-number">5</div>
              <div className="rule-content">
                <h4>Help Others</h4>
                <p>Share knowledge, offer feedback, and support fellow community members.</p>
              </div>
            </div>

            <div className="rule-card">
              <div className="rule-number">6</div>
              <div className="rule-content">
                <h4>Report Issues</h4>
                <p>Contact moderators if you encounter any problems or rule violations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Discord CTA */}
      <section className="join-discord">
        <div className="container">
          <div className="join-content">
            <div className="discord-preview">
              <div className="preview-header">
                <div className="preview-icon">💬</div>
                <div className="preview-info">
                  <h3>CreatorCoreX Community</h3>
                  <p>15,247 members • 2,431 online</p>
                </div>
              </div>
              <div className="preview-channels">
                <div className="channel-category">
                  <span className="category-name">🎨 CREATIVE CHANNELS</span>
                  <div className="channel-list">
                    <div className="channel"># graphic-design</div>
                    <div className="channel"># video-production</div>
                    <div className="channel"># content-writing</div>
                  </div>
                </div>
                <div className="channel-category">
                  <span className="category-name">💼 OPPORTUNITIES</span>
                  <div className="channel-list">
                    <div className="channel"># job-board</div>
                    <div className="channel"># collaboration-requests</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="join-text">
              <h2>Ready to Join?</h2>
              <p>Connect with thousands of creators, share your work, find collaborators, and grow your creative career in our supportive Discord community.</p>
              <div className="join-benefits">
                <div className="benefit">
                  <span className="benefit-icon">⚡</span>
                  <span>Real-time communication</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🤝</span>
                  <span>Instant networking opportunities</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">📱</span>
                  <span>Mobile and desktop access</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🎯</span>
                  <span>Specialized creative channels</span>
                </div>
              </div>
              <button className="discord-join-btn" onClick={scrollToTop}>
                <span className="discord-btn-icon">💬</span>
                Join Discord Server
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Don't Have Discord Yet?</h2>
          <p>Discord is free and easy to use. Download the app and join our community today!</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToTop}>
              Download Discord
            </button>
            <button className="btn-secondary" onClick={scrollToTop}>
              Join in Browser
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Discord;
