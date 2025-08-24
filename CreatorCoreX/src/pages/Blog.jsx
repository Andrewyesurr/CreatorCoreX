import React from 'react';
import './Blog.css';

const Blog = () => {
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
            <h1>CreatorCoreX Blog</h1>
            <p>Insights, tips, and stories from the creator collaboration community. Learn from experts and discover new ways to grow your creative career.</p>
          </div>
        </section>

      {/* Featured Article */}
      <section className="featured-article">
        <div className="container">
          <div className="featured-content">
            <div className="featured-image">
              <div className="image-placeholder">📝</div>
              <div className="featured-badge">FEATURED</div>
            </div>
            <div className="featured-text">
              <div className="article-meta">
                <span className="category">Creator Tips</span>
                <span className="date">January 15, 2025</span>
              </div>
              <h2>Building Your First Creator Team: A Complete Guide</h2>
              <p className="featured-excerpt">
                Discover the essential steps to building and managing a successful creator team. From finding the right collaborators to setting up effective workflows, this comprehensive guide covers everything you need to know.
              </p>
              <div className="featured-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <span className="author-name">Alex Rivera</span>
                  <span className="author-title">Senior Creator Success Manager</span>
                </div>
              </div>
              <button className="read-article-btn">Read Full Article</button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="blog-categories">
        <div className="container">
          <h2 className="section-title">Explore Categories</h2>
          <div className="categories-grid">
            <div className="category-card active">
              <div className="category-icon">💡</div>
              <h3>Creator Tips</h3>
              <p>Practical advice for growing your creative career</p>
              <span className="post-count">24 posts</span>
            </div>
            <div className="category-card">
              <div className="category-icon">🤝</div>
              <h3>Team Building</h3>
              <p>Learn how to build and manage effective creator teams</p>
              <span className="post-count">18 posts</span>
            </div>
            <div className="category-card">
              <div className="category-icon">🚀</div>
              <h3>Platform Updates</h3>
              <p>Latest features and improvements to CreatorCoreX</p>
              <span className="post-count">12 posts</span>
            </div>
            <div className="category-card">
              <div className="category-icon">📈</div>
              <h3>Growth Strategies</h3>
              <p>Scale your creative business with proven strategies</p>
              <span className="post-count">20 posts</span>
            </div>
            <div className="category-card">
              <div className="category-icon">🎯</div>
              <h3>Case Studies</h3>
              <p>Real success stories from our creator community</p>
              <span className="post-count">15 posts</span>
            </div>
            <div className="category-card">
              <div className="category-icon">🔧</div>
              <h3>Tools & Tech</h3>
              <p>Reviews and guides for creator tools and technology</p>
              <span className="post-count">22 posts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="recent-posts">
        <div className="container">
          <h2 className="section-title">Recent Posts</h2>
          <div className="posts-grid">
            <article className="blog-post">
              <div className="post-image">
                <div className="post-placeholder">🎨</div>
                <div className="post-category">Creator Tips</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">January 14, 2025</span>
                  <span className="read-time">5 min read</span>
                </div>
                <h3>5 Essential Skills Every Modern Creator Needs</h3>
                <p>From technical proficiency to business acumen, discover the key skills that separate successful creators from the rest in today's competitive landscape.</p>
                <div className="post-author">
                  <div className="author-avatar">👩‍💼</div>
                  <span className="author-name">Sarah Chen</span>
                </div>
              </div>
            </article>

            <article className="blog-post">
              <div className="post-image">
                <div className="post-placeholder">📊</div>
                <div className="post-category">Growth Strategies</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">January 13, 2025</span>
                  <span className="read-time">7 min read</span>
                </div>
                <h3>How to Price Your Creative Services: A Data-Driven Approach</h3>
                <p>Stop undervaluing your work. Learn how to use market research and value-based pricing to set rates that reflect your true worth.</p>
                <div className="post-author">
                  <div className="author-avatar">👨‍💻</div>
                  <span className="author-name">Marcus Johnson</span>
                </div>
              </div>
            </article>

            <article className="blog-post">
              <div className="post-image">
                <div className="post-placeholder">🤝</div>
                <div className="post-category">Team Building</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">January 12, 2025</span>
                  <span className="read-time">6 min read</span>
                </div>
                <h3>Remote Collaboration Best Practices for Creative Teams</h3>
                <p>Master the art of remote teamwork with proven strategies for communication, project management, and maintaining creative synergy across distances.</p>
                <div className="post-author">
                  <div className="author-avatar">👩‍🎨</div>
                  <span className="author-name">Emily Rodriguez</span>
                </div>
              </div>
            </article>

            <article className="blog-post">
              <div className="post-image">
                <div className="post-placeholder">🔧</div>
                <div className="post-category">Tools & Tech</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">January 11, 2025</span>
                  <span className="read-time">4 min read</span>
                </div>
                <h3>Top 10 AI Tools Revolutionizing Content Creation</h3>
                <p>Explore the latest AI-powered tools that are transforming how creators ideate, produce, and optimize their content in 2025.</p>
                <div className="post-author">
                  <div className="author-avatar">👨‍🔬</div>
                  <span className="author-name">David Kim</span>
                </div>
              </div>
            </article>

            <article className="blog-post">
              <div className="post-image">
                <div className="post-placeholder">📱</div>
                <div className="post-category">Platform Updates</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">January 10, 2025</span>
                  <span className="read-time">3 min read</span>
                </div>
                <h3>Introducing Smart Project Matching: Find Your Perfect Collaboration</h3>
                <p>Our new AI-powered matching system makes it easier than ever to find creators and projects that align with your skills and interests.</p>
                <div className="post-author">
                  <div className="author-avatar">👩‍💼</div>
                  <span className="author-name">Lisa Park</span>
                </div>
              </div>
            </article>

            <article className="blog-post">
              <div className="post-image">
                <div className="post-placeholder">🎯</div>
                <div className="post-category">Case Studies</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">January 9, 2025</span>
                  <span className="read-time">8 min read</span>
                </div>
                <h3>From Solo Creator to Team Leader: Maria's Journey to $100K</h3>
                <p>Follow Maria's inspiring journey from freelance designer to successful team leader, including the strategies and tools that made it possible.</p>
                <div className="post-author">
                  <div className="author-avatar">👨‍📝</div>
                  <span className="author-name">James Wilson</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Popular Posts */}
      <section className="popular-posts">
        <div className="container">
          <h2 className="section-title">Most Popular This Month</h2>
          <div className="popular-grid">
            <div className="popular-post">
              <div className="popular-rank">1</div>
              <div className="popular-content">
                <h4>The Complete Guide to Creator Contracts</h4>
                <p className="popular-meta">15,324 views • 12 min read</p>
              </div>
            </div>
            <div className="popular-post">
              <div className="popular-rank">2</div>
              <div className="popular-content">
                <h4>Building a Personal Brand as a Creator</h4>
                <p className="popular-meta">12,890 views • 9 min read</p>
              </div>
            </div>
            <div className="popular-post">
              <div className="popular-rank">3</div>
              <div className="popular-content">
                <h4>Negotiating Rates: What Every Creator Should Know</h4>
                <p className="popular-meta">11,567 views • 7 min read</p>
              </div>
            </div>
            <div className="popular-post">
              <div className="popular-rank">4</div>
              <div className="popular-content">
                <h4>Content Planning Strategies That Actually Work</h4>
                <p className="popular-meta">10,234 views • 11 min read</p>
              </div>
            </div>
            <div className="popular-post">
              <div className="popular-rank">5</div>
              <div className="popular-content">
                <h4>Managing Client Relationships Like a Pro</h4>
                <p className="popular-meta">9,876 views • 6 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Never Miss a Post</h2>
            <p>Get the latest creator insights and platform updates delivered straight to your inbox every week.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <p className="newsletter-note">Join 25,000+ creators in our community</p>
          </div>
        </div>
      </section>

      {/* Guest Writer CTA */}
      <section className="guest-writer">
        <div className="container">
          <div className="guest-writer-content">
            <h2>Share Your Story</h2>
            <p>Have insights or experiences to share with the creator community? We'd love to feature your story on our blog.</p>
            <div className="guest-writer-features">
              <div className="feature">
                <div className="feature-icon">✍️</div>
                <h4>Write for Us</h4>
                <p>Share your expertise and reach thousands of creators</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🌟</div>
                <h4>Get Featured</h4>
                <p>Build your personal brand and establish thought leadership</p>
              </div>
              <div className="feature">
                <div className="feature-icon">💰</div>
                <h4>Earn Rewards</h4>
                <p>Receive compensation for published articles</p>
              </div>
            </div>
            <button className="guest-writer-btn" onClick={scrollToTop}>Submit Your Pitch</button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Creator Journey?</h2>
          <p>Join thousands of creators who are building successful careers through collaboration.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={scrollToTop}>
              Join the Platform
            </button>
            <button className="btn-secondary" onClick={scrollToTop}>
              Explore More Posts
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Blog;
