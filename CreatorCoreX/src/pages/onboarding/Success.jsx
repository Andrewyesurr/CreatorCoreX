import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      user.onboardingComplete = true;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("onboardingComplete", "true");

      // ✅ Optional: Send update to backend (if needed)
      // await fetch(`${API_URL}/api/user/${user._id}/complete-onboarding`, { method: "POST" });
    } else {
      // Fallback in case someone visits this page directly
      navigate("/profile");
    }
  }, [navigate]);

  return (
    <div className="onboarding-page">
      <h2>You're all set!</h2>
      <p>Welcome to the platform as a Team Leader. Your onboarding is complete.</p>
      <button
        className="modal-action-btn gradient-btn"
        onClick={() => navigate("/dashboard")}
      >
        Go to Dashboard
      </button>
    </div>
  );
}
