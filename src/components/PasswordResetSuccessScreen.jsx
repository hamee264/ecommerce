import { Check } from 'lucide-react';

const PasswordResetSuccessScreen = ({ onProceedToLogin }) => {
  return (
    <div className="password-reset-success-screen">
      <div className="success-container">
        {/* Success Content */}
        <div className="success-content">
          <div className="success-icon-container">
            <div className="success-icon">
              <Check size={48} />
            </div>
          </div>
          
          <div className="success-text">
            <h1 className="success-title">SUCCESS</h1>
            <p className="success-message">Your password has been re-set</p>
          </div>
        </div>

        {/* Proceed Button */}
        <button className="proceed-btn" onClick={onProceedToLogin}>
          Proceed to login
        </button>
      </div>
    </div>
  );
};

export default PasswordResetSuccessScreen;
