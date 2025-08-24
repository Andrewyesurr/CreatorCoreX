import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SetupCreator.css';

const SetupCreator = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();

  // Debug: Check if component loads and what's in localStorage
  useEffect(() => {
    console.log("🔍 SetupCreator component loaded");
    console.log("🔍 Token in localStorage:", localStorage.getItem("token") ? "EXISTS" : "MISSING");
    console.log("🔍 User in localStorage:", localStorage.getItem("user") ? "EXISTS" : "MISSING");
    console.log("🔍 Current URL:", window.location.href);
    
    // Check if something is automatically redirecting
    const checkRedirect = () => {
      if (window.location.pathname !== "/setup-creator") {
        console.log("🚨 AUTOMATIC REDIRECT DETECTED! Now at:", window.location.href);
      }
    };
    
    setTimeout(checkRedirect, 1000);
    setTimeout(checkRedirect, 2000);
    setTimeout(checkRedirect, 3000);
  }, []);

  const handleContinue = () => {
    console.log("🔍 Continue button clicked");
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");

    console.log("🔍 Token found:", token ? "YES" : "NO");
    console.log("🔍 User data found:", userStr ? "YES" : "NO");

    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        console.log("🔍 User parsed successfully:", user);
        setShowWelcome(true);
        setTimeout(() => {
          console.log("🔍 Redirecting to creator profile...");
          navigate(`/creator-profile/${user.id}`);
        }, 4000); // 4 second welcome screen
      } catch (err) {
        console.error("❌ Error parsing user data:", err);
        alert("There was an error with your account data. Please try signing in again.");
        navigate("/signin");
      }
    } else {
      console.warn("❌ User not authenticated - no token found");
      // Give user option to wait or sign in again
      const shouldWait = confirm("Authentication is still processing. Click OK to wait a moment, or Cancel to sign in again.");
      if (shouldWait) {
        console.log("🔍 User chose to wait - checking again in 2 seconds...");
        setTimeout(() => {
          const retryToken = localStorage.getItem("token");
          const retryUser = localStorage.getItem("user");
          if (retryToken && retryUser) {
            console.log("🎉 Found token on retry!");
            handleContinue(); // Try again
          } else {
            console.log("❌ Still no token - redirecting to signin");
            navigate("/signin");
          }
        }, 2000);
      } else {
        navigate("/signin");
      }
    }
  };

  return (
    <div className="creator-setup">
      {!showWelcome && (
        <video autoPlay muted loop playsInline className="creator-video-bg">
          <source src="/Grey.mp4" type="video/mp4" />
        </video>
      )}

      {!showWelcome && (
        <div className="creator-overlay">
          <div className="creator-step">
            <div className="creator-icon">📩</div>
            <h2 className="creator-heading">Welcome to CreatorCoreX</h2>
            <p className="creator-subtext">Let’s finish setting up your profile.</p>
            <button className="creator-btn" onClick={handleContinue}>Continue</button>
          </div>
        </div>
      )}

      {showWelcome && (
        <div className="creator-welcome-fullscreen fade-out">
          <video autoPlay muted className="creator-welcome-video">
            <source src="/Max.mp4" type="video/mp4" />
          </video>
          <div className="creator-welcome-text">Welcome to CreatorCoreX</div>
        </div>
      )}
    </div>
  );
};

export default SetupCreator;
