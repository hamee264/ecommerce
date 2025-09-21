import React from 'react';
import { ArrowLeft, User, Plus, Minus, Trash2 } from 'lucide-react';

const CartScreen = ({ 
  cartItems = [], 
  onBack, 
  onNavigateToHome, 
  onNavigateToAddress,
  onNavigateToProfile,
  onUpdateQuantity,
  onRemoveItem
}) => {

  const updateQuantity = (id, newQuantity) => {
    onUpdateQuantity(id, newQuantity);
  };

  const removeItem = (id) => {
    onRemoveItem(id);
  };

  return (
    <div className="cart-screen">
      <div className="main-content">
        {/* Header */}
      <header className="cart-header">
          <div className="navigation-bar">
        <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={24} />
        </button>
            <h1 className="screen-title">My Carts</h1>
            <button className="profile-btn">
              <User size={24} />
        </button>
          </div>
      </header>

        {/* Cart Content */}
      <main className="cart-content">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
              <div className="empty-cart-message">
                <h2>Your cart is empty. Add items to proceed.</h2>
              </div>
              <div className="cart-actions">
                <button 
                  className="pre-order-btn" 
                  onClick={onNavigateToAddress}
                  disabled={true}
                >
                  Pre-Order Now
                </button>
              </div>
          </div>
        ) : (
            <>
          <div className="cart-items">
            {cartItems.map(item => (
                  <div key={item.id} className="cart-item-card">
                    <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                    <div className="cart-item-info">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-description">{item.description}</p>
                      <div className="cart-item-controls">
                        <div className="quantity-selector">
                        <button 
                            className="quantity-btn minus"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={16} />
                        </button>
                          <span className="quantity-display">
                            {item.quantity} {item.unit}
                          </span>
                        <button 
                            className="quantity-btn plus"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                          <Trash2 size={18} />
                  </button>
                      </div>
                </div>
              </div>
            ))}
          </div>

              {/* Pre-Order Button */}
              <div className="cart-actions">
                <button 
                  className="pre-order-btn" 
                  onClick={onNavigateToAddress}
                  disabled={cartItems.length === 0}
                >
                  Pre-Order Now
                </button>
              </div>
            </>
        )}
      </main>

        {/* Bottom Navigation */}
        <nav className="bottom-navigation">
          <div className="nav-item" onClick={onNavigateToHome}>
            <div className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <span className="nav-label">Home</span>
          </div>
          <div className="nav-item active">
            <div className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <span className="nav-label">Cart</span>
          </div>
          <div className="nav-item" onClick={onNavigateToProfile}>
            <div className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <span className="nav-label">Profile</span>
          </div>
        </nav>
        </div>
    </div>
  );
};

export default CartScreen;
