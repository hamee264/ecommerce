import { useState, useEffect } from 'react'
import SplashScreen from './components/SplashScreen'
import WelcomeScreen from './components/WelcomeScreen'
import LoginScreen from './components/LoginScreen'
import SignUpScreen from './components/SignUpScreen'
import VerificationScreen from './components/VerificationScreen'
import ForgotPasswordScreen from './components/ForgotPasswordScreen'
import SetNewPasswordScreen from './components/SetNewPasswordScreen'
import PasswordResetSuccessScreen from './components/PasswordResetSuccessScreen'
import AccountCreationSuccessScreen from './components/AccountCreationSuccessScreen'
import HomeScreen from './components/HomeScreen'
import ProductListingScreen from './components/ProductListingScreen'
import CartScreen from './components/CartScreen'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import AddressScreen from './components/AddressScreen'
import OrderSuccessScreen from './components/OrderSuccessScreen'
import PaymentMethodScreen from './components/PaymentMethodScreen'
import PaymentSuccessScreen from './components/PaymentSuccessScreen'
import MyOrderScreen from './components/MyOrderScreen'
import ProductDetailScreen from './components/ProductDetailScreen'
import ProfileScreen from './components/ProfileScreen'
import OrderDetailsScreen from './components/OrderDetailsScreen'
import AccountSettingsScreen from './components/AccountSettingsScreen'
import NotificationsScreen from './components/NotificationsScreen'
import HelpAndSupportScreen from './components/HelpAndSupportScreen'

