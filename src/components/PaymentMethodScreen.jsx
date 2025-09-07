import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './PaymentMethodScreen.css';

const PaymentMethodScreen = ({ onBack, onContinue }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const paymentMethods = [
    { id: 'stripe', name: 'Stripe', logo: 'stripe' },
    { id: 'paypal', name: 'PayPal', logo: 'paypal' },
    { id: 'payoneer', name: 'Payoneer', logo: 'payoneer' }
  ];

  const handleMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
  };

  const handleContinue = () => {
    if (selectedMethod) {
      onContinue();
    }
  };

  return (
    <div className="payment-method-screen">
      <div className="main-content">
        {/* Header */}
        <header className="payment-header">
          <div className="navigation-bar">
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={24} />
            </button>
            <h1 className="screen-title">Payment Method</h1>
            <div className="spacer"></div>
          </div>
        </header>

        {/* Payment Methods */}
        <main className="payment-content">
          <div className="payment-methods">
            {paymentMethods.map(method => (
              <button
                key={method.id}
                className={`payment-method-btn ${selectedMethod === method.id ? 'selected' : ''}`}
                onClick={() => handleMethodSelect(method.id)}
              >
                <div className="payment-logo">
                  {method.logo === 'stripe' && <span className="logo-text">stripe</span>}
                  {method.logo === 'paypal' && <span className="logo-text">PayPal</span>}
                  {method.logo === 'payoneer' && <span className="logo-text">payoneerbank</span>}
                </div>
                <span className="continue-text">Continue</span>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <button 
            className="continue-btn"
            onClick={handleContinue}
            disabled={!selectedMethod}
          >
            Continue
          </button>
        </main>

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

export default PaymentMethodScreen;
