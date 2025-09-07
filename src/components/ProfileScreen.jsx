import React from 'react';
import { ArrowLeft, Home, ShoppingCart, User, Bell } from 'lucide-react';
import './ProfileScreen.css';

const ProfileScreen = ({ 
  onBack, 
  onNavigateToHome,
  onNavigateToCart,
  onNavigateToMyOrders,
  cartItemCount = 0 
}) => {
  return (
    <div className="profile-screen">
      <div className="main-content">
        {/* Header */}
        <header className="profile-header">
          <div className="navigation-bar">
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={24} />
            </button>
            <h1 className="screen-title">Profile</h1>
            <button className="notification-btn">
              <Bell size={24} />
              <div className="notification-dot"></div>
            </button>
          </div>
        </header>

        {/* Profile Content */}
        <main className="profile-content">
          {/* User Info Section */}
          <div className="user-info-section">
            <div className="user-avatar">
              <User size={48} />
            </div>
            <div className="user-details">
              <h2 className="user-name">John Doe</h2>
              <p className="user-email">john.doe@example.com</p>
              <p className="user-phone">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Profile Options */}
          <div className="profile-options">
            <div className="option-card" onClick={onNavigateToMyOrders}>
              <div className="option-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
              </div>
              <div className="option-content">
                <h3 className="option-title">My Orders</h3>
                <p className="option-description">View your order history and track ongoing orders</p>
              </div>
              <div className="option-arrow">→</div>
            </div>

            <div className="option-card">
              <div className="option-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="option-content">
                <h3 className="option-title">Account Settings</h3>
                <p className="option-description">Manage your account information and preferences</p>
              </div>
              <div className="option-arrow">→</div>
            </div>

            <div className="option-card">
              <div className="option-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="option-content">
                <h3 className="option-title">Notifications</h3>
                <p className="option-description">Manage your notification preferences</p>
              </div>
              <div className="option-arrow">→</div>
            </div>

            <div className="option-card">
              <div className="option-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                  <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                </svg>
              </div>
              <div className="option-content">
                <h3 className="option-title">Help & Support</h3>
                <p className="option-description">Get help and contact support</p>
              </div>
              <div className="option-arrow">→</div>
            </div>

            <div className="option-card">
              <div className="option-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16,17 21,12 16,7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
              </div>
              <div className="option-content">
                <h3 className="option-title">Logout</h3>
                <p className="option-description">Sign out of your account</p>
              </div>
              <div className="option-arrow">→</div>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="bottom-navigation">
          <div className="nav-item" onClick={onNavigateToHome}>
            <div className="nav-icon">
              <Home size={20} />
            </div>
            <span className="nav-label">Home</span>
          </div>
          <div className="nav-item" onClick={onNavigateToCart}>
            <div className="nav-icon">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </div>
            <span className="nav-label">Cart</span>
          </div>
          <div className="nav-item active">
            <div className="nav-icon">
              <User size={20} />
            </div>
            <span className="nav-label">Profile</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ProfileScreen;
