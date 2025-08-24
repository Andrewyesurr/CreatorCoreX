import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "./Stepper";

export default function ProfessionalInfo() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    occupation: "",
    from: "",
    to: "",
    skills: "",
    education: "",
    certifications: "",
    website: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="onboarding-page">
      <Stepper step={3} />
      <h2>Professional Info</h2>
      <p>This is your time to shine. Let others know what you do best and your experience.</p>
      <form onSubmit={e => { e.preventDefault(); navigate("/onboarding/account-security"); }}>
        <label>Occupation<br />
          <input name="occupation" value={form.occupation} onChange={handleChange} />
        </label>
        <label>From<br />
          <input name="from" value={form.from} onChange={handleChange} type="number" min="1950" max="2099" />
        </label>
        <label>To<br />
          <input name="to" value={form.to} onChange={handleChange} type="number" min="1950" max="2099" />
        </label>
        <label>Skills<br />
          <input name="skills" value={form.skills} onChange={handleChange} placeholder="e.g. Web Development, AI" />
        </label>
        <label>Education<br />
          <input name="education" value={form.education} onChange={handleChange} />
        </label>
        <label>Certifications<br />
          <input name="certifications" value={form.certifications} onChange={handleChange} />
        </label>
        <label>Personal Website<br />
          <input name="website" value={form.website} onChange={handleChange} placeholder="https://" />
        </label>
        <button className="modal-action-btn gradient-btn" type="submit">Next</button>
      </form>
    </div>
  );
}
