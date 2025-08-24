import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
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
            <h1>Success Stories</h1>
            <p>Real stories from creators and teams who transformed their careers and built thriving businesses on CreatorCoreX.</p>
          </div>
        </section>

      {/* Featured Success Story */}
      <section className="featured-story">
        <div className="container">
          <h2 className="section-title">Featured Success Story</h2>
          <div className="story-card featured">
            <div className="story-image">
              <div className="creator-avatar-large">TB</div>
              <div className="success-badge">Success Story</div>
            </div>
            <div className="story-content">
              <h3>From Freelancer to Agency Owner</h3>
              <p className="story-author">- Taylor Brown, Digital Marketing Agency</p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">$50K</span>
                  <span className="stat-label">Monthly Revenue</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2 Years</span>
                  <span className="stat-label">Growth Timeline</span>
                </div>
              </div>
              <blockquote className="story-quote">
                "I started as a solo freelancer doing social media management for small businesses. 
                CreatorCoreX helped me find amazing talent to collaborate with, and before I knew it, 
                I was building a full-service agency. Now we serve 50+ clients and have a team of 15 specialists."
              </blockquote>
              <div className="story-journey">
                <h4>Journey Highlights:</h4>
                <div className="journey-timeline">
                  <div className="journey-item">
                    <span className="timeline-date">Month 1-3</span>
                    <span className="timeline-event">Joined CreatorCoreX as solo freelancer</span>
                  </div>
                  <div className="journey-item">
                    <span className="timeline-date">Month 6</span>
                    <span className="timeline-event">First team collaboration, doubled income</span>
                  </div>
                  <div className="journey-item">
                    <span className="timeline-date">Month 12</span>
                    <span className="timeline-event">Hired first full-time team member</span>
                  </div>
                  <div className="journey-item">
                    <span className="timeline-date">Month 18</span>
                    <span className="timeline-event">Officially launched digital agency</span>
                  </div>
                  <div className="journey-item">
                    <span className="timeline-date">Month 24</span>
                    <span className="timeline-event">Reached $50K monthly revenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Categories */}
      <section className="success-categories">
        <div className="container">
          <h2 className="section-title">Success by Category</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">💼</div>
              <h3>Career Growth</h3>
              <p>Individuals who advanced their careers through collaborations</p>
              <div className="category-stat">85% career advancement</div>
            </div>
            <div className="category-card">
              <div className="category-icon">🚀</div>
              <h3>Business Launch</h3>
              <p>Creators who started their own successful businesses</p>
              <div className="category-stat">200+ new businesses</div>
            </div>
            <div className="category-card">
              <div className="category-icon">📈</div>
              <h3>Revenue Growth</h3>
              <p>Teams that significantly increased their income</p>
              <div className="category-stat">Average 300% increase</div>
            </div>
            <div className="category-card">
              <div className="category-icon">🤝</div>
              <h3>Partnerships</h3>
              <p>Long-term collaborations that became thriving partnerships</p>
              <div className="category-stat">500+ partnerships formed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="stories-grid">
        <div className="container">
          <h2 className="section-title">More Success Stories</h2>
          <div className="stories-container">
            <div className="story-card">
              <div className="story-header">
                <div className="creator-avatar">MR</div>
                <div className="story-category">Content Creator</div>
              </div>
              <h3>From 1K to 100K Followers</h3>
              <p className="story-author">- Maria Rodriguez, Lifestyle Blogger</p>
              <p className="story-excerpt">
                "Working with talented photographers and videographers from CreatorCoreX helped me create 
                professional content that resonated with my audience. My follower count grew from 1,000 to 
                over 100,000 in just 8 months!"
              </p>
              <div className="story-metrics">
                <div className="metric">
                  <span className="metric-value">100x</span>
                  <span className="metric-label">Growth</span>
                </div>
                <div className="metric">
                  <span className="metric-value">8 months</span>
                  <span className="metric-label">Timeline</span>
                </div>
              </div>
              <div className="story-tags">
                <span className="tag">Social Media</span>
                <span className="tag">Content</span>
                <span className="tag">Growth</span>
              </div>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="creator-avatar">JL</div>
                <div className="story-category">Entrepreneur</div>
              </div>
              <h3>Building a Tech Startup Team</h3>
              <p className="story-author">- James Liu, Tech Entrepreneur</p>
              <p className="story-excerpt">
                "I had an idea but needed a team. Through CreatorCoreX, I found incredible developers, 
                designers, and marketers who believed in my vision. We launched our app and secured 
                $500K in funding within a year!"
              </p>
              <div className="story-metrics">
                <div className="metric">
                  <span className="metric-value">$500K</span>
                  <span className="metric-label">Funding</span>
                </div>
                <div className="metric">
                  <span className="metric-value">12 months</span>
                  <span className="metric-label">Timeline</span>
                </div>
              </div>
              <div className="story-tags">
                <span className="tag">Startup</span>
                <span className="tag">Tech</span>
                <span className="tag">Funding</span>
              </div>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="creator-avatar">SK</div>
                <div className="story-category">Designer</div>
              </div>
              <h3>Freelancer to Design Studio</h3>
              <p className="story-author">- Sarah Kim, Design Studio Owner</p>
              <p className="story-excerpt">
                "Starting as a freelance graphic designer, I connected with other creatives and gradually 
                built a design studio. We now work with Fortune 500 companies and have a team of 12 
                talented designers and developers."
              </p>
              <div className="story-metrics">
                <div className="metric">
                  <span className="metric-value">12</span>
                  <span className="metric-label">Team Size</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Fortune 500</span>
                  <span className="metric-label">Clients</span>
                </div>
              </div>
              <div className="story-tags">
                <span className="tag">Design</span>
                <span className="tag">Studio</span>
                <span className="tag">Enterprise</span>
              </div>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="creator-avatar">DW</div>
                <div className="story-category">Educator</div>
              </div>
              <h3>Online Course Empire</h3>
              <p className="story-author">- David Wilson, Online Educator</p>
              <p className="story-excerpt">
                "I was teaching part-time when I discovered CreatorCoreX. Collaborating with video editors 
                and course designers helped me create professional online courses. I now have over 50,000 
                students and earn six figures annually."
              </p>
              <div className="story-metrics">
                <div className="metric">
                  <span className="metric-value">50K+</span>
                  <span className="metric-label">Students</span>
                </div>
                <div className="metric">
                  <span className="metric-value">6 Figures</span>
                  <span className="metric-label">Revenue</span>
                </div>
              </div>
              <div className="story-tags">
                <span className="tag">Education</span>
                <span className="tag">Courses</span>
                <span className="tag">Teaching</span>
              </div>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="creator-avatar">AG</div>
                <div className="story-category">Influencer</div>
              </div>
              <h3>Brand Partnership Success</h3>
              <p className="story-author">- Anna Garcia, Fashion Influencer</p>
              <p className="story-excerpt">
                "Working with professional photographers and brand strategists through CreatorCoreX elevated 
                my content quality. Major fashion brands started reaching out, and I now have exclusive 
                partnerships worth over $200K annually."
              </p>
              <div className="story-metrics">
                <div className="metric">
                  <span className="metric-value">$200K+</span>
                  <span className="metric-label">Partnerships</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Major Brands</span>
                  <span className="metric-label">Clients</span>
                </div>
              </div>
              <div className="story-tags">
                <span className="tag">Fashion</span>
                <span className="tag">Influencer</span>
                <span className="tag">Brands</span>
              </div>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="creator-avatar">RC</div>
                <div className="story-category">Musician</div>
              </div>
              <h3>Record Label Discovery</h3>
              <p className="story-author">- Ryan Chen, Independent Musician</p>
              <p className="story-excerpt">
                "I was struggling to produce quality music videos on my own. CreatorCoreX connected me with 
                amazing videographers and producers. One of our collaborative videos went viral and caught 
                the attention of a major record label!"
              </p>
              <div className="story-metrics">
                <div className="metric">
                  <span className="metric-value">Viral</span>
                  <span className="metric-label">Video</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Record Deal</span>
                  <span className="metric-label">Achievement</span>
                </div>
              </div>
              <div className="story-tags">
                <span className="tag">Music</span>
                <span className="tag">Video</span>
                <span className="tag">Record Deal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="success-stats">
        <div className="container">
          <h2 className="section-title">Platform Success Metrics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Success Stories Documented</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-number">$50M+</div>
              <div className="stat-label">Total Revenue Generated</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Businesses Launched</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-number">85%</div>
              <div className="stat-label">Users Report Career Growth</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🤝</div>
              <div className="stat-number">25,000+</div>
              <div className="stat-label">Successful Collaborations</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Average Success Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="share-story">
        <div className="container">
          <h2 className="section-title">Share Your Success Story</h2>
          <div className="share-content">
            <div className="share-info">
              <h3>Inspire Others with Your Journey</h3>
              <p>
                Have you achieved success through CreatorCoreX? We'd love to hear your story! 
                Share your journey and inspire other creators and teams to pursue their dreams.
              </p>
              <div className="share-benefits">
                <h4>Benefits of Sharing:</h4>
                <ul>
                  <li>Get featured on our platform</li>
                  <li>Inspire other creators</li>
                  <li>Receive recognition badge</li>
                  <li>Potential media coverage</li>
                  <li>Connect with similar success stories</li>
                </ul>
              </div>
            </div>
            <div className="share-form">
              <h3>Submit Your Story</h3>
              <form className="story-form">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Email Address" className="form-input" />
                <input type="text" placeholder="Your Role/Business" className="form-input" />
                <input type="text" placeholder="Success Category" className="form-input" />
                <textarea 
                  placeholder="Tell us your success story - how CreatorCoreX helped you achieve your goals..." 
                  className="form-textarea"
                ></textarea>
                <input type="url" placeholder="Portfolio/Website Link (optional)" className="form-input" />
                <button type="submit" className="submit-btn">Submit My Story</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Write Your Success Story?</h2>
          <p>Join thousands of creators and teams who have transformed their careers through meaningful collaborations.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToTop}>
              Start Your Journey
            </button>
            <button className="btn-secondary" onClick={scrollToTop}>
              Browse Opportunities
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default SuccessStories;
