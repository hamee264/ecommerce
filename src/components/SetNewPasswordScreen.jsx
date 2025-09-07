import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const SetNewPasswordScreen = ({ onBack, onSave }) => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      onSave(formData);
    } else {
      alert('Passwords do not match');
    }
  };

  const isFormValid = formData.password && formData.confirmPassword && 
                     formData.password === formData.confirmPassword;

  return (
    <div className="set-password-screen">
      <div className="set-password-container">
        {/* Header */}
        <div className="set-password-header">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="set-password-title-section">
            <h1 className="set-password-title">Set your new password</h1>
          </div>
        </div>

        {/* Password Form */}
        <form className="set-password-form" onSubmit={handleSubmit}>
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
            <label className="form-label">Confirm password</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="re-enter password"
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

          {/* Password Requirements */}
          <div className="password-requirements">
            <p>At least 1 number and a special character</p>
          </div>

          {/* Save Button */}
          <button 
            type="submit" 
            className={`save-btn ${isFormValid ? 'active' : 'disabled'}`}
            disabled={!isFormValid}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewPasswordScreen;
