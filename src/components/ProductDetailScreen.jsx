import React from 'react';
import { ArrowLeft, Home, ShoppingCart, User } from 'lucide-react';
import './ProductDetailScreen.css';

const ProductDetailScreen = ({ 
  product, 
  onBack, 
  onAddToCart, 
  onNavigateToCart,
  onNavigateToHome,
  onNavigateToProfile,
  cartItemCount = 0 
}) => {
  if (!product) {
    return (
      <div className="product-detail-screen">
        <div className="error-message">
          <h2>Product not found</h2>
          <button onClick={onBack} className="back-btn">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-screen">
      <div className="main-content">
        {/* Header */}
        <header className="detail-header">
          <div className="navigation-bar">
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={24} />
            </button>
            <h1 className="screen-title">Product Details</h1>
            <div className="spacer"></div>
          </div>
        </header>

        {/* Product Details */}
        <main className="product-detail-content">
          <div className="product-detail-container">
            {/* Product Image */}
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>

            {/* Product Info */}
            <div className="product-detail-info">
              <h2 className="product-detail-name">{product.name}</h2>
              <p className="product-detail-description">{product.description}</p>
              <div className="product-detail-price">{product.price}</div>

              <div className="stock-info">
                {product.inStock ? (
                  <span className="stock-status in-stock">
                    {product.stock} remaining
                  </span>
                ) : (
                  <span className="stock-status out-of-stock">
                    Out of stock
                  </span>
                )}
              </div>
              
              {/* Add to Cart Button */}
              <button 
                className={`product-detail-add-to-cart ${!product.inStock ? 'disabled' : ''}`}
                onClick={() => {
                  if (product.inStock) {
                    onAddToCart(product);
                  }
                }}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of stock'}
              </button>
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
          <div className="nav-item" onClick={onNavigateToProfile}>
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

export default ProductDetailScreen;
