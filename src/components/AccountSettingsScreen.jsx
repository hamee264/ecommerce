import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './AccountSettingsScreen.css';

const AccountSettingsScreen = ({ onBack }) => {
  return (
    <div className="account-settings-screen">
      <header className="account-settings-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="screen-title">Account Settings</h1>
      </header>
      <main className="account-settings-content">
        <p>Account Settings Page - Coming Soon!</p>
      </main>
    </div>
  );
};

export default AccountSettingsScreen;
