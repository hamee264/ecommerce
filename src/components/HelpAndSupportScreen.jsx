import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './HelpAndSupportScreen.css';

const HelpAndSupportScreen = ({ onBack }) => {
  return (
    <div className="help-support-screen">
      <header className="help-support-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="screen-title">Help & Support</h1>
      </header>
      <main className="help-support-content">
        <p>Help & Support Page - Coming Soon!</p>
      </main>
    </div>
  );
};

export default HelpAndSupportScreen;
