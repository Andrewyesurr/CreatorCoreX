// PromoteTeamHero.jsx
import React from 'react';
import './PromoteTeam.css';

const PromoteTeamHero = ({ onPromoteClick }) => {
  return (
    <div className="promote-hero-wrapper">
      <video autoPlay loop muted playsInline className="promo-video-bg">
        <source src="/PromoteTeam.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="promote-hero">
        <div className="promo-left">
          <h1>Get Booked. Get Seen.</h1>
          <p>
            Put your team in front of over <strong>2,000 creators</strong> actively searching
            for collaborators. Feature your skills, boost your bookings, and make your team unforgettable.
          </p>
          <button className="promote-button" onClick={onPromoteClick}>
            🔥 Promote Your Team Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default PromoteTeamHero;
