import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ArrowLeft, Search, Home, ShoppingCart, User } from 'lucide-react';
import './ProductListingScreen.css';

const ProductListingScreen = ({
  category,
  searchQuery,
  onBack,
  onNavigateToCart,
  onAddToCart,
  onNavigateToProductDetail,
  onNavigateToProfile,
  cartItemCount = 0
}) => {
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Product data for different categories
  const categoryProducts = useMemo(() => ({
    fruits: [
      { id: 1, name: 'Pineapple', image: '/assets/Frame 3182 (1).png', price: '$2.99', description: 'Sweet tropical pineapple' },
      { id: 2, name: 'Banana', image: '/assets/Frame 3182 (2).png', price: '$1.49', description: 'Fresh yellow bananas' },
      { id: 3, name: 'Apple', image: '/assets/Frame 3182 (3).png', price: '$2.29', description: 'Crisp red apples' },
      { id: 4, name: 'Avocado', image: '/assets/Frame 3182 (15).png', price: '$3.99', description: 'Creamy ripe avocados' },
      { id: 5, name: 'Orange', image: '/assets/Frame 3182 (16).png', price: '$1.99', description: 'Juicy fresh oranges' },
      { id: 6, name: 'Watermelon', image: '/assets/Frame 3182 (17).png', price: '$4.99', description: 'Sweet summer watermelon' },
      { id: 7, name: 'Grapes', image: '/assets/Frame 3182 (18).png', price: '$3.49', description: 'Fresh green grapes' },
      { id: 8, name: 'Coconut', image: '/assets/Frame 3182 (19).png', price: '$2.99', description: 'Fresh tropical coconut' },
      { id: 9, name: 'Guava', image: '/assets/Frame 3182 (20).png', price: '$2.79', description: 'Sweet tropical guava' },
      { id: 10, name: 'Mango', image: '/assets/Frame 3182 (1).png', price: '$3.49', description: 'Sweet ripe mango' },
      { id: 11, name: 'Strawberry', image: '/assets/Frame 3182.png', price: '$4.99', description: 'Fresh red strawberries' },
      { id: 12, name: 'Blueberry', image: '/assets/Frame 3182 (2).png', price: '$5.99', description: 'Antioxidant-rich blueberries' }
    ],
    vegetables: [
      { id: 1, name: 'Bell Pepper', image: '/assets/Frame 3182 (4).png', price: '$1.99', description: 'Fresh colorful bell peppers' },
      { id: 2, name: 'Carrots', image: '/assets/Frame 3182 (5).png', price: '$1.49', description: 'Sweet crunchy carrots' },
      { id: 3, name: 'Tomatoes', image: '/assets/Frame 3182 (6).png', price: '$2.29', description: 'Juicy ripe tomatoes' },
      { id: 4, name: 'Onions', image: '/assets/Frame 3182 (7).png', price: '$1.79', description: 'Fresh cooking onions' },
      { id: 5, name: 'Potatoes', image: '/assets/Frame 3182 (8).png', price: '$2.99', description: 'Versatile cooking potatoes' },
      { id: 6, name: 'Spinach', image: '/assets/Frame 3182 (9).png', price: '$1.99', description: 'Nutritious leafy greens' }
    ],
    dairy: [
      { id: 1, name: 'Fresh Milk', image: '/assets/Frame 3182 (10).png', price: '$3.99', description: 'Fresh farm milk' },
      { id: 2, name: 'Cheese', image: '/assets/Frame 3182 (21).png', price: '$4.99', description: 'Artisan farm cheese' },
      { id: 3, name: 'Yogurt', image: '/assets/Frame 3182 (22).png', price: '$2.49', description: 'Creamy natural yogurt' },
      { id: 4, name: 'Butter', image: '/assets/Frame 3182 (23).png', price: '$3.29', description: 'Rich farm butter' },
      { id: 5, name: 'Cream', image: '/assets/Frame 3182 (24).png', price: '$2.99', description: 'Fresh heavy cream' }
    ],
    meats: [
      { id: 1, name: 'Beef', image: '/assets/Frame 3182 (11).png', price: '$8.99', description: 'Premium farm beef' },
      { id: 2, name: 'Chicken', image: '/assets/Frame 3182 (25).png', price: '$6.99', description: 'Fresh farm chicken' },
      { id: 3, name: 'Pork', image: '/assets/Frame 3182 (26).png', price: '$7.99', description: 'Quality farm pork' },
      { id: 4, name: 'Lamb', image: '/assets/Frame 3182 (11).png', price: '$9.99', description: 'Tender farm lamb' }
    ],
    livestock: [
      { id: 1, name: 'Cows', image: '/assets/cow.png', price: '$1200', description: 'Healthy dairy and beef cattle' },
      { id: 2, name: 'Goats', image: '/assets/Frame 3182 (14).png', price: '$300', description: 'Quality dairy and meat goats' },
      { id: 3, name: 'Sheep', image: '/assets/Frame 3182 (15).png', price: '$250', description: 'Premium wool and meat sheep' },
      { id: 4, name: 'Pigs', image: '/assets/Frame 3182 (16).png', price: '$400', description: 'Healthy farm-raised pigs' }
    ],
    seafood: [
      { id: 1, name: 'Salmon', image: '/assets/Frame 3182 (12).png', price: '$12.99', description: 'Fresh wild salmon' },
      { id: 2, name: 'Shrimp', image: '/assets/Frame 3182 (12).png', price: '$10.99', description: 'Large fresh shrimp' },
      { id: 3, name: 'Tuna', image: '/assets/Frame 3182 (12).png', price: '$11.99', description: 'Premium tuna steaks' },
      { id: 4, name: 'Crab', image: '/assets/Frame 3182 (12).png', price: '$15.99', description: 'Fresh whole crab' }
    ],
    grains: [
      { id: 1, name: 'Rice', image: '/assets/Frame 3182 (13).png', price: '$2.99', description: 'Premium long grain rice' },
      { id: 2, name: 'Wheat', image: '/assets/Frame 3182 (13).png', price: '$3.49', description: 'Whole grain wheat' },
      { id: 3, name: 'Oats', image: '/assets/Frame 3182 (13).png', price: '$2.79', description: 'Rolled oats' },
      { id: 4, name: 'Quinoa', image: '/assets/Frame 3182 (13).png', price: '$4.99', description: 'Organic quinoa' }
    ],
    herbs: [
      { id: 1, name: 'Basil', image: '/assets/Frame 3182 (9).png', price: '$2.99', description: 'Fresh aromatic basil leaves' },
      { id: 2, name: 'Oregano', image: '/assets/Frame 3182 (9).png', price: '$2.49', description: 'Dried oregano herbs' },
      { id: 3, name: 'Thyme', image: '/assets/Frame 3182 (9).png', price: '$2.79', description: 'Fresh thyme sprigs' },
      { id: 4, name: 'Rosemary', image: '/assets/Frame 3182 (9).png', price: '$3.49', description: 'Aromatic rosemary' },
      { id: 5, name: 'Parsley', image: '/assets/Frame 3182 (9).png', price: '$1.99', description: 'Fresh curly parsley' },
      { id: 6, name: 'Cilantro', image: '/assets/Frame 3182 (9).png', price: '$2.29', description: 'Fresh cilantro leaves' },
      { id: 7, name: 'Mint', image: '/assets/Frame 3182 (9).png', price: '$2.99', description: 'Fresh mint leaves' },
      { id: 8, name: 'Sage', image: '/assets/Frame 3182 (9).png', price: '$3.99', description: 'Dried sage leaves' }
    ],
    peppers: [
      { id: 1, name: 'Red Chili Pepper', image: '/assets/Frame 3182 (4).png', price: '$2.99', description: 'Spicy red chili peppers' },
      { id: 2, name: 'Banana Pepper', image: '/assets/Frame 3182 (4).png', price: '$1.99', description: 'Mild banana peppers' },
      { id: 3, name: 'Bell Pepper', image: '/assets/Frame 3182 (4).png', price: '$1.79', description: 'Sweet bell peppers' },
      { id: 4, name: 'Cherry Pepper', image: '/assets/Frame 3182 (4).png', price: '$2.49', description: 'Small cherry peppers' },
      { id: 5, name: 'Green Tomato Italian Pepper', image: '/assets/Frame 3182 (4).png', price: '$3.99', description: 'Italian green peppers' },
      { id: 6, name: 'Red Pepper', image: '/assets/Frame 3182 (4).png', price: '$1.99', description: 'Sweet red peppers' },
      { id: 7, name: 'Cayenne Pepper', image: '/assets/Frame 3182 (4).png', price: '$2.79', description: 'Hot cayenne peppers' },
      { id: 8, name: 'Carolina Reaper', image: '/assets/Frame 3182 (4).png', price: '$4.99', description: 'Extremely hot Carolina Reaper' }
    ],
    goats: [
      { id: 1, name: 'Goat Milk', image: '/assets/Frame 3182 (15).png', price: '$4.99', description: 'Fresh goat milk' },
      { id: 2, name: 'Goat Cheese', image: '/assets/Frame 3182 (15).png', price: '$5.99', description: 'Artisan goat cheese' },
      { id: 3, name: 'Goat Meat', image: '/assets/Frame 3182 (15).png', price: '$8.99', description: 'Fresh goat meat' },
      { id: 4, name: 'Goat Yogurt', image: '/assets/Frame 3182 (15).png', price: '$3.49', description: 'Creamy goat yogurt' }
    ]
  }), []);

  // Create "All Products" category by combining all products
  const getAllProducts = () => {
    const allProducts = [];
    Object.entries(categoryProducts).forEach(([categoryName, products]) => {
      products.forEach(product => {
        allProducts.push({ ...product, category: categoryName });
      });
    });
    return allProducts;
  };

  // Get all available categories
  const getAvailableCategories = () => {
    return Object.keys(categoryProducts).map(category => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1)
    }));
  };


  useEffect(() => {
    let baseProducts = [];
    
    console.log('useEffect triggered with category:', category);
    
    // Set products based on category or search
    if (category === 'all') {
      baseProducts = getAllProducts();
      console.log('All products loaded:', baseProducts.length);
    } else if (category && categoryProducts[category]) {
      baseProducts = categoryProducts[category];
      console.log('Category products loaded:', baseProducts.length, 'for category:', category);
    } else if (searchQuery) {
      // Search through all products
      baseProducts = getAllProducts().filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log('Search products loaded:', baseProducts.length);
    }

    console.log('Base products:', baseProducts);

    // Apply filter and sort only for "All Products" category
    if (category === 'all') {
      let filteredProducts = baseProducts;
      
      // Apply text filter
      if (filterValue) {
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          product.description.toLowerCase().includes(filterValue.toLowerCase())
        );
      }
      
      // Apply category filter
      if (filterCategory) {
        filteredProducts = filteredProducts.filter(product =>
          product.category === filterCategory
        );
      }
      
      // Apply sorting
      if (sortValue === 'price-low') {
        filteredProducts.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('$', ''));
          const priceB = parseFloat(b.price.replace('$', ''));
          return priceA - priceB;
        });
      } else if (sortValue === 'price-high') {
        filteredProducts.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('$', ''));
          const priceB = parseFloat(b.price.replace('$', ''));
          return priceB - priceA;
        });
      } else if (sortValue === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortValue === 'category') {
        filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
      }
      
      console.log('Setting filtered products:', filteredProducts.length);
      setProducts(filteredProducts);
    } else {
      console.log('Setting base products:', baseProducts.length);
      setProducts(baseProducts);
    }
  }, [category, searchQuery, filterValue, filterCategory, sortValue]);

  const getScreenTitle = () => {
    if (category === 'all') {
      return 'All Products';
    } else if (category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    } else if (searchQuery) {
      return searchQuery;
    }
    return 'Products';
  };


  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.filter-dropdown-container') && !event.target.closest('.sort-dropdown-container')) {
        setShowFilterDropdown(false);
        setShowSortDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className="product-listing-screen">
      
      <header className="product-listing-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
        <h1 className="screen-title">{getScreenTitle()}</h1>
        <button className="search-btn">
          <Search size={20} />
          </button>
      </header>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
            value={searchQuery}
            readOnly
          />
        </div>
        <button className="notification-btn">
          <div className="bell-icon">🔔</div>
          <div className="notification-dot"></div>
        </button>
      </div>

      {/* Filter and Sort Bar */}
        {category === 'all' && (
        <div className="filter-sort-bar">
            <div className="filter-dropdown-container">
              <button 
                className="filter-btn"
                onClick={() => {
                  setShowFilterDropdown(!showFilterDropdown);
                  setShowSortDropdown(false);
                }}
              >
                Filter {(filterValue || filterCategory) && `(${filterValue ? filterValue : ''}${filterValue && filterCategory ? ', ' : ''}${filterCategory ? filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1) : ''})`}
              </button>
              {showFilterDropdown && (
                <div className="filter-dropdown">
                  <div className="filter-section">
                    <label className="filter-label">Search by name/description:</label>
                    <input
                      type="text"
                      placeholder="Search products..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
                      className="filter-input"
                    />
                  </div>
                  
                  <div className="filter-section">
                    <label className="filter-label">Filter by category:</label>
                    <div className="category-options">
                      <button 
                        className={`category-option ${filterCategory === '' ? 'active' : ''}`}
                        onClick={() => setFilterCategory('')}
                      >
                        All Categories
                      </button>
                      {getAvailableCategories().map(cat => (
                        <button 
                          key={cat.value}
                          className={`category-option ${filterCategory === cat.value ? 'active' : ''}`}
                          onClick={() => setFilterCategory(cat.value)}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="filter-actions">
                    <button 
                      className="clear-filter-btn"
                      onClick={() => {
                        setFilterValue('');
                        setFilterCategory('');
                      }}
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="sort-dropdown-container">
              <button 
                className="sort-btn"
                onClick={() => {
                  setShowSortDropdown(!showSortDropdown);
                  setShowFilterDropdown(false);
                }}
              >
                Sort {sortValue && `(${sortValue.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())})`}
              </button>
              {showSortDropdown && (
                <div className="sort-dropdown">
                  <button 
                    className={`sort-option ${sortValue === 'price-low' ? 'active' : ''}`}
                    onClick={() => {
                      setSortValue('price-low');
                      setShowSortDropdown(false);
                    }}
                  >
                    Price: Low to High
                  </button>
                  <button 
                    className={`sort-option ${sortValue === 'price-high' ? 'active' : ''}`}
                    onClick={() => {
                      setSortValue('price-high');
                      setShowSortDropdown(false);
                    }}
                  >
                    Price: High to Low
                  </button>
                  <button 
                    className={`sort-option ${sortValue === 'name' ? 'active' : ''}`}
                    onClick={() => {
                      setSortValue('name');
                      setShowSortDropdown(false);
                    }}
                  >
                    Name: A to Z
                  </button>
                  <button 
                    className={`sort-option ${sortValue === 'category' ? 'active' : ''}`}
                    onClick={() => {
                      setSortValue('category');
                      setShowSortDropdown(false);
                    }}
                  >
                    Category: A to Z
                  </button>
                  <button 
                    className={`sort-option ${sortValue === '' ? 'active' : ''}`}
                    onClick={() => {
                      setSortValue('');
                      setShowSortDropdown(false);
                    }}
                  >
                    No Sorting
                  </button>
                </div>
              )}
            </div>
        </div>
      )}

      {/* Products Grid */}
      <main className="products-content">
         <div className="products-grid">
           {console.log('Products:', products)}
           {products.length === 0 && <div>No products found</div>}
           {products.map(product => (
             <div key={product.id} className="product-item">
               <div className="product-card">
                 <div className="product-image" onClick={() => onNavigateToProductDetail(product)}>
                 <img src={product.image} alt={product.name} />
                   <div className="product-arrow">
                     <span className="arrow-icon">→</span>
                   </div>
               </div>
               <div className="product-info">
                   <div className="product-price">{product.price}</div>
                 <button
                   className="add-to-cart-btn"
                     onClick={(e) => {
                       e.stopPropagation();
                       onAddToCart(product);
                     }}
                 >
                     Add to cart
                 </button>
               </div>
               </div>
               <h3 className="product-name">{product.name}</h3>
             </div>
           ))}
         </div>
      </main>

      

      {/* Bottom Navigation */}
      <nav className="bottom-navigation">
        <div className="nav-item">
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
  );
};
export default ProductListingScreen;
