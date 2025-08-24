import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function OnboardingRedirect({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUserJSON = localStorage.getItem("user");
    if (!storedUserJSON) return; // If no user found, do nothing

    const storedUser = JSON.parse(storedUserJSON);

    // Redirect if user is a Team Leader and has not completed onboarding
    if (
      storedUser?.role === "teamLeader" &&
      !storedUser?.onboardingComplete &&
      !location.pathname.startsWith("/onboarding")
    ) {
      navigate("/onboarding/welcome", { replace: true });
    }
  }, [navigate, location]);

  return children;
}
