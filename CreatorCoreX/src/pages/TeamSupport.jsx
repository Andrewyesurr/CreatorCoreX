import React, { useRef, useState, useEffect } from "react";
import "./TeamSupport.css";
import { FaUser, FaEnvelope, FaPaperPlane, FaBug } from "react-icons/fa";
import { MdSubject, MdMessage } from "react-icons/md";

const TeamSupport = () => {
  const videoRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.onended = () => video.pause();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="support-page">
      <video ref={videoRef} className="robot-bg" autoPlay muted loop playsInline>
        <source src="/Robotbackground.mp4" type="video/mp4" />
      </video>

      <div className="support-wrapper fade-in">
        <section className="hero-section">
          <h1>📬 Need Help? We’re Just an Email Away.</h1>
          <p>
            Got questions, issues, or feedback? Our Creator Core X support team is ready to help.
            Drop us a message and we’ll get back to you within 24–48 hours.
          </p>
        </section>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label><FaUser /> Name</label>
          <input type="text" placeholder="Your name" required />

          <label><FaEnvelope /> Email Address</label>
          <input type="email" placeholder="you@example.com" required />

          <label><MdSubject /> Subject</label>
          <select required>
            <option value="">Choose a subject</option>
            <option value="General Help">General Help</option>
            <option value="Team Issues">Team Issues</option>
            <option value="Booking Issues">Booking Issues</option>
            <option value="Technical Bug">Technical Bug</option>
            <option value="Other">Other</option>
          </select>

          <label><MdMessage /> Message</label>
          <textarea placeholder="Type your message here..." required></textarea>

          <button type="submit"><FaPaperPlane /> Send Message</button>
        </form>

        {submitted && (
          <div className="success-msg">
            ✅ Thanks! Your message has been sent. We’ll reply as soon as possible.
          </div>
        )}

        <section className="extra-info">
          <p>🕒 Typical reply: within 24–48 hours (M–F, 10am–6pm EST)</p>
          <p>🔒 We respect your privacy. Your info is only used to respond to your message.</p>
          <p>📫 Or email us directly at <a href="mailto:support@creatorcorex.com">support@creatorcorex.com</a></p>
        </section>
      </div>
    </div>
  );
};

export default TeamSupport;
