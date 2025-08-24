import React from 'react';
import './ManageBookings.css';
import { FaRegCalendarAlt } from 'react-icons/fa'; // 🔔 make sure react-icons is installed

const ManageBookings = () => {
  return (
    <div className="manage-bookings-wrapper">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/RichVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="manage-bookings-container">
        <div className="manage-left">
          <h1>
            <FaRegCalendarAlt className="calendar-icon" />
            Manage Bookings
          </h1>
          <p>Looks like you're not signed in. Please log in to manage your team's bookings.</p>
          <button className="login-btn">🔐 Log In</button>
        </div>
        <div className="manage-right">
          {/* Optional: Add imagery, animation, quote, etc. */}
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;
