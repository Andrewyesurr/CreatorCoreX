import React, { useState } from 'react';
import './SetupTeam.css';

const SetupTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [category, setCategory] = useState('');
  const [teamGoals, setTeamGoals] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Team Setup Submitted:', { teamName, category, teamGoals });
    // 🔐 Add Firebase logic here
  };

  return (
    <div className="setup-container">
      <video autoPlay loop muted playsInline className="setup-bg">
        <source src="/Grey.mp4" type="video/mp4" />
      </video>

      <div className="setup-content">
        <h1 className="setup-title">Set Up Your Team</h1>
        <form className="setup-form" onSubmit={handleSubmit}>
          <label>Team Name</label>
          <input
            type="text"
            placeholder="Your Team's Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />

          <label>Category</label>
          <input
            type="text"
            placeholder="e.g. Videography, Editing"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <label>Team Goals</label>
          <textarea
            placeholder="What’s your team’s mission?"
            value={teamGoals}
            onChange={(e) => setTeamGoals(e.target.value)}
            required
          ></textarea>

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default SetupTeam;
