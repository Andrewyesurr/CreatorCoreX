import React from 'react';
import './AboutCreatorCore.css';

const AboutCreatorCore = () => {
  return (
    <div className="about-creator-core">

      {/* Hero Section */}
      <section className="acc-hero-section">
        <video autoPlay loop muted playsInline className="acc-video-bg">
          <source src="/Camera.mp4" type="video/mp4" />
        </video>
        <div className="acc-hero-overlay">
          <h1 className="acc-hero-title">ABOUT CREATOR CORE</h1>
          <p className="acc-hero-subtitle">Powering the Creative Revolution — Locally</p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="acc-mission-section">
        <h2 className="acc-section-heading">OUR MISSION</h2>
        <p className="acc-mission-text">
          Build the future of human connection and the technology that makes it possible.
        </p>
      </section>

      {/* Video Panel */}
      <section className="acc-split-video-section">
        <video autoPlay muted loop playsInline className="acc-split-video">
          <source src="/City.mp4" type="video/mp4" />
        </video>
        <div className="acc-split-overlay-text">
          Our products empower more than 3 billion people around the world to share ideas and offer support.
        </div>
      </section>

      {/* Our Story */}
      <section className="acc-story-section">
        <h2 className="acc-section-heading">Our Story</h2>
        <p className="acc-story-text">
          When Creator Core launched in 2025, it changed the way creatives build teams and collaborate.
          By empowering creators to find support around them, we are building the next era of teamwork and innovation—locally.
        </p>
      </section>

    </div>
  );
};

export default AboutCreatorCore;
