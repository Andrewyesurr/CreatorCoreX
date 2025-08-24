import React from "react";
import "./TeamHelp.css";

const TeamHelp = () => {
  return (
    <div className="team-help-page">
      <video
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/WaterBackground.mp4" type="video/mp4" />
      </video>

      <div className="team-help-wrapper">
        <section className="team-help-header">
          <h1>📚 Help for Team Owners</h1>
          <p>
            Whether you're just starting your creative team or want to level up,
            this page is your guide. Learn how to manage your team, get more bookings,
            and grow your business on Creator Core X.
          </p>
        </section>

        <section className="team-help-cta">
          <h3>📣 Ready to start your creative team?</h3>
          <a href="/start-team" className="cta-button">🚀 Start Your Team Now</a>
        </section>

        <section className="team-help-contact">
          <p>💬 Still need help? Email us at <a href="mailto:support@creatorcorex.com">support@creatorcorex.com</a></p>
        </section>
      </div>
    </div>
  );
};

export default TeamHelp;
