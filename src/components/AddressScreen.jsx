import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './AddressScreen.css';

const AddressScreen = ({ onBack, onContinue }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: ''
  });
  const [saveAsPrimary, setSaveAsPrimary] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreeToTerms) {
      onContinue();
    }
  };

  return (
    <div className="address-screen">
      <div className="main-content">
        {/* Header */}
        <header className="address-header">
          <div className="navigation-bar">
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={24} />
            </button>
            <h1 className="screen-title">Address</h1>
            <div className="spacer"></div>
          </div>
        </header>

        {/* Address Form */}
        <main className="address-content">
          <form className="address-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your full name"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your email"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input 
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your phone number"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <input 
                type="text" 
                name="address" 
                value={formData.address}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your address"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">City</label>
              <input 
                type="text" 
                name="city" 
                value={formData.city}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your city"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">State</label>
              <input 
                type="text" 
                name="state" 
                value={formData.state}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your state"
                required 
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={saveAsPrimary}
                  onChange={(e) => setSaveAsPrimary(e.target.checked)}
                  className="checkbox-input"
                />
                <span className="checkbox-text">Save as primary Address</span>
              </label>

              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="checkbox-input"
                  required
                />
                <span className="checkbox-text">Agree to terms and conditions</span>
              </label>
            </div>

            <div className="info-text">
              <p>This is not a final purchase. Prices and confirmations are pending.</p>
            </div>

            <button 
              type="submit" 
              className="confirm-btn"
              disabled={!agreeToTerms}
            >
              Confirm
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddressScreen;