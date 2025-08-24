import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import FacebookIcon from '/src/assets/Icons/facebook.svg';
import InstagramIcon from '/src/assets/Icons/instagram.svg';
import ThreadsIcon from '/src/assets/Icons/threads.svg';
import XIcon from '/src/assets/Icons/x.svg';
import YouTubeIcon from '/src/assets/Icons/youtube.svg';

function Footer() {
  // Function to scroll to top smoothly when footer links are clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Creator Core</h3>
          <Link to="/about-creator-core" onClick={scrollToTop}>About CreatorCoreX</Link>
        </div>

        <div className="footer-column">
          <h3>For Creators</h3>
          <Link to="/explore?filter=individual" onClick={scrollToTop}>Look For Individuals</Link>
          <Link to="/explore?filter=team" onClick={scrollToTop}>Look For Teams</Link>
        </div>

        <div className="footer-column">
          <h3>For Teams</h3>
          <Link to="/manage-bookings" onClick={scrollToTop}>Manage Bookings</Link>
          <Link to="/promote-team" onClick={scrollToTop}>Promote Your Team</Link>
        </div>

        <div className="footer-column">
          <h3>Policies</h3>
          <Link to="/terms-of-service" onClick={scrollToTop}>Terms of Service</Link>
          <Link to="/privacy-policy" onClick={scrollToTop}>Privacy Policy</Link>
          <Link to="/community-guidelines" onClick={scrollToTop}>Community Guidelines</Link>
          <Link to="/data-request" onClick={scrollToTop}>Data Request</Link>
          <Link to="/cookie-policy" onClick={scrollToTop}>Cookie Policy</Link>
          <Link to="/dmca-policy" onClick={scrollToTop}>DMCA Policy</Link>
          <Link to="/disclaimers" onClick={scrollToTop}>Disclaimers Page</Link>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <Link to="/team-support" onClick={scrollToTop}>FAQ</Link>
          <Link to="/team-support" onClick={scrollToTop}>Contact Us</Link>
          <Link to="/report-problem" onClick={scrollToTop}>Report a Problem</Link>
        </div>
      </div>

      <div className="footer-socials">
        <img src={FacebookIcon} alt="Facebook" />
        <img src={InstagramIcon} alt="Instagram" />
        <img src={ThreadsIcon} alt="Threads" />
        <img src={XIcon} alt="X" />
        <img src={YouTubeIcon} alt="YouTube" />
      </div>

      <div className="footer-legal">
        <p>
          Creator Core is a networking platform connecting creators and local teams. We do not manage
          payments or guarantee collaboration outcomes. Users engage at their own risk.
        </p>
        <p>©2025 Creator Core. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
