import React from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "./Stepper";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="onboarding-page">
      <Stepper step={1} />
      <h2>Welcome to Team Leader Onboarding!</h2>
      <p>Get ready to learn what it means to be a Team Leader and set up your profile for success.</p>
      <ul>
        <li>Learn what makes a great Team Leader</li>
        <li>Set up your personal and professional info</li>
        <li>Secure your account</li>
      </ul>
      <button className="modal-action-btn gradient-btn" onClick={() => navigate("/onboarding/personal-info")}>Continue</button>
    </div>
  );
}
