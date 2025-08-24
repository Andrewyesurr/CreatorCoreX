import React, { useState } from 'react';
import './LiveChat.css';

const LiveChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'support',
      message: 'Hello! Welcome to CreatorCore support. How can I help you today?',
      timestamp: '2:34 PM'
    }
  ]);

  const supportAgents = [
    { name: 'Sarah Chen', status: 'online', speciality: 'Technical Support', avatar: '👩‍💻' },
    { name: 'Mike Rodriguez', status: 'online', speciality: 'Account Issues', avatar: '👨‍💼' },
    { name: 'Emma Johnson', status: 'busy', speciality: 'Payment Support', avatar: '👩‍💳' },
    { name: 'David Park', status: 'online', speciality: 'General Help', avatar: '👨‍🎓' }
  ];

  const quickActions = [
    { icon: '🔧', title: 'Technical Issue', description: 'Get help with platform problems' },
    { icon: '💳', title: 'Payment Help', description: 'Billing and payment questions' },
    { icon: '👤', title: 'Account Support', description: 'Profile and account assistance' },
    { icon: '📋', title: 'Project Help', description: 'Project management guidance' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
      
      // Simulate support response
      setTimeout(() => {
        const supportResponse = {
          id: chatMessages.length + 2,
          sender: 'support',
          message: 'Thank you for your message. Let me help you with that right away!',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, supportResponse]);
      }, 1500);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Live Chat Support</h1>
              <p>
                Get instant help from our expert support team. We&apos;re here to assist you 
                with any questions or issues you might have.
              </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">&lt;2min</span>
                <span className="stat-label">Average Response</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Available</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Agents */}
      <section className="agents-section">
        <div className="container">
          <h2 className="section-title">Our Support Team</h2>
          <div className="agents-grid">
            {supportAgents.map((agent, index) => (
              <div key={index} className="agent-card">
                <div className="agent-avatar">{agent.avatar}</div>
                <div className="agent-info">
                  <h3>{agent.name}</h3>
                  <p className="agent-speciality">{agent.speciality}</p>
                  <div className={`agent-status ${agent.status}`}>
                    <div className="status-indicator"></div>
                    <span>{agent.status === 'online' ? 'Available' : 'Busy'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions-section">
        <div className="container">
          <h2 className="section-title">What do you need help with?</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <div key={index} className="quick-action-card" onClick={() => setIsChatOpen(true)}>
                <div className="action-icon">{action.icon}</div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
                <div className="action-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="chat-section">
        <div className="container">
          <div className="chat-container">
            <div className="chat-header">
              <div className="chat-header-info">
                <h2>Start Live Chat</h2>
                <p>Connect with our support team instantly</p>
              </div>
              <div className="chat-status">
                <div className="status-indicator online"></div>
                <span>4 agents online</span>
              </div>
            </div>

            {!isChatOpen ? (
              <div className="chat-preview">
                <div className="chat-preview-content">
                  <div className="preview-icon">💬</div>
                  <h3>Ready to chat?</h3>
                  <p>Click the button below to start a conversation with our support team.</p>
                  <button 
                    className="start-chat-btn"
                    onClick={() => setIsChatOpen(true)}
                  >
                    Start Chat Now
                  </button>
                </div>
              </div>
            ) : (
              <div className="chat-window">
                <div className="chat-messages">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                      <div className="message-content">
                        <p>{msg.message}</p>
                        <span className="message-time">{msg.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSendMessage} className="chat-input-form">
                  <div className="chat-input-container">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="chat-input"
                    />
                    <button type="submit" className="send-btn">
                      <span className="send-icon">📤</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Live Chat?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Response</h3>
              <p>Get immediate answers to your questions without waiting for email responses.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Expert Help</h3>
              <p>Chat directly with specialized support agents who know the platform inside out.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Multi-Device</h3>
              <p>Access live chat from any device - desktop, tablet, or mobile.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Chat History</h3>
              <p>All your conversations are saved for future reference and follow-ups.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your conversations are encrypted and kept completely confidential.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Support</h3>
              <p>24/7 support across multiple time zones and languages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="faq-preview">
        <div className="container">
          <h2 className="section-title">Common Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How quickly will I get a response?</h4>
              <p>Our average response time is under 2 minutes during business hours.</p>
            </div>
            <div className="faq-item">
              <h4>Is live chat available 24/7?</h4>
              <p>Yes! We have support agents available around the clock to help you.</p>
            </div>
            <div className="faq-item">
              <h4>Can I attach files in the chat?</h4>
              <p>Absolutely! You can share screenshots, documents, and other files.</p>
            </div>
            <div className="faq-item">
              <h4>Will I talk to the same agent?</h4>
              <p>We try to maintain continuity, but all agents have access to your chat history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Support */}
      <section className="alternative-support">
        <div className="container">
          <div className="support-options">
            <h2>Need Other Support Options?</h2>
            <p>We offer multiple ways to get help based on your preferences.</p>
            <div className="support-buttons">
              <a href="/email-support" className="support-btn primary">
                📧 Email Support
              </a>
              <a href="/faq" className="support-btn secondary">
                ❓ Browse FAQ
              </a>
              <a href="/forums" className="support-btn secondary">
                💬 Community Forums
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default LiveChat;
