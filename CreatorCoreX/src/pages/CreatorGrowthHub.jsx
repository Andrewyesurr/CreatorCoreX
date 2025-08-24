// CreatorGrowthHub.jsx
import React from 'react';
import './CreatorGrowthHub.css';

const CreatorGrowthHub = () => {
  return (
    <div className="growthhub-wrapper">
      <video autoPlay muted loop playsInline className="growthhub-video">
        <source src="/Bomb2020.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="growthhub-overlay" />

      <div className="growthhub-content">
        <h1 className="hub-title">Creator Growth Hub</h1>
        <p className="hub-subtext">
          Tools, platforms, and resources handpicked by Creator Core X to help you grow as a creator, freelancer, or team leader.
        </p>
        <p className="hub-note">
          We’re currently exploring affiliate partnerships, but every tool we list is chosen for its actual value to creators, teams, and freelancers — not just because of sponsorships.
Creator Core X is built on transparency, and we’re committed to recommending only what truly helps. As we grow, we’re also exploring sustainable ways to support the platform.
        </p>

        <div className="hub-placeholder-box">
          <h2>🚧 More Coming Soon</h2>
          <p>We’re currently researching the best tools for creators, teams, and individuals.</p>
          <p>If you're a company interested in collaborating, contact us at <a href="mailto:support@creatorcorex.com">support@creatorcorex.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default CreatorGrowthHub;
