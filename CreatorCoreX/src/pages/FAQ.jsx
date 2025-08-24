import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <div className="page-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about CreatorCoreX</p>
        </div>
      
      <div className="faq-search">
        <input type="text" placeholder="Search for answers..." />
        <button>Search</button>
      </div>
      
      <div className="faq-categories">
        <div className="category-tabs">
          <button className="tab active">General</button>
          <button className="tab">Teams</button>
          <button className="tab">Creators</button>
          <button className="tab">Billing</button>
          <button className="tab">Technical</button>
        </div>
      </div>
      
      <div className="faq-content">
        <div className="faq-section">
          <h2>General Questions</h2>
          
          <div className="faq-item">
            <div className="faq-question">
              <h3>What is CreatorCoreX?</h3>
              <span className="expand-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>CreatorCoreX is a comprehensive platform that connects creative professionals, teams, and individuals. We provide tools for collaboration, project management, and showcasing creative work to help you grow your creative business.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <h3>How do I get started on CreatorCoreX?</h3>
              <span className="expand-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Getting started is easy! Simply create an account, complete your profile, and choose whether you want to join as an individual creator, start a team, or browse for talent. Our onboarding process will guide you through each step.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <h3>Is CreatorCoreX free to use?</h3>
              <span className="expand-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>CreatorCoreX offers both free and premium plans. The free plan includes basic features like profile creation, browsing, and basic messaging. Premium plans unlock advanced features like unlimited projects, priority support, and enhanced analytics.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <h3>How does the matching system work?</h3>
              <span className="expand-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Our AI-powered matching system analyzes your skills, preferences, and project history to suggest relevant opportunities and collaborators. The more you use the platform, the better our recommendations become.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <h3>Can I work with people from other countries?</h3>
              <span className="expand-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Absolutely! CreatorCoreX is a global platform that connects creators worldwide. We support multiple currencies and provide tools to help you collaborate across time zones and cultural differences.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <h3>How do I report inappropriate content or behavior?</h3>
              <span className="expand-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>We take community safety seriously. You can report any inappropriate content or behavior using the report button found on profiles, messages, or projects. Our moderation team reviews all reports within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="help-contact">
        <h3>Still need help?</h3>
        <p>Can't find what you're looking for? Our support team is here to help.</p>
        <div className="contact-options">
          <button className="contact-btn">Live Chat</button>
          <button className="contact-btn secondary">Email Support</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
