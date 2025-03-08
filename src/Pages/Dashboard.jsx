import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>LA_TAZA Dashboard</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Orders</li>
          <li style={styles.navItem}>Reservations</li>
          <li style={styles.navItem}>Customers</li>
          <li style={styles.navItem}>Menu</li>
        </ul>
      </div>
      <div style={styles.mainContent}>
        <h2 style={styles.dashboardTitle}>Welcome to LA_TAZA</h2>
        <p>Manage reservations, orders, and customers efficiently.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
  },
  sidebar: {
    width: '250px',
    background: '#8b4513',
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    width: '100%',
  },
  navItem: {
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    background: '#a0522d',
    margin: '5px 0',
    borderRadius: '5px',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f4f4f4',
    width: '100%',
    textAlign: 'center',
  },
  dashboardTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
};

export default Dashboard;