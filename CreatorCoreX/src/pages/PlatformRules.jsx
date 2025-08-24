import React, { useRef, useEffect } from "react";
import { FiShield, FiCheckCircle, FiAlertTriangle, FiMail } from "react-icons/fi";
import './PlatformRules.css';

const PlatformRules = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        video.pause();
      };
    }
  }, []);

  return (
    <div className="platform-rules-page">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="rules-bg-video"
      >
        <source src="/Mist.mp4" type="video/mp4" />
      </video>

      <div className="platform-rules-overlay">
        <section className="rules-header">
          <h1><FiShield className="icon" /> Platform Rules & Guidelines</h1>
          <p>
            CreatorCore X is built on respect, collaboration, and creativity. These rules exist to keep our community safe, professional, and inspiring.
          </p>
        </section>

        <section className="rules-section">
          <h2><FiCheckCircle className="icon" /> Core Rules</h2>
          <ul>
            <li>No harassment, hate speech, or discrimination of any kind.</li>
            <li>Be honest about your services, availability, and portfolio.</li>
            <li>Respect team boundaries and response times.</li>
            <li>Spamming, scamming, or impersonation will result in removal.</li>
            <li>Only share content you own or are licensed to use.</li>
          </ul>
        </section>

        <section className="rules-section">
          <h2><FiCheckCircle className="icon" /> Creative Guidelines</h2>
          <ul>
            <li>Credit your team and collaborators in all shared work.</li>
            <li>Keep your portfolio professional and aligned with our mission.</li>
            <li>Promote positivity, growth, and collaboration across all interactions.</li>
          </ul>
        </section>

        <section className="rules-section">
          <h2><FiAlertTriangle className="icon" /> Reporting & Enforcement</h2>
          <p>
            You can report violations via the platform or by email. Our team reviews every report and may take action including warnings, temporary suspension, or full removal from the platform depending on severity.
          </p>
        </section>

        <section className="rules-contact">
          <p><FiMail className="icon" /> Still have questions? Email us at <a href="mailto:support@creatorcorex.com">support@creatorcorex.com</a></p>
        </section>
      </div>
    </div>
  );
};

export default PlatformRules;
