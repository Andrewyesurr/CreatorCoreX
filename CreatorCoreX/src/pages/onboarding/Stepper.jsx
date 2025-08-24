import React from "react";

const steps = [
  "Welcome",
  "Personal Info",
  "Professional Info",
  "Account Security"
];

export default function Stepper({ step }) {
  return (
    <div className="onboarding-stepper" style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
      {steps.map((label, idx) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: idx + 1 <= step ? 'linear-gradient(90deg,#6a82fb,#fc5c7d)' : '#222',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: 15,
            border: idx + 1 === step ? '2px solid #fc5c7d' : '2px solid #444',
            transition: 'all 0.2s'
          }}>{idx + 1}</div>
          <span style={{ color: idx + 1 <= step ? '#fc5c7d' : '#bbb', fontWeight: idx + 1 === step ? 600 : 400 }}>{label}</span>
          {idx < steps.length - 1 && <div style={{ width: 32, height: 2, background: '#444', borderRadius: 1 }} />}
        </div>
      ))}
    </div>
  );
}
