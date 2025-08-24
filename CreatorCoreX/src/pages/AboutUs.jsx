// AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-text">
          <h1>Andrew Larios</h1>
          <p>Founder, Chairman and Chief Executive Officer</p>
        </div>
        <div className="about-img">
          <img src="/Founder.jpg" alt="Andrew Larios" />
        </div>
      </section>

      <section className="about-details fade-in">
        <p>
          Andrew Larios is the  founder, chairman and CEO of CreatorCoreX, a platform he launched in 2025 with a clear mission: to make collaboration easier for creators, individuals, and dreamers looking to build something meaningful as a team.
        </p>
        <p>
          Growing up in apartments and without direct access to mentors or business networks, Andrew often felt isolated in his creative journey. But instead of letting that hold him back, he built a platform to help others find their people locally, not miles away on the internet.
        </p>
        <p>
          Raised in Atlanta after being born in Sacramento, Andrew didn’t come from a family of business mentors. CreatorCoreX is his answer to the problem of creative loneliness — making it easier for anyone to build a trusted team with local talent.
        </p>

        <div className="about-links">
          <a href="https://instagram.com/kriec_o">Instagram</a>
          <a href="https://www.youtube.com/@Andrew_TALKS">YouTube</a>
        </div>

        <h2>More From Andrew</h2>
        <blockquote>
          “I didn’t grow up with a network — so I created one. That’s what CreatorCoreX is really about.”
        </blockquote>
        <blockquote>
          “If you’ve got a vision, you shouldn’t have to build it alone.”
        </blockquote>
      </section>
    </div>
  );
};

export default AboutUs;
