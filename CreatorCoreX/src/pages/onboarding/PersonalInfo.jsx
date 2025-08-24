import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "./Stepper";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    displayName: "",
    bio: "",
    languages: [],
    profilePic: null
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!form.fullName || !form.displayName) {
      setError("Full Name and Display Name are required.");
      return;
    }
    navigate("/onboarding/professional-info");
  };

  return (
    <div className="onboarding-page">
      <Stepper step={2} />
      <h2>Personal Info</h2>
      <p>Tell us about yourself. This info will appear on your public profile.</p>
      <form onSubmit={e => { e.preventDefault(); handleNext(); }}>
        <label>Full Name*<br />
          <input name="fullName" value={form.fullName} onChange={handleChange} required />
        </label>
        <label>Display Name*<br />
          <input name="displayName" value={form.displayName} onChange={handleChange} required />
        </label>
        <label>Bio<br />
          <textarea name="bio" value={form.bio} onChange={handleChange} maxLength={200} />
        </label>
        <label>Languages<br />
          <input name="languages" value={form.languages} onChange={handleChange} placeholder="e.g. English, Spanish" />
        </label>
        <label>Profile Picture<br />
          <input type="file" accept="image/*" onChange={e => setForm({ ...form, profilePic: e.target.files[0] })} />
        </label>
        {error && <div className="error-text">{error}</div>}
        <button className="modal-action-btn gradient-btn" type="submit">Next</button>
      </form>
    </div>
  );
}
