import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ 
  onGetStarted, 
  isAfterLogin 
}) => {

  return (
    <div className="welcome-screen">
      
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="welcome-header">
            <h1 className="welcome-title">Welcome To</h1>
            <div className="logo">
              <img 
                src="/assets/Dark Green Modern Initial Logo.png" 
                alt="TC Inovasi" 
                className="logo-image"
              />
            </div>
          </div>
          
          <div className="welcome-image">
            <img 
              src="/assets/cow.png" 
              alt="Farm Cow" 
            />
          </div>
          
          <div className="welcome-text">
            <p className="welcome-description">
              Get farm products delivered To your door step
            </p>
          </div>
          
          <div className="welcome-actions">
            <button 
              className="welcome-btn primary" 
              onClick={onGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WelcomeScreen;
