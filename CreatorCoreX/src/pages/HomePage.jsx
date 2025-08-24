import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-fullscreen">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/Better.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay" />

      <div className="homepage-content">
        <h1 className="fade-in">CREATORCOREX</h1>
        <p className="fade-in delay-1">Empowering Digital Creators</p>
        <div className="button-group">
          <Link to="/about-us" className="homepage-btn fade-in delay-2">Meet Our Founder</Link>
          <Link to="/explore" className="homepage-btn fade-in delay-3">Start Exploring</Link>
          <Link to="/role-selector" className="homepage-btn fade-in delay-4">Start Creating</Link>
          <Link to="/creator-growth-hub" className="homepage-btn fade-in delay-5">Creator Growth Hub</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
