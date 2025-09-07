import React from 'react';
import { Check } from 'lucide-react';
import './PaymentSuccessScreen.css';

const PaymentSuccessScreen = ({ onContinue }) => {
  return (
    <div className="payment-success-screen">
      <div className="main-content">
        {/* Success Content */}
        <div className="success-container">
          <div className="success-illustration">
            <div className="phone-illustration">
              <div className="phone-screen">
                <Check size={32} />
              </div>
            </div>
            <div className="shopping-bags">
              <div className="bag bag-1"></div>
              <div className="bag bag-2"></div>
              <div className="bag bag-3"></div>
            </div>
          </div>

          <h1 className="success-title">Payment Successful</h1>

          <button className="continue-btn" onClick={onContinue}>
            Continue
          </button>
        </div>

        {/* Bottom Navigation */}
        <nav className="bottom-navigation">
          <div className="nav-item">
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

export default PaymentSuccessScreen;
