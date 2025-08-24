// src/pages/SignIn.jsx
import React, { useState, useEffect } from "react";
import "./Signup.css"; // Reuse same styles
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ If already authenticated, go to profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/profile");
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

        const role = data.user?.role;
        if (role === "teamLeader" || role === "team") {
          navigate("/setup-team");
        } else if (role === "individual") {
          navigate("/setup-individual");
        } else if (role === "creator") {
          navigate("/setup-creator");
        } else {
          navigate("/profile");
        }
      } else {
        setError(data.message || "Login failed. No token received.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google login should *not* send a role; just mark intent=login
  const handleGoogleSignIn = () => {
    window.location.href = `${API_BASE}/api/auth/google?intent=login`;
  };

  return (
    <div className="signup-page">
      <video autoPlay muted loop playsInline className="signup-bg-video">
        <source src="/Grey.mp4" type="video/mp4" />
      </video>

      <div className="signup-overlay">
        <div className="signup-form-container">
          <h2 className="signup-title">Sign In</h2>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password (min 6 chars)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Sign In"}
            </button>
          </form>

          {error && <p className="signup-error">{error}</p>}

          <p className="divider">— or —</p>

          <div className="google-signin">
            <button className="google-btn" onClick={handleGoogleSignIn}>
              <img src="/g-logo.png" alt="Google icon" className="google-icon" />
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
