# FC FARMS CONNECTS

A modern React application designed to match the FC FARMS CONNECTS mobile app design, featuring a clean and responsive interface for farm produce delivery services.

## 🎨 Design Features

### Screens
1. **Splash Screen** - FC FARMS CONNECTS logo with smooth fade-in animation
2. **Welcome Screen** - Onboarding with cow image and "Get Started" button
3. **Login Screen** - User authentication with social login options
4. **Sign Up Screen** - Account creation with form validation
5. **Forgot Password Selection** - Choose between email or phone verification
6. **Verification Email** - 6-digit code input for email verification
7. **Forgot Password Code Entry** - Code verification for password reset
8. **Set New Password** - Create new password with requirements
9. **Password Reset Success** - Success confirmation with proceed button
10. **Account Creation Success** - Success screen after account creation with welcome message
11. **Home Screen** - Modern mobile app interface with Farm Products and Categories
12. **Category Screen** - Product grid layout for specific categories (Fruits, Vegetables, Herbs)
13. **Search Screen** - Search results with filter/sort options and product grid
14. **Sidebar Navigation** - Responsive overlay sidebar with FC FARMS CONNECTS branding (hidden by default, icon-only on small screens)
15. **Dashboard** - Separate admin dashboard page with statistics and recent activity

**Note**: The Welcome Screen now appears in two scenarios:
- Initial onboarding (first time users)
- After successful login (returning users)

### Design Elements
- **Color Scheme**: Green (#10b981) primary, white background, gray accents
- **Typography**: Inter font family for modern, clean appearance
- **Layout**: Mobile-first responsive design with laptop/desktop optimization
- **Components**: Reusable UI components with consistent styling

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd react1

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎯 Features

### Complete Authentication Flow
- Splash screen with auto-transition
- Welcome/onboarding experience
- User login with email/password → Welcome back screen
- User registration with validation → Account creation success screen
- Social login options (Google, Apple, Facebook)
- **Forgot password workflow**:
  - Selection between email/phone verification
  - 6-digit code verification
  - New password creation with requirements
  - Success confirmation
- **Email verification** for new accounts

### Main Application Flow
- **Home Screen**: Farm Products showcase and Categories grid
- **Category Navigation**: Click categories to view specific product listings
- **Search Functionality**: Search bar with results and filter/sort options
- **Product Management**: Add products to cart with interactive buttons
- **Functional Search**: Real-time search through products and categories with instant results
- **Responsive Navigation**: Bottom navigation with Home, Cart, and Profile tabs
- **Responsive Sidebar**: Fixed left sidebar with Dashboard, Products, Orders, Statistics, Messages, Reviews, and Account (collapsible, icon-only on small screens with close button)
- **Enhanced Navbar**: User-friendly navigation with color-coded buttons, visual indicators, and improved mobile spacing
- **Dashboard Page**: Separate admin page with comprehensive overview, sales metrics and activity feed
- **Product Listing Screen**: Mobile-optimized product grid with search, add to cart functionality, and variation modal

### Responsive Design
- **Mobile**: Optimized for mobile devices (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured experience for laptops (1024px+)

### UI Components
- Form inputs with validation
- Password visibility toggles
- Social login buttons
- Code input with auto-focus
- Responsive navigation
- Modern button designs
- Success animations

## 🎨 Styling

### CSS Architecture
- Component-based CSS files
- Responsive media queries
- Consistent color variables
- Smooth transitions and animations

### Color Palette
- Primary: #10b981 (Green)
- Secondary: #6b7280 (Gray)
- Background: #ffffff (White)
- Accent: #f3f4f6 (Light Gray)
- Text: #1f2937 (Dark Gray)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔧 Technical Details

- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.3
- **Styling**: Pure CSS with responsive design
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🚀 Deployment

The application builds successfully and can be deployed to any static hosting service:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 License

This project is for demonstration purposes and matches the FC FARMS CONNECTS mobile app design.
