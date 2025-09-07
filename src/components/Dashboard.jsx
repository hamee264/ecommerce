import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faBox, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const stats = [
    { title: 'Total Sales', value: '$24,500', change: '+12%', icon: faChartLine, color: '#10b981' },
    { title: 'Total Orders', value: '1,234', change: '+8%', icon: faBox, color: '#3b82f6' },
    { title: 'Total Customers', value: '856', change: '+15%', icon: faUsers, color: '#f59e0b' },
    { title: 'Revenue', value: '$18,900', change: '+22%', icon: faDollarSign, color: '#ef4444' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Welcome to FC FARMS CONNECTS Dashboard</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              <FontAwesomeIcon icon={stat.icon} className="stat-icon-svg" />
            </div>
            <div className="stat-content">
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
              <span className="stat-change positive">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="content-section">
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faBox} />
              </div>
              <div className="activity-details">
                <p className="activity-text">New order #1234 received</p>
                <span className="activity-time">2 minutes ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="activity-details">
                <p className="activity-text">New customer registered</p>
                <span className="activity-time">15 minutes ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <div className="activity-details">
                <p className="activity-text">Payment received for order #1230</p>
                <span className="activity-time">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
