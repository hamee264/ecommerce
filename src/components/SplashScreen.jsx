import { useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Show splash for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <div className="splash-container">
        <div className="splash-logo">
          <div className="logo">
            <img 
              src="/src/assets/Dark Green Modern Initial Logo.png" 
              alt="TC Inovasi" 
              className="logo-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
