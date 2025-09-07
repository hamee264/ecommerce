import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const ForgotPasswordScreen = ({ onBack, onResetPassword }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleContinue = () => {
    if (selectedOption) {
      onResetPassword(selectedOption);
    }
  };

  return (
    <div className="forgot-password-screen">
      <div className="forgot-password-container">
        {/* Header */}
        <div className="forgot-password-header">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="forgot-password-title-section">
            <h1 className="forgot-password-title">Forgot Password</h1>
          </div>
        </div>

        {/* Selection Options */}
        <div className="selection-options">
          <button
            className={`option-btn ${selectedOption === 'email' ? 'selected' : ''}`}
            onClick={() => setSelectedOption('email')}
          >
            <div className="option-content">
              <div className="option-icon">📧</div>
              <div className="option-text">
                <span className="option-title">Email</span>
                <span className="option-subtitle">Send to your email</span>
              </div>
            </div>
          </button>

          <button
            className={`option-btn ${selectedOption === 'phone' ? 'selected' : ''}`}
            onClick={() => setSelectedOption('phone')}
          >
            <div className="option-content">
              <div className="option-icon">📱</div>
              <div className="option-text">
                <span className="option-title">Phone Number</span>
                <span className="option-subtitle">Send to your phone number</span>
              </div>
            </div>
          </button>
        </div>

        {/* Continue Button */}
        <button 
          className={`continue-btn ${selectedOption ? 'active' : 'disabled'}`}
          onClick={handleContinue}
          disabled={!selectedOption}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
