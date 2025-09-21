import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './NotificationsScreen.css';

const NotificationsScreen = ({ onBack }) => {
  return (
    <div className="notifications-screen">
      <header className="notifications-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="screen-title">Notifications</h1>
      </header>
      <main className="notifications-content">
        <p>Notifications Page - Coming Soon!</p>
      </main>
    </div>
  );
};

export default NotificationsScreen;
