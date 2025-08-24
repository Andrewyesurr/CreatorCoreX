// StartTeam.jsx
import React from 'react';
import './StartTeam.css';

const StartTeam = () => {
  return (
    <div className="start-team-wrapper">
      {/* SECTION 1: Hero */}
      <section className="hero-section">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/WaterBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1>🚀 Start Your Creative Team</h1>
          <p>
            Build a powerhouse of talented creators and take on bigger,
            higher-paying projects.
          </p>
          <button className="cta-button">🎯 Create Your Team Now</button>
          <div className="sub-links">
            <a href="/manage-bookings">Manage Bookings</a> |{' '}
            <a href="/promote-team">Promote Your Team</a>
          </div>
        </div>
      </section>

      {/* SECTION 2: Step-by-Step Guide */}
      <section className="steps-section">
        <h2>🛠 How to Build Your Dream Team</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1️⃣</div>
            <h3>Define Your Vision</h3>
            <p>Outline your goals, specialties, and the types of projects you’ll take on.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2️⃣</div>
            <h3>Build Your Profile</h3>
            <p>Create a compelling team profile with your services, experience, and visuals.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3️⃣</div>
            <h3>Recruit Members</h3>
            <p>Invite talent you trust or find skilled creators right here on Creator Core X.</p>
          </div>

          <div className="step-card">
            <div className="step-number">4️⃣</div>
            <h3>Launch & Grow</h3>
            <p>Start taking bookings, build a reputation, and scale with confidence.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartTeam;