// CSS imports
import './components/ProfileScreen.css'
import './components/OrderDetailsScreen.css'
import './App.css'
import './components/SplashScreen.css'
import './components/WelcomeScreen.css'
import './components/LoginScreen.css'
import './components/SignUpScreen.css'
import './components/ForgotPasswordScreen.css'
import './components/VerificationScreen.css'
import './components/SetNewPasswordScreen.css'
import './components/PasswordResetSuccessScreen.css'
import './components/AccountCreationSuccessScreen.css'
import './components/HomeScreen.css'
import './components/ProductListingScreen.css'
import './components/CartScreen.css'
import './components/Dashboard.css'
import './components/Sidebar.css'
import './components/AddressScreen.css'
import './components/OrderSuccessScreen.css'
import './components/PaymentMethodScreen.css'
import './components/PaymentSuccessScreen.css'
import './components/MyOrderScreen.css'
import './components/ProductDetailScreen.css'
import './components/AccountSettingsScreen.css'
import './components/NotificationsScreen.css'
import './components/HelpAndSupportScreen.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash')
  const [userEmail, setUserEmail] = useState('')
  const [currentCategory, setCurrentCategory] = useState('')
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setCurrentScreen('productListing');
      setCurrentCategory('search');
    } else {
      // Optional: handle empty search, e.g., go back to home or clear results
      setCurrentScreen('home');
      setCurrentCategory('');
    }
  };
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('ecommerce_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('ecommerce_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [previousScreen, setPreviousScreen] = useState(null)
  const [products, setProducts] = useState([]); // Lifted products state

  const handleGetStarted = () => {
    setCurrentScreen('login')
  }

  const handleLogin = (formData) => {
    setUserEmail(formData.email)
    setCurrentScreen('welcomeAfterLogin')
  }

  const handleSignUp = (formData) => {
    setUserEmail(formData.email)
    setCurrentScreen('verification')
  }

  const handleVerificationSuccess = () => {
    setCurrentScreen('accountCreationSuccess')
  }

  const handleForgotPassword = () => {
    setCurrentScreen('forgotPassword')
  }

  const handleResetPassword = () => {
    setCurrentScreen('verificationForgotPassword')
  }

  const handleVerificationForgotPassword = () => {
    setCurrentScreen('setNewPassword')
  }

  const handleSetNewPassword = () => {
    setCurrentScreen('passwordResetSuccess')
  }

  const handleProceedToLogin = () => {
    setCurrentScreen('login')
  }

  const handleNavigateToCategory = (category) => {
    setCurrentCategory(category)
    setCurrentScreen('productListing')
  }

  const handleBackFromProductListing = () => {
    setCurrentScreen('home')
    setCurrentCategory('')
    setSearchQuery('')
  }

  const handleNavigateToCart = () => {
    setPreviousScreen(currentScreen)
    setCurrentScreen('cart')
  }

  const handleBackFromCart = () => {
    setCurrentScreen(previousScreen || 'home')
  }

  const handleAddToCart = (productToAdd) => {
    // First, update the cart items
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);
      if (existingItem) {
        if (existingItem.quantity < productToAdd.stock) {
          return prevItems.map(item =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return prevItems; // Silently ignore if stock limit is reached
      } else {
        if (productToAdd.stock > 0) {
          return [...prevItems, { ...productToAdd, quantity: 1 }];
        }
        return prevItems; // Silently ignore if out of stock
      }
    });

    // Then, update the central products state to reflect the new stock count
    setProducts(currentProducts =>
      currentProducts.map(p => {
        if (p.id === productToAdd.id) {
          const newStock = p.stock - 1;
          return {
            ...p,
            stock: newStock,
            inStock: newStock > 0,
          };
        }
        return p;
      })
    );
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }

    setCartItems(prevItems => {
      const itemToUpdate = prevItems.find(item => item.id === productId);

      if (itemToUpdate && newQuantity > itemToUpdate.stock) {
        return prevItems; // Silently ignore if stock limit is reached
      }

      return prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const handleNavigateToProductDetail = (product) => {
    // Ensure we are passing the most up-to-date product object
    const currentProduct = products.find(p => p.id === product.id) || product;
    setSelectedProduct(currentProduct);
    setCurrentScreen('productDetail');
  };

  const handleBackFromProductDetail = () => {
    setSelectedProduct(null)
    setCurrentScreen('productListing')
  }

  const handleNavigateToProfile = () => {
    setCurrentScreen('profile')
  }

  const handleNavigateToMyOrders = () => {
    setCurrentScreen('myOrder')
  }

  const handleNavigateToOrderDetails = (order) => {
    setSelectedOrder(order)
    setCurrentScreen('orderDetails')
  }

  const handleNavigateToAccountSettings = () => {
    setCurrentScreen('accountSettings');
  };

  const handleNavigateToNotifications = () => {
    setCurrentScreen('notifications');
  };

  const handleNavigateToHelpAndSupport = () => {
    setCurrentScreen('helpAndSupport');
  };

  const handleSidebarNavigation = (item) => {
    setActiveSidebarItem(item)
    if (item === 'dashboard') {
      setCurrentScreen('dashboard')
    } else if (item === 'cart') {
      handleNavigateToCart()
    } else {
      setCurrentScreen('home')
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={() => setCurrentScreen('welcome')} />
      
      case 'welcome':
        return <WelcomeScreen onGetStarted={handleGetStarted} />
      
      case 'welcomeAfterLogin':
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('home')} isAfterLogin={true} />
      
      case 'accountCreationSuccess':
        return <AccountCreationSuccessScreen onContinue={() => setCurrentScreen('home')} />
      
      case 'login':
        return (
          <LoginScreen
            onBack={() => setCurrentScreen('welcome')}
            onLogin={handleLogin}
            onForgotPassword={handleForgotPassword}
            onSignUp={() => setCurrentScreen('signup')}
          />
        )
      
      case 'signup':
        return (
          <SignUpScreen
            onBack={() => setCurrentScreen('welcome')}
            onSignUp={handleSignUp}
          />
        )
      
      case 'verification':
        return (
          <VerificationScreen
            onBack={() => setCurrentScreen('signup')}
            onVerify={handleVerificationSuccess}
            email={userEmail}
          />
        )
      
      case 'forgotPassword':
        return (
          <ForgotPasswordScreen
            onBack={() => setCurrentScreen('login')}
            onResetPassword={handleResetPassword}
          />
        )
      
      case 'verificationForgotPassword':
        return (
          <VerificationScreen
            onBack={() => setCurrentScreen('forgotPassword')}
            onVerify={handleVerificationForgotPassword}
            email={userEmail}
            isForgotPassword={true}
          />
        )
      
      case 'setNewPassword':
        return (
          <SetNewPasswordScreen
            onBack={() => setCurrentScreen('verificationForgotPassword')}
            onSave={handleSetNewPassword}
          />
        )
      
      case 'passwordResetSuccess':
        return (
          <PasswordResetSuccessScreen
            onProceedToLogin={handleProceedToLogin}
          />
        )
      
      case 'home':
        return (
          <HomeScreen 
            onNavigateToCategory={handleNavigateToCategory}
            onNavigateToCart={handleNavigateToCart}
            onNavigateToProfile={handleNavigateToProfile}
            onSearch={handleSearch} // Pass the handler
            cartItemCount={cartItems.length}
          />
        )
      
      case 'productListing':
        return (
          <ProductListingScreen 
            category={currentCategory}
            searchQuery={searchQuery}
            onBack={handleBackFromProductListing}
            onNavigateToCart={handleNavigateToCart}
            onAddToCart={handleAddToCart}
            onNavigateToProductDetail={handleNavigateToProductDetail}
            onNavigateToProfile={handleNavigateToProfile}
            onNavigateToHome={() => setCurrentScreen('home')}
            onSearch={handleSearch} // Pass the handler
            setSearchQuery={setSearchQuery} // Pass the setter
            products={products} // Pass down products
            setProducts={setProducts} // Pass down setter
            cartItemCount={cartItems.length}
          />
        )
      
      case 'cart':
        return (
          <CartScreen 
            cartItems={cartItems}
            onBack={handleBackFromCart}
            onNavigateToHome={handleBackFromCart}
            onNavigateToAddress={() => setCurrentScreen('address')}
            onNavigateToProfile={handleNavigateToProfile}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onClearCart={handleClearCart}
          />
        )
      
      case 'address':
        return (
          <AddressScreen
            onBack={() => setCurrentScreen('cart')}
            onContinue={() => setCurrentScreen('orderSuccess')}
          />
        )
      
      case 'orderSuccess':
        return (
          <OrderSuccessScreen
            onContinue={() => setCurrentScreen('paymentMethod')}
          />
        )
      
      case 'paymentMethod':
        return (
          <PaymentMethodScreen
            onBack={() => setCurrentScreen('orderSuccess')}
            onContinue={() => setCurrentScreen('paymentSuccess')}
          />
        )
      
      case 'paymentSuccess':
        return (
          <PaymentSuccessScreen
            onContinue={() => setCurrentScreen('myOrder')}
          />
        )
      
      case 'myOrder':
        return (
          <MyOrderScreen
            onBack={() => setCurrentScreen('profile')}
            onNavigateToOrderDetails={handleNavigateToOrderDetails}
            onNavigateToHome={() => setCurrentScreen('home')}
            onNavigateToCart={handleNavigateToCart}
            onNavigateToProfile={handleNavigateToProfile}
          />
        )
      
      case 'productDetail':
        return (
          <ProductDetailScreen
            key={`${selectedProduct?.id}-${selectedProduct?.stock}`}
            product={selectedProduct}
            onBack={handleBackFromProductDetail}
            onAddToCart={handleAddToCart}
            onNavigateToCart={handleNavigateToCart}
            onNavigateToHome={() => setCurrentScreen('home')}
            onNavigateToProfile={handleNavigateToProfile}
            cartItemCount={cartItems.length}
          />
        )
      
      case 'dashboard':
        return (
          <div className="app-with-sidebar">
            <Sidebar 
              activeItem={activeSidebarItem}
              onNavigate={handleSidebarNavigation}
            />
            <Dashboard />
          </div>
        )
      
      case 'profile':
        return (
          <ProfileScreen
            onBack={() => setCurrentScreen('home')}
            onNavigateToHome={() => setCurrentScreen('home')}
            onNavigateToCart={handleNavigateToCart}
            onNavigateToMyOrders={handleNavigateToMyOrders}
            onNavigateToAccountSettings={handleNavigateToAccountSettings}
            onNavigateToNotifications={handleNavigateToNotifications}
            onNavigateToHelpAndSupport={handleNavigateToHelpAndSupport}
            cartItemCount={cartItems.length}
          />
        )
      
      case 'orderDetails':
        return (
          <OrderDetailsScreen
            order={selectedOrder}
            onBack={() => setCurrentScreen('myOrder')}
            onNavigateToHome={() => setCurrentScreen('home')}
            onNavigateToCart={handleNavigateToCart}
            onNavigateToProfile={handleNavigateToProfile}
            cartItemCount={cartItems.length}
          />
        )
      
      case 'accountSettings':
        return <AccountSettingsScreen onBack={() => setCurrentScreen('profile')} />;

      case 'notifications':
        return <NotificationsScreen onBack={() => setCurrentScreen('profile')} />;

      case 'helpAndSupport':
        return <HelpAndSupportScreen onBack={() => setCurrentScreen('profile')} />;

      default:
        return <HomeScreen onNavigateToCategory={handleNavigateToCategory} onOpenSidebar={handleSidebarNavigation} />
    }
  }

  return renderScreen()
}

export default App
