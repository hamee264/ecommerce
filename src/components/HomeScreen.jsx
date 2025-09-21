import { Search, Bell, Home, ShoppingCart, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const HomeScreen = ({
  onNavigateToCart,
  onNavigateToCategory,
  onNavigateToProfile,
  onSearch,
  cartItemCount = 0
}) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/assets/Frame 3182.png',
      title: 'Fresh & Healthy',
      description: 'Discover the best farm-fresh products, from vibrant fruits to organic vegetables, delivered right to your door.',
    },
    {
      image: '/assets/Frame 3182 (1).png',
      title: 'Quality Livestock',
      description: 'Ethically raised and sourced for the best quality meat and dairy products.',
    },
    {
      image: '/assets/Frame 3182 (2).png',
      title: 'Organic Grains',
      description: 'A wide selection of whole grains, flours, and cereals for a healthy diet.',
    },
    {
      image: '/assets/Frame 3182 (3).png',
      title: 'Sweet & Juicy',
      description: 'Hand-picked, seasonal fruits at the peak of their freshness and flavor.',
    },
    {
      image: '/assets/Frame 3182 (4).png',
      title: 'Vibrant Flowers',
      description: 'Brighten your home with our beautiful, locally-grown flower arrangements.',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleSearchChange = (e) => {
    setLocalSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearchQuery);
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
                value={localSearchQuery}
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
          {/* Hero Carousel Section */}
          <section className="hero-carousel-section">
            <div className="hero-carousel-container">
              {/* Image Panel (Left Side) */}
              <div className="hero-image-panel">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="hero-main-image"
                />
                <div className="hero-nav-buttons">
                  <button className="hero-nav-btn" onClick={previousSlide}>
                    <ArrowLeft size={24} />
                  </button>
                  <button className="hero-nav-btn" onClick={nextSlide}>
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>

              {/* Text Panel (Right Side) */}
              <div className="hero-text-panel">
                <h2 className="hero-title">{slides[currentSlide].title}</h2>
                <p className="hero-description">
                  {slides[currentSlide].description}
                </p>
                <button className="hero-cta-btn" onClick={() => onNavigateToCategory('all')}>
                  Shop Now
                </button>
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