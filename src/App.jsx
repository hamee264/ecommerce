import { useState } from 'react'
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

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash')
  const [userEmail, setUserEmail] = useState('')
  const [currentCategory, setCurrentCategory] = useState('')
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)

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
    setCurrentScreen('cart')
  }

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId)
      return
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const handleClearCart = () => {
    setCartItems([])
  }

  const handleNavigateToProductDetail = (product) => {
    setSelectedProduct(product)
    setCurrentScreen('productDetail')
  }

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
            cartItemCount={cartItems.length}
          />
        )
      
      case 'cart':
        return (
          <CartScreen 
            cartItems={cartItems}
            onBack={() => setCurrentScreen('home')}
            onNavigateToHome={() => setCurrentScreen('home')}
            onNavigateToAddress={() => setCurrentScreen('address')}
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
          />
        )
      
      case 'productDetail':
        return (
          <ProductDetailScreen
            product={selectedProduct}
            onBack={handleBackFromProductDetail}
            onAddToCart={handleAddToCart}
            onNavigateToCart={handleNavigateToCart}
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
            cartItemCount={cartItems.length}
          />
        )
      
      default:
        return <HomeScreen onNavigateToCategory={handleNavigateToCategory} onOpenSidebar={handleSidebarNavigation} />
    }
  }

  return renderScreen()
}

export default App

