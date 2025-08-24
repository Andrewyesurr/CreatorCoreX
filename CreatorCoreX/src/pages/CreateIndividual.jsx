import React from "react";
import { FiUserPlus, FiTool, FiLink } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import "./CreateIndividual.css";

const CreateIndividual = () => {
  return (
    <div className="create-individual-page">
      <video autoPlay loop muted playsInline className="individual-bg">
        <source src="/RichRichMan.mp4" type="video/mp4" />
      </video>

      <div className="individual-overlay">
        <section className="individual-hero">
          <h1 className="individual-title">👨‍💻 Build Your Individual Profile</h1>
          <p className="individual-subtitle">
            Offer your creative skills to local teams or creators. Whether you're a videographer, graphic designer, editor, or strategist — this is your space to shine.
          </p>
          <a href="/register-portfolio" className="individual-btn">
            <FiUserPlus className="icon" /> Create Your Profile Now
          </a>
        </section>

        <section className="individual-steps">
          <h2><FaBriefcase className="icon" /> How It Works</h2>
          <ul>
            <li><FiTool className="icon" /> Add your core skills and specialties</li>
            <li><FiLink className="icon" /> Upload or link your portfolio work</li>
            <li><FiUserPlus className="icon" /> Get discovered by creators and production teams</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CreateIndividual;
