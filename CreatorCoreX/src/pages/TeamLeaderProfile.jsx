import React from 'react';
import "./TeamLeaderProfile.css";

const TeamLeaderProfile = () => {
  return (
    <div className="team-leader-profile-container">
      <div className="team-leader-header">
        <img
          src="https://via.placeholder.com/120"
          alt="Team Profile"
          className="team-leader-pfp"
        />
        <div className="team-leader-info">
          <h2>@teamleader_user</h2>
          <p className="team-leader-tagline">Building the future with my squad 💼</p>
        </div>
      </div>

      <div className="team-leader-stats">
        <div className="stat-box">
          <h3>Team Members</h3>
          <p>5</p>
        </div>
        <div className="stat-box">
          <h3>Projects</h3>
          <p>12</p>
        </div>
        <div className="stat-box">
          <h3>Bookings</h3>
          <p>3</p>
        </div>
      </div>

      <div className="team-leader-bio">
        <h3>About Our Team</h3>
        <p>
          We're a dedicated creative team based in ATL, ready to tackle content creation,
          production, design, and everything in between. Let’s work.
        </p>
      </div>

      <hr className="divider-line" />

      <div className="team-leader-checklist">
        <h3>Boost Your Team’s Presence</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <img src="/photo-icon.svg" alt="Share Photos" />
            <h4>Upload Media</h4>
            <p>Showcase your team’s best work by uploading content.</p>
            <button>Upload Now</button>
          </div>
          <div className="checklist-item">
            <img src="/phone-icon.svg" alt="Add Contact Info" />
            <h4>Add Contact Info</h4>
            <p>Make it easy for creators to reach out and collaborate.</p>
            <button>Add Details</button>
          </div>
          <div className="checklist-item">
            <img src="/pfp-icon.svg" alt="Team Icon" />
            <h4>Set Profile Image</h4>
            <p>Add a profile image to represent your team’s brand.</p>
            <button>Set Image</button>
          </div>
        </div>
      </div>

      <div className="team-leader-portfolio">
        <h3>Team Media</h3>
        <div className="portfolio-grid">
          <img src="https://via.placeholder.com/150" alt="Work Sample 1" />
          <img src="https://via.placeholder.com/150" alt="Work Sample 2" />
          <img src="https://via.placeholder.com/150" alt="Work Sample 3" />
          <img src="https://via.placeholder.com/150" alt="Work Sample 4" />
        </div>
      </div>
    </div>
  );
};

export default TeamLeaderProfile;
