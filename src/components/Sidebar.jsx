import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faThLarge, 
  faBox, 
  faClipboardList, 
  faChartBar, 
  faComments, 
  faStar, 
  faUser,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ activeItem, onNavigate, className = '', onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: faThLarge },
    { id: 'product', label: 'Product', icon: faBox },
    { id: 'orderList', label: 'Order List', icon: faClipboardList },
    { id: 'statistics', label: 'Statistics', icon: faChartBar },
    { id: 'messages', label: 'Messages', icon: faComments },
    { id: 'reviews', label: 'Reviews', icon: faStar },
    { id: 'account', label: 'Account', icon: faUser }
  ];

  return (
    <div className={`sidebar ${className}`}>
      {/* Close Button */}
      <button className="sidebar-close-btn" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      
      {/* Logo Section */}
      <div className="sidebar-logo">
        <div className="logo-container">
          <div className="logo-fc">
            <span className="fc-letters">FC</span>
            <div className="logo-text">
              <span className="farms">FARMS</span>
              <span className="connects">CONNECTS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-button ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <div className="nav-icon">
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className={activeItem === item.id ? 'icon-active' : 'icon-inactive'}
                  />
                </div>
                <span className="nav-label">{item.label}</span>
                {activeItem === item.id && <div className="active-indicator" />}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
