import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const LoginScreen = ({ onBack, onLogin, onForgotPassword, onSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-screen">
      
      <div className="login-container">
        {/* Header */}
        <div className="login-header">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="login-title-section">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to your account</p>
          </div>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">email</label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="write your password"
                value={formData.password}
                onChange={handleChange}
                className="form-input password-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="button" className="forgot-password-link" onClick={onForgotPassword}>
            Forgot Password?
          </button>

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="signup-link">
          <p>Don't have an account? <button type="button" onClick={onSignUp} className="link-btn">Sign Up</button></p>
        </div>

        {/* Social Login */}
        <div className="social-login">
          <button className="social-btn google-btn">
            <img src="/src/assets/Google logo.png" alt="Google" className="social-icon" />
          </button>
          <button className="social-btn apple-btn">
            <img src="/src/assets/Apple logo.png" alt="Apple" className="social-icon" />
          </button>
          <button className="social-btn facebook-btn">
            <span className="social-icon">f</span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default LoginScreen;
