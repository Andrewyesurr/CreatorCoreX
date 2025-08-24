import React from 'react';
import './IndustryNews.css';

const IndustryNews = () => {
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
            <h1>Industry News</h1>
            <p>Stay ahead of the curve with the latest trends, insights, and developments in the creator economy and digital collaboration space.</p>
          </div>
        </section>

      {/* Breaking News */}
      <section className="breaking-news">
        <div className="container">
          <h2 className="section-title">Breaking News</h2>
          <div className="breaking-card">
            <div className="breaking-badge">BREAKING</div>
            <h3>CreatorCoreX Announces $50M Series B Funding Round</h3>
            <p className="news-date">Published 2 hours ago</p>
            <p className="news-excerpt">
              Leading investment firms back CreatorCoreX's mission to revolutionize creator collaboration, 
              with plans to expand globally and introduce AI-powered matching technology.
            </p>
            <button className="read-more-btn">Read Full Story</button>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="featured-stories">
        <div className="container">
          <h2 className="section-title">Featured Stories</h2>
          <div className="featured-grid">
            <div className="featured-article">
              <div className="article-image">
                <div className="article-placeholder">📊</div>
                <div className="article-category">Market Analysis</div>
              </div>
              <div className="article-content">
                <h3>Creator Economy Reaches $104 Billion Milestone</h3>
                <p className="article-meta">
                  <span className="author">By Sarah Johnson</span>
                  <span className="date">January 15, 2025</span>
                </p>
                <p className="article-excerpt">
                  New research reveals unprecedented growth in the creator economy, with collaborative platforms 
                  driving 40% of the total market value. Industry experts predict continued expansion...
                </p>
                <div className="article-tags">
                  <span className="tag">Creator Economy</span>
                  <span className="tag">Market Research</span>
                  <span className="tag">Growth</span>
                </div>
              </div>
            </div>

            <div className="featured-article">
              <div className="article-image">
                <div className="article-placeholder">🤖</div>
                <div className="article-category">Technology</div>
              </div>
              <div className="article-content">
                <h3>AI-Powered Creator Matching: The Future of Collaboration</h3>
                <p className="article-meta">
                  <span className="author">By Michael Chen</span>
                  <span className="date">January 12, 2025</span>
                </p>
                <p className="article-excerpt">
                  Artificial intelligence is transforming how creators find and work with each other. 
                  New algorithms can predict successful partnerships with 85% accuracy...
                </p>
                <div className="article-tags">
                  <span className="tag">AI</span>
                  <span className="tag">Technology</span>
                  <span className="tag">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="latest-news">
        <div className="container">
          <h2 className="section-title">Latest News</h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-header">
                <div className="news-category">Platform Updates</div>
                <div className="news-date">Jan 14, 2025</div>
              </div>
              <h3>New Collaboration Tools Released</h3>
              <p>Enhanced project management features and real-time collaboration tools now available for all users.</p>
              <div className="news-footer">
                <span className="read-time">3 min read</span>
                <button className="news-link">Read More</button>
              </div>
            </div>

            <div className="news-card">
              <div className="news-header">
                <div className="news-category">Industry Trends</div>
                <div className="news-date">Jan 13, 2025</div>
              </div>
              <h3>Remote Creator Teams See 200% Growth</h3>
              <p>Study reveals dramatic increase in distributed creative teams across multiple industries.</p>
              <div className="news-footer">
                <span className="read-time">5 min read</span>
                <button className="news-link">Read More</button>
              </div>
            </div>

            <div className="news-card">
              <div className="news-header">
                <div className="news-category">Success Stories</div>
                <div className="news-date">Jan 12, 2025</div>
              </div>
              <h3>How Small Teams Are Competing with Agencies</h3>
              <p>Independent creator collectives are winning major brand contracts through strategic partnerships.</p>
              <div className="news-footer">
                <span className="read-time">4 min read</span>
                <button className="news-link">Read More</button>
              </div>
            </div>

            <div className="news-card">
              <div className="news-header">
                <div className="news-category">Market Research</div>
                <div className="news-date">Jan 11, 2025</div>
              </div>
              <h3>Video Content Dominates Creator Collaborations</h3>
              <p>Analysis shows 70% of successful creator partnerships involve video production elements.</p>
              <div className="news-footer">
                <span className="read-time">6 min read</span>
                <button className="news-link">Read More</button>
              </div>
            </div>

            <div className="news-card">
              <div className="news-header">
                <div className="news-category">Education</div>
                <div className="news-date">Jan 10, 2025</div>
              </div>
              <h3>Universities Launch Creator Collaboration Programs</h3>
              <p>Major institutions introduce courses focused on digital creator partnerships and team building.</p>
              <div className="news-footer">
                <span className="read-time">5 min read</span>
                <button className="news-link">Read More</button>
              </div>
            </div>

            <div className="news-card">
              <div className="news-header">
                <div className="news-category">Policy</div>
                <div className="news-date">Jan 9, 2025</div>
              </div>
              <h3>New Creator Rights Legislation Proposed</h3>
              <p>Government introduces bill to protect creator intellectual property in collaborative projects.</p>
              <div className="news-footer">
                <span className="read-time">7 min read</span>
                <button className="news-link">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="trending-topics">
        <div className="container">
          <h2 className="section-title">Trending Topics</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <div className="topic-icon">🎬</div>
              <h3>Short-Form Video Boom</h3>
              <p>The rise of TikTok and Instagram Reels drives demand for video creators and editors.</p>
              <div className="topic-stats">
                <span>+150% mentions this week</span>
              </div>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🌍</div>
              <h3>Global Creator Networks</h3>
              <p>Cross-border collaborations become mainstream as platforms remove geographical barriers.</p>
              <div className="topic-stats">
                <span>+89% mentions this week</span>
              </div>
            </div>
            <div className="topic-card">
              <div className="topic-icon">💡</div>
              <h3>AI Creative Tools</h3>
              <p>Artificial intelligence transforms content creation workflows and collaboration processes.</p>
              <div className="topic-stats">
                <span>+120% mentions this week</span>
              </div>
            </div>
            <div className="topic-card">
              <div className="topic-icon">📱</div>
              <h3>Creator-Brand Partnerships</h3>
              <p>Brands shift budgets toward authentic creator collaborations over traditional advertising.</p>
              <div className="topic-stats">
                <span>+95% mentions this week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Reports */}
      <section className="industry-reports">
        <div className="container">
          <h2 className="section-title">Industry Reports</h2>
          <div className="reports-grid">
            <div className="report-card">
              <div className="report-header">
                <h3>Q4 2024 Creator Economy Report</h3>
                <div className="report-badge">FREE</div>
              </div>
              <p>Comprehensive analysis of creator economy trends, growth patterns, and future predictions.</p>
              <div className="report-details">
                <span className="report-pages">45 pages</span>
                <span className="report-date">Released: Jan 2025</span>
              </div>
              <button className="download-btn">Download Report</button>
            </div>

            <div className="report-card">
              <div className="report-header">
                <h3>Collaboration Platform Benchmark Study</h3>
                <div className="report-badge">PREMIUM</div>
              </div>
              <p>In-depth comparison of leading creator collaboration platforms and their effectiveness.</p>
              <div className="report-details">
                <span className="report-pages">62 pages</span>
                <span className="report-date">Released: Dec 2024</span>
              </div>
              <button className="download-btn premium">Access Report</button>
            </div>

            <div className="report-card">
              <div className="report-header">
                <h3>Future of Creator Teams Whitepaper</h3>
                <div className="report-badge">FREE</div>
              </div>
              <p>Expert insights on how creator teams will evolve over the next five years.</p>
              <div className="report-details">
                <span className="report-pages">28 pages</span>
                <span className="report-date">Released: Nov 2024</span>
              </div>
              <button className="download-btn">Download Report</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get the latest industry news and insights delivered to your inbox weekly.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <p className="newsletter-note">Join 50,000+ creators getting industry updates</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Join the Creator Revolution</h2>
          <p>Stay informed and be part of the growing creator economy transformation.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToTop}>
              Explore Platform
            </button>
            <button className="btn-secondary" onClick={scrollToTop}>
              Read More News
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default IndustryNews;
