import React from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "./Stepper";

export default function AccountSecurity() {
  const navigate = useNavigate();
  return (
    <div className="onboarding-page">
      <Stepper step={4} />
      <h2>Account Security</h2>
      <p>Trust and safety is a big deal in our community. Please verify your email and phone number so that we can keep your account secured.</p>
      <ul>
        <li>Email <span style={{ color: '#bbb' }}>(Verified)</span></li>
        <li>Phone Number <span style={{ color: '#bbb' }}>(Verified)</span></li>
      </ul>
      <button className="modal-action-btn gradient-btn" onClick={() => navigate("/onboarding/success")}>Continue</button>
    </div>
  );
}
