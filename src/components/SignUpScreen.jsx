import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const SignUpScreen = ({ onBack, onSignUp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!agreeToTerms) {
      alert('Please agree to the terms and policy');
      return;
    }
    onSignUp(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signup-screen">
      
      <div className="signup-container">
        {/* Header */}
        <div className="signup-header">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="signup-title-section">
            <h1 className="signup-title">Sign Up</h1>
            <p className="signup-subtitle">Create an account</p>
          </div>
        </div>

        {/* Sign Up Form */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="enter email address"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="enter password"
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

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input password-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="terms-checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="checkbox-input"
              />
              <span className="checkbox-text">
                By creating an account, you agree to our{' '}
                <button type="button" className="terms-link">Terms & Conditions</button>
              </span>
            </label>
          </div>

          <button type="submit" className="signup-btn">
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="login-link">
          <p>Have an account? <button type="button" onClick={onBack} className="link-btn">Login</button></p>
        </div>

        {/* Divider */}
        <div className="divider">
          <span>Or sign up with</span>
        </div>

        {/* Social Sign Up */}
        <div className="social-signup">
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

export default SignUpScreen;
