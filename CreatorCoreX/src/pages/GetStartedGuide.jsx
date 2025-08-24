import React, { useEffect, useRef } from "react";
import { FiBookOpen, FiVideo, FiSend, FiMail } from "react-icons/fi";
import "./GetStartedGuide.css";

const GetStartedGuide = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onended = () => {
        video.pause(); // Just pause when finished — do not loop, do not hide
      };
    }
  }, []);

  return (
    <div className="get-started-page">
      <video ref={videoRef} className="video-bg" autoPlay muted playsInline>
        <source src="/VideoBackground.mp4" type="video/mp4" />
      </video>

      <div className="get-started-wrapper">
        <section className="get-started-header">
          <h1><FiBookOpen className="icon" /> Get Started Guide</h1>
          <p>
            Ready to join Creator Core X? This guide will walk you through how to register,
            build your creative team, and connect with others locally.
          </p>
        </section>

        <section className="get-started-video">
          <h2><FiVideo className="icon" /> Watch: Setup and Succeed on Creator Core X</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/j0jdjWuk12M?start=357"
              title="Get Started on Creator Core X"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="get-started-cta">
          <h3><FiSend className="icon" /> Ready to take the first step?</h3>
          <a href="/register" className="cta-button">Register and Start Now</a>
        </section>

        <section className="get-started-contact">
          <p><FiMail className="icon" /> Still need help? Email us at <a href="mailto:support@creatorcorex.com">support@creatorcorex.com</a></p>
        </section>
      </div>
    </div>
  );
};

export default GetStartedGuide;
