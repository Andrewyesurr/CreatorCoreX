// src/pages/OAuthSuccess.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const roleHint = params.get("role");       // backend sends this
    const redirect = params.get("redirect");   // optional suggested path

    if (!token) {
      navigate("/signin", { replace: true });
      return;
    }

    localStorage.setItem("token", token);

    // Decode JWT payload safely
    let payload = {};
    try {
      const b64 = token.split(".")[1];
      const json = atob(b64.replace(/-/g, "+").replace(/_/g, "/"));
      payload = JSON.parse(json || "{}");
    } catch (e) {
      // ignore — we'll fall back to roleHint
    }

    const role =
      payload.role || roleHint || localStorage.getItem("selectedRole") || "creator";

    const user = {
      _id: payload.id || payload._id || payload.uid || undefined,
      username: payload.username || "",
      role,
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Keep the role picker in sync so it doesn’t “stick” on the wrong value
    localStorage.setItem("selectedRole", role);

    // Decide where to go
    const fallback =
      role === "teamLeader"
        ? "/team-leader-profile"
        : role === "individual"
        ? "/profile" // change if you have a separate individual page
        : "/profile";

    navigate(redirect || fallback, { replace: true });
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h2>🎉 Logging you in...</h2>
      <p>Please wait while we redirect you…</p>
    </div>
  );
}
