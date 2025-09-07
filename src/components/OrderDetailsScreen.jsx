import React from 'react';
import { ArrowLeft, Share2, Home, ShoppingCart, User } from 'lucide-react';
import './OrderDetailsScreen.css';

const OrderDetailsScreen = ({ 
  order,
  onBack, 
  onNavigateToHome,
  onNavigateToCart,
  cartItemCount = 0 
}) => {
  // Sample order data if none provided
  const defaultOrder = {
    id: '#162432',
    date: '29 Jan',
    dueDate: 'Due on receipt',
    balance: '$35.25',
    items: [
      { description: 'Pepper', rate: '$100', qty: 50, amount: '$100' },
      { description: 'Egg', rate: '$150', qty: 20, amount: '$450' },
      { description: 'Banana', rate: '$50', qty: 50, amount: '$250' },
      { description: 'Cow', rate: '$200', qty: 1, amount: '$200' }
    ],
    subtotal: '$1000',
    tax: '$0',
    total: '$1000',
    balanceDue: '$1000'
  };

  const orderData = order || defaultOrder;

  return (
    <div className="order-details-screen">
      <div className="main-content">
        {/* Header */}
        <header className="order-details-header">
          <div className="navigation-bar">
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={24} />
            </button>
            <h1 className="screen-title">Order Details</h1>
            <button className="share-btn">
              <Share2 size={24} />
            </button>
          </div>
        </header>

        {/* Order Details Content */}
        <main className="order-details-content">
          {/* Order Header */}
          <div className="order-header">
            <div className="order-id">{orderData.id}</div>
            <div className="order-info">
              <div className="order-date">Date {orderData.date}</div>
              <div className="order-due">{orderData.dueDate}</div>
              <div className="order-balance">Balance {orderData.balance}</div>
            </div>
          </div>

          {/* Items Table */}
          <div className="items-table">
            <div className="table-header">
              <div className="header-cell">Description</div>
              <div className="header-cell">Rate</div>
              <div className="header-cell">Qty</div>
              <div className="header-cell">Amount</div>
            </div>
            
            {orderData.items.map((item, index) => (
              <div key={index} className="table-row">
                <div className="table-cell description">{item.description}</div>
                <div className="table-cell rate">{item.rate}</div>
                <div className="table-cell qty">{item.qty}</div>
                <div className="table-cell amount">{item.amount}</div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">{orderData.subtotal}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Tax (0%)</span>
              <span className="summary-value">{orderData.tax}</span>
            </div>
            <div className="summary-row total">
              <span className="summary-label">Total</span>
              <span className="summary-value">{orderData.total}</span>
            </div>
            <div className="summary-row balance">
              <span className="summary-label">Balance Due</span>
              <span className="summary-value">{orderData.balanceDue}</span>
            </div>
          </div>

          {/* Authorized Sign */}
          <div className="authorized-sign">
            <div className="sign-line"></div>
            <div className="sign-label">Authorised Sign</div>
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

export default OrderDetailsScreen;
