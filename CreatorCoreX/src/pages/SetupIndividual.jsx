import React, { useState } from 'react';
import './SetupIndividual.css';

const SetupIndividual = () => {
  const [skills, setSkills] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ skills, portfolio, bio });
    // 🔐 Add Firebase logic later
  };

  return (
    <div className="setup-container">
      <video autoPlay loop muted playsInline className="setup-bg">
        <source src="/Grey.mp4" type="video/mp4" />
      </video>

      <div className="setup-content">
        <h1 className="setup-title">Get Started as an Individual</h1>
        <form className="setup-form" onSubmit={handleSubmit}>
          <label>Your Core Skills</label>
          <input
            type="text"
            placeholder="e.g. Lighting, Sound Design"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />

          <label>Portfolio Link</label>
          <input
            type="text"
            placeholder="Instagram, Behance, etc."
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
          />

          <label>Short Bio</label>
          <textarea
            placeholder="Tell people what you do best..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>

          <button type="submit">Save and Continue</button>
        </form>
      </div>
    </div>
  );
};

export default SetupIndividual;
