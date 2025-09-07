import React from 'react';
import { Check } from 'lucide-react';
import './OrderSuccessScreen.css';

const OrderSuccessScreen = ({ onContinue }) => {
  return (
    <div className="order-success-screen">
      <div className="main-content">
        {/* Success Message Box */}
        <div className="success-container">
          <div className="success-message-box">
            <p>
              You have successfully pre-ordered your items. You will receive an email 
              confirming the full price of your items in less than 24 hours. You can 
              then proceed with payment.
            </p>
          </div>

          {/* Success Indicator */}
          <div className="success-indicator">
            <div className="success-circle">
              <Check size={48} />
            </div>
            <h2 className="success-text">SUCCESSFUL</h2>
          </div>

          {/* Continue Button */}
          <button className="continue-btn" onClick={onContinue}>
            Continue Shopping
          </button>
        </div>

        {/* Bottom Navigation */}
        <nav className="bottom-navigation">
          <div className="nav-item active">
            <div className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <span className="nav-label">Home</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <span className="nav-label">Cart</span>
          </div>
          <div className="nav-item">
            <div className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <span className="nav-label">Profile</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default OrderSuccessScreen;
