import React from 'react';
import './ReportProblem.css';

const ReportProblem = () => {
  return (
    <div className="report-problem">
      <div className="page-header">
        <div className="header-content">
          <h1>Report a Problem</h1>
          <p>Help us maintain a safe and professional community</p>
        </div>
      </div>
      
      <div className="content-container">
        <div className="report-main">
          <div className="report-intro">
            <h2>We're Here to Help</h2>
            <p>
              Your safety and positive experience on CreatorCoreX is our priority. If you've encountered any issues, violations of our community guidelines, or have concerns about another user's behavior, please let us know.
            </p>
            <p>
              All reports are taken seriously and handled confidentially by our dedicated safety team.
            </p>
          </div>
          
          <div className="report-form-section">
            <h2>Submit a Report</h2>
            <form className="report-form">
              <div className="form-group">
                <label htmlFor="report-type">Type of Issue</label>
                <select id="report-type" name="reportType" required>
                  <option value="">Select an issue type</option>
                  <option value="harassment">Harassment or Bullying</option>
                  <option value="inappropriate-content">Inappropriate Content</option>
                  <option value="copyright">Copyright Infringement</option>
                  <option value="fraud">Fraudulent Activity</option>
                  <option value="spam">Spam or Unwanted Messages</option>
                  <option value="impersonation">Impersonation</option>
                  <option value="payment">Payment Issues</option>
                  <option value="technical">Technical Problems</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="user-reported">User or Content Being Reported</label>
                <input 
                  type="text" 
                  id="user-reported" 
                  name="userReported"
                  placeholder="Username, profile URL, or project link"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description of Issue</label>
                <textarea 
                  id="description" 
                  name="description"
                  rows="6"
                  placeholder="Please provide detailed information about what happened, including dates, times, and specific incidents..."
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="evidence">Supporting Evidence</label>
                <div className="file-upload">
                  <input type="file" id="evidence" name="evidence" multiple accept="image/*,.pdf,.doc,.docx" />
                  <p className="upload-help">Upload screenshots, documents, or other evidence (optional)</p>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="urgency">Urgency Level</label>
                <div className="urgency-options">
                  <label className="radio-option">
                    <input type="radio" name="urgency" value="low" />
                    <span className="radio-custom"></span>
                    <div className="option-info">
                      <strong>Low</strong>
                      <p>General concern, no immediate safety risk</p>
                    </div>
                  </label>
                  
                  <label className="radio-option">
                    <input type="radio" name="urgency" value="medium" defaultChecked />
                    <span className="radio-custom"></span>
                    <div className="option-info">
                      <strong>Medium</strong>
                      <p>Ongoing issue affecting my experience</p>
                    </div>
                  </label>
                  
                  <label className="radio-option">
                    <input type="radio" name="urgency" value="high" />
                    <span className="radio-custom"></span>
                    <div className="option-info">
                      <strong>High</strong>
                      <p>Safety concern or significant policy violation</p>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="contactEmail"
                  placeholder="your@email.com"
                  required
                />
                <p className="field-help">We may need to contact you for additional information</p>
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="anonymous" />
                  <span className="checkbox-custom"></span>
                  I would like this report to remain anonymous
                </label>
              </div>
              
              <button type="submit" className="btn-submit">Submit Report</button>
            </form>
          </div>
        </div>
        
        <div className="report-sidebar">
          <div className="emergency-box">
            <h3>🚨 Emergency?</h3>
            <p>If you're in immediate danger or experiencing a crisis, please contact local emergency services immediately.</p>
            <div className="emergency-contacts">
              <p><strong>US:</strong> 911</p>
              <p><strong>UK:</strong> 999</p>
              <p><strong>EU:</strong> 112</p>
            </div>
          </div>
          
          <div className="help-box">
            <h3>What Happens Next?</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Report Received</h4>
                  <p>You'll receive a confirmation email with your report ID</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Initial Review</h4>
                  <p>Our team reviews your report within 24-48 hours</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Investigation</h4>
                  <p>We thoroughly investigate the reported issue</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Action Taken</h4>
                  <p>Appropriate measures are taken and you're updated</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="resources-box">
            <h3>Additional Resources</h3>
            <div className="resource-links">
              <a href="/community-guidelines" className="resource-link">
                📋 Community Guidelines
              </a>
              <a href="/terms-of-service" className="resource-link">
                📄 Terms of Service
              </a>
              <a href="/team-support" className="resource-link">
                💬 Contact Support
              </a>
              <a href="/tutorials" className="resource-link">
                📚 Help Center
              </a>
            </div>
          </div>
          
          <div className="types-box">
            <h3>Common Report Types</h3>
            <div className="report-types">
              <div className="report-type">
                <strong>Harassment</strong>
                <p>Bullying, threats, or unwanted contact</p>
              </div>
              <div className="report-type">
                <strong>Fraud</strong>
                <p>Fake profiles, payment scams, or dishonest behavior</p>
              </div>
              <div className="report-type">
                <strong>Copyright</strong>
                <p>Unauthorized use of your creative work</p>
              </div>
              <div className="report-type">
                <strong>Inappropriate Content</strong>
                <p>Content that violates our community standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportProblem;
