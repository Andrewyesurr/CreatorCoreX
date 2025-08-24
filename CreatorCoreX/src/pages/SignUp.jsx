import React, { useState, useEffect } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const roles = [
  { value: "creator", label: "Creator" },
  { value: "teamLeader", label: "Team Leader" },
  { value: "individual", label: "Individual" },
];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [selectedRole, setSelectedRole] = useState(
    localStorage.getItem("selectedRole") || "creator"
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.role === "teamLeader") {
        navigate("/team-leader-profile");
      } else {
        navigate("/profile");
      }
    }
  }, [navigate]);

  // keep localStorage in sync with picker
  useEffect(() => {
    localStorage.setItem("selectedRole", selectedRole);
  }, [selectedRole]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          role: selectedRole,
        }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.removeItem("selectedRole");
        localStorage.setItem("token", data.token);

        let finalUser = data.user;

        if (!finalUser) {
          try {
            const base64 = data.token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
            const decoded = JSON.parse(atob(base64));
            finalUser = { ...decoded, role: decoded.role || selectedRole };
          } catch {
            finalUser = { role: selectedRole };
          }
        }

        // 👇 Add onboardingComplete flag for team leaders
        if (finalUser.role === "teamLeader") {
          finalUser.onboardingComplete = false;
        }

        localStorage.setItem("user", JSON.stringify(finalUser));
        redirectToSetup(finalUser.role);
      } else {
        setError(data.message || "Signup failed. No token received.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  const redirectToSetup = (role) => {
    if (role === "creator") {
      navigate("/setup-creator");
    } else if (role === "teamLeader") {
      navigate("/setup-team");
    } else if (role === "individual") {
      navigate("/setup-individual");
    } else {
      navigate("/");
    }
  };

  const handleGoogleSignup = () => {
    localStorage.setItem("selectedRole", selectedRole);
    if (selectedRole === "teamLeader") {
      localStorage.setItem("onboardingComplete", "false");
    }
    window.location.href = `${API_BASE}/api/auth/google?role=${encodeURIComponent(
      selectedRole
    )}&intent=signup`;
  };

  return (
    <div className="signup-page">
      <video autoPlay muted loop playsInline className="signup-bg-video">
        <source src="/Grey.mp4" type="video/mp4" />
      </video>

      <div className="signup-overlay">
        <div className="signup-form-container">
          <h2 className="signup-title">Sign Up</h2>

          {/* Role picker */}
          <div className="role-picker" style={{ marginBottom: 12 }}>
            <label style={{ display: "block", color: "#cfd3dc", marginBottom: 6 }}>
              Sign up as
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(255,255,255,.06)",
                color: "#fff",
                outline: "none",
              }}
            >
              {roles.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
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
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {error && <p className="signup-error">{error}</p>}

          <p className="divider">— or —</p>

          <div className="google-signin">
            <button className="google-btn" onClick={handleGoogleSignup}>
              <img src="/g-logo.png" alt="Google icon" className="google-icon" />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
