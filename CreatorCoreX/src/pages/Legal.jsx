import React from 'react';
import './Legal.css';

const Legal = () => {
  return (
    <div className="legal">
      <div className="page-header">
        <div className="header-content">
          <h1>Legal Disclaimer</h1>
          <p>Important legal information about using CreatorCoreX</p>
        </div>
      </div>
      
      <div className="content-container">
        <div className="legal-content">
          <div className="disclaimer-section">
            <h2>General Disclaimer</h2>
            <p>
              The information contained on CreatorCoreX is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
            <p>
              Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </div>
          
          <div className="disclaimer-section">
            <h2>Platform Limitations</h2>
            <h3>Service Availability</h3>
            <p>
              CreatorCoreX is provided on an "as is" and "as available" basis. We do not guarantee that our services will be uninterrupted, secure, or error-free. Technical issues, maintenance, or other factors may temporarily affect service availability.
            </p>
            
            <h3>User-Generated Content</h3>
            <p>
              CreatorCoreX serves as a platform connecting creative professionals. We do not control, endorse, or guarantee the accuracy, completeness, or quality of user-generated content, including portfolios, project descriptions, or user communications.
            </p>
            
            <h3>Third-Party Services</h3>
            <p>
              Our platform integrates with various third-party services including payment processors, cloud storage, and communication tools. We are not responsible for the availability, accuracy, or functionality of these external services.
            </p>
          </div>
          
          <div className="disclaimer-section">
            <h2>User Responsibilities</h2>
            <h3>Professional Relationships</h3>
            <p>
              CreatorCoreX facilitates connections between creative professionals but does not guarantee the quality, reliability, or professionalism of any individual user. Users are responsible for:
            </p>
            <ul>
              <li>Verifying the credentials and capabilities of potential collaborators</li>
              <li>Negotiating fair terms for projects and collaborations</li>
              <li>Ensuring compliance with applicable laws and regulations</li>
              <li>Protecting their own intellectual property and confidential information</li>
            </ul>
            
            <h3>Financial Transactions</h3>
            <p>
              While we provide secure payment processing, users are responsible for:
            </p>
            <ul>
              <li>Understanding and agreeing to payment terms</li>
              <li>Maintaining accurate financial records</li>
              <li>Complying with tax obligations in their jurisdiction</li>
              <li>Resolving payment disputes through appropriate channels</li>
            </ul>
          </div>
          
          <div className="disclaimer-section">
            <h2>Intellectual Property</h2>
            <h3>Copyright and Trademarks</h3>
            <p>
              Users are solely responsible for ensuring they have the right to use, display, and share any content they upload to our platform. We respect intellectual property rights and expect our users to do the same.
            </p>
            
            <h3>Content Ownership</h3>
            <p>
              CreatorCoreX does not claim ownership of user-uploaded content. However, by uploading content, users grant us certain rights as outlined in our Terms of Service. Users retain responsibility for protecting their intellectual property.
            </p>
          </div>
          
          <div className="disclaimer-section">
            <h2>Limitation of Liability</h2>
            <h3>Direct Damages</h3>
            <p>
              To the maximum extent permitted by applicable law, CreatorCoreX, its officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of our services.
            </p>
            
            <h3>Business Relationships</h3>
            <p>
              We are not responsible for:
            </p>
            <ul>
              <li>Disputes between users regarding projects or payments</li>
              <li>Quality or timeliness of work performed by platform users</li>
              <li>Breach of contract between collaborating parties</li>
              <li>Loss of business opportunities or revenue</li>
            </ul>
            
            <h3>Maximum Liability</h3>
            <p>
              In jurisdictions where liability limitations are not permitted, our total liability to you shall not exceed the amount of fees paid by you to CreatorCoreX in the twelve (12) months preceding the claim.
            </p>
          </div>
          
          <div className="disclaimer-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless CreatorCoreX and its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from:
            </p>
            <ul>
              <li>Your use of our services</li>
              <li>Your violation of these terms or applicable laws</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit or share through our platform</li>
            </ul>
          </div>
          
          <div className="disclaimer-section">
            <h2>Governing Law</h2>
            <p>
              These disclaimers and any disputes arising from your use of CreatorCoreX shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles.
            </p>
            <p>
              Any legal action or proceeding arising under these disclaimers will be brought exclusively in the federal or state courts located in San Francisco County, California, and you hereby consent to personal jurisdiction and venue therein.
            </p>
          </div>
          
          <div className="disclaimer-section">
            <h2>Changes to This Disclaimer</h2>
            <p>
              We reserve the right to modify this legal disclaimer at any time. Changes will be effective immediately upon posting to our website. Your continued use of CreatorCoreX after any such changes constitutes your acceptance of the new disclaimer.
            </p>
          </div>
          
          <div className="disclaimer-section">
            <h2>Contact Information</h2>
            <p>
              If you have questions about this legal disclaimer, please contact our legal team:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> legal@creatorcorecx.com</p>
              <p><strong>Address:</strong> 123 Creative Street, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="acknowledgment">
            <h3>Acknowledgment</h3>
            <p>
              By using CreatorCoreX, you acknowledge that you have read, understood, and agree to be bound by this legal disclaimer in addition to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        
        <div className="legal-sidebar">
          <div className="quick-nav">
            <h3>Legal Documents</h3>
            <ul>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/community-guidelines">Community Guidelines</a></li>
              <li><a href="/legal">Legal Disclaimer</a></li>
            </ul>
          </div>
          
          <div className="help-box">
            <h4>Legal Questions?</h4>
            <p>Our legal team is available to help with any questions about these disclaimers.</p>
            <button className="btn-contact">Contact Legal Team</button>
          </div>
          
          <div className="notice-box">
            <h4>⚠️ Important Notice</h4>
            <p>This disclaimer does not replace professional legal advice. Consult with a qualified attorney for specific legal matters.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
