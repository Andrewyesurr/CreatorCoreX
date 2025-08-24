import React from 'react';
import './RoleSelector.css';
import { useNavigate } from 'react-router-dom';

const RoleSelector = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    // Map 'team' to 'teamLeader' for consistency
    const mappedRole = role === 'team' ? 'teamLeader' : role;
    const validRoles = {
      creator: '/setup-creator',
      teamLeader: '/setup-team',
      individual: '/setup-individual'
    };

    const redirectPath = validRoles[mappedRole];
    if (redirectPath) {
      localStorage.setItem('selectedRole', mappedRole);
      navigate('/signup', { state: { nextStep: redirectPath } }); 
      // Store redirect info for after signup
    }
  };

  return (
    <div className="role-selector-page">
      <video autoPlay loop muted playsInline className="role-video-bg">
        <source src="/RichBusinessNetwork.mp4" type="video/mp4" />
      </video>

      <div className="role-overlay">
        <h1 className="role-title">Why Are You Here?</h1>
        <p className="role-subtitle">Choose the path that matches your creative journey</p>

        <div className="role-buttons">
          <button onClick={() => handleSelect('creator')} className="role-btn">
            I'm a Creator
          </button>
          <button onClick={() => handleSelect('team')} className="role-btn">
            I'm a Team Leader
          </button>
          <button onClick={() => handleSelect('individual')} className="role-btn">
            I'm an Individual
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
