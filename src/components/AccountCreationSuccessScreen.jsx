import { Check } from 'lucide-react';

const AccountCreationSuccessScreen = ({ onContinue }) => {
  return (
    <div className="account-creation-success-screen">
      <div className="success-container">
        {/* Success Card */}
        <div className="success-card">
          <div className="success-icon-container">
            <div className="success-icon">
              <Check size={48} />
            </div>
          </div>
          <h1 className="success-title">SUCCESS</h1>
        </div>

        {/* Welcome Message */}
        <div className="welcome-message">
          <h2 className="welcome-title">Welcome to Farms Connects</h2>
          <p className="welcome-subtitle">Lets get started</p>
        </div>

        {/* Continue Button */}
        <button className="continue-btn" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default AccountCreationSuccessScreen;
