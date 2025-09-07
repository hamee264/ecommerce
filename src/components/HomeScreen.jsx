import { Search, Bell, Home, ShoppingCart, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const HomeScreen = ({ 
  onNavigateToCart,
  onNavigateToCategory,
  onNavigateToProfile,
  cartItemCount = 0
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 5);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 5) % 5);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigateToCategory('search');
    }
  };

  return (
    <div className="home-screen">
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="home-header">
          
          <div className="navigation-bar">
            
            <form className="search-container" onSubmit={handleSearchSubmit}>
              <button type="button" className="search-back-btn" onClick={() => window.history.back()}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <input 
                type="text" 
                placeholder="Search" 
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button 
                type="submit" 
                className="search-submit-btn"
                aria-label="Search"
              >
                <Search size={18} className="search-right-icon" />
              </button>
            </form>
            
            <button className="notification-btn">
              <Bell size={20} />
              <div className="notification-dot"></div>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="home-content">
          {/* Farm Products Section - Simple Carousel */}
          <section className="farm-products-section">
            <h2 className="section-title">Farm Products</h2>
            <div className="farm-products-carousel">
              <div className="carousel-container">
                <div className={`carousel-slide ${currentSlide === 0 ? 'active' : ''}`}>
                  <img 
                    src="/assets/Frame 3182.png" 
                    alt="Fresh Strawberries" 
                    className="carousel-image"
                  />
                </div>
                <div className={`carousel-slide ${currentSlide === 1 ? 'active' : ''}`}>
                  <img 
                    src="/assets/Frame 3182 (1).png" 
                    alt="Organic Pineapple" 
                    className="carousel-image"
                  />
                </div>
                <div className={`carousel-slide ${currentSlide === 2 ? 'active' : ''}`}>
                  <img 
                    src="/assets/Frame 3182 (2).png" 
                    alt="Fresh Bananas" 
                    className="carousel-image"
                  />
                </div>
                <div className={`carousel-slide ${currentSlide === 3 ? 'active' : ''}`}>
                  <img 
                    src="/assets/Frame 3182 (3).png" 
                    alt="Fresh Apples" 
                    className="carousel-image"
                  />
                  </div>
                <div className={`carousel-slide ${currentSlide === 4 ? 'active' : ''}`}>
                  <img 
                    src="/assets/Frame 3182 (4).png" 
                    alt="Organic Carrots" 
                    className="carousel-image"
                  />
                </div>
              </div>
              
              {/* Carousel Navigation */}
              <div className="carousel-nav">
                {[...Array(5)].map((_, index) => (
                <button 
                    key={index}
                    className={`carousel-dot ${currentSlide === index ? 'active' : ''}`} 
                    onClick={() => setCurrentSlide(index)}
                ></button>
                ))}
              </div>
            </div>
          </section>
          
          {/* Categories Section */}
          <section className="categories-section">
            <h2 className="section-title">Categories</h2>
            <div className="categories-grid">
              <div className="category-card" onClick={() => onNavigateToCategory('all')}>
                <h3 className="category-title">All Products</h3>
                <div className="category-image">
                  <img 
                    src="/assets/Frame 3182.png" 
                    alt="All Products" 
                  />
                </div>
              </div>
              <div className="category-card" onClick={() => onNavigateToCategory('fruits')}>
                <h3 className="category-title">Fruits</h3>
                <div className="category-image">
                  <img 
                    src="/assets/Frame 3182 (1).png" 
                    alt="Fruits" 
                  />
                </div>
              </div>
              <div className="category-card" onClick={() => onNavigateToCategory('vegetables')}>
                <h3 className="category-title">Vegetables</h3>
                <div className="category-image">
                  <img 
                    src="/assets/Frame 3182 (4).png" 
                    alt="Vegetables" 
                  />
                </div>
              </div>
              <div className="category-card" onClick={() => onNavigateToCategory('herbs')}>
                <h3 className="category-title">Herbs</h3>
                <div className="category-image">
                  <img 
                    src="/assets/Frame 3182 (9).png" 
                    alt="Herbs" 
                  />
                </div>
              </div>
              <div className="category-card" onClick={() => onNavigateToCategory('livestock')}>
                <h3 className="category-title">Livestock</h3>
                <div className="category-image">
                  <img 
                    src="/assets/cow.png" 
                    alt="Livestock" 
                  />
                </div>
              </div>
              <div className="category-card" onClick={() => onNavigateToCategory('grains')}>
                <h3 className="category-title">Grains</h3>
                <div className="category-image">
                  <img 
                    src="/assets/Frame 3182 (13).png" 
                    alt="Grains" 
                  />
                </div>
              </div>
              <div className="category-card" onClick={() => onNavigateToCategory('flowers')}>
                <h3 className="category-title">Flowers</h3>
                <div className="category-image">
                  <img 
                    src="/assets/Frame 3182 (9).png" 
                    alt="Flowers" 
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Bottom Navigation Bar */}
        <nav className="bottom-navigation">
          <div className="nav-item active">
            <div className="nav-icon">
              <Home size={20} />
            </div>
            <span className="nav-label">Home</span>
          </div>
          <div className="nav-item" onClick={() => onNavigateToCart()}>
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

export default HomeScreen;