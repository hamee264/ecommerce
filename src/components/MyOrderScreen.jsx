import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './MyOrderScreen.css';

const MyOrderScreen = ({ onBack, onNavigateToOrderDetails, onNavigateToHome, onNavigateToCart, onNavigateToProfile }) => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const ongoingOrders = [
    {
      id: 1,
      name: 'Tomatoes',
      image: '/assets/Frame 3182 (6).png',
      quantity: '300 kg',
      orderNumber: '#502433',
      status: 'ORDERED'
    },
    {
      id: 2,
      name: 'Beef',
      image: '/assets/Frame 3182 (11).png',
      quantity: '3 tons',
      orderNumber: '#502434',
      status: 'ORDERED'
    },
    {
      id: 3,
      name: 'Dried corn',
      image: '/assets/Frame 3182 (13).png',
      quantity: '100 kg',
      orderNumber: '#502435',
      status: 'ORDERED'
    }
  ];

  const historyOrders = [
    {
      id: 4,
      name: 'Tomatoes',
      image: '/assets/Frame 3182 (6).png',
      quantity: '200 kg',
      orderNumber: '#502430',
      status: 'DELIVERED'
    },
    {
      id: 5,
      name: 'Beef',
      image: '/assets/Frame 3182 (11).png',
      quantity: '2 tons',
      orderNumber: '#502431',
      status: 'DELIVERED'
    },
    {
      id: 6,
      name: 'Dried corn',
      image: '/assets/Frame 3182 (13).png',
      quantity: '100 kg',
      orderNumber: '#502432',
      status: 'DELIVERED'
    }
  ];

  const currentOrders = activeTab === 'ongoing' ? ongoingOrders : historyOrders;

  return (
    <div className="my-order-screen">
      <div className="main-content">
        {/* Header */}
        <header className="order-header">
          <div className="navigation-bar">
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={24} />
            </button>
            <h1 className="screen-title">My Order</h1>
            <div className="spacer"></div>
          </div>
        </header>

        {/* Tabs */}
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'ongoing' ? 'active' : ''}`}
            onClick={() => setActiveTab('ongoing')}
          >
            Ongoing
          </button>
          <button 
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            History
          </button>
        </div>

        {/* Orders List */}
        <main className="orders-content">
          <div className="orders-list">
            {currentOrders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-image">
                  <img src={order.image} alt={order.name} />
                </div>
                <div className="order-info">
                  <h3 className="order-name">{order.name}</h3>
                  <p className="order-quantity">{order.quantity}</p>
                  <div className="order-number" onClick={() => onNavigateToOrderDetails(order)}>
                    {order.orderNumber}
                  </div>
                </div>
                <div className="order-actions">
                  <div className="order-status">
                    <span className={`status-tag ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <button className="rate-btn">
                    Rate
                  </button>
                  <button className="reorder-btn">
                    Re-Order
                  </button>
                </div>
              </div>
            ))}
          </div>
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
          <div className="nav-item" onClick={onNavigateToCart}>
            <div className="nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <span className="nav-label">Cart</span>
          </div>
          <div className="nav-item active" onClick={onNavigateToProfile}>
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

export default MyOrderScreen;
