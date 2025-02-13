import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown } from 'lucide-react';

const styles = {
    container: {
      outer: {
        display: 'block',
        width: '100%'
      },
      navbar: {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        borderBottom: '1px solid #374151', // Dark mode border color
        backgroundColor: '#1a1a1a' // Dark background color
      },
      inner: {
        display: 'flex',
        height: '64px',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px'
      }
    },
    logo: {
      wrapper: {
        display: 'flex',
        height: '100%',
        alignItems: 'center'
      },
      link: {
        display: 'block',
        padding: '4px 8px',
        textDecoration: 'none'
      },
      text: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ffffff' // White text for dark mode
      }
    },
    nav: {
      menu: {
        display: 'none',
        marginRight: '8px',
        '@media (min-width: 768px)': {
          display: 'flex'
        }
      },
      item: {
        position: 'relative',
        marginRight: '8px'
      },
      button: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px',
        backgroundColor: 'transparent',
        color: '#d1d5db', // Light gray text for dark mode
        cursor: 'pointer',
        transition: 'color 0.2s ease',
        ':hover': {
          color: '#ffffff' // White on hover
        }
      }
    },
    actions: {
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      },
      favorites: {
        display: 'none',
        '@media (min-width: 768px)': {
          display: 'block'
        }
      },
      auth: {
        display: 'none',
        alignItems: 'center',
        '@media (min-width: 768px)': {
          display: 'flex'
        }
      }
    }
  };
  
  const Header = () => {
    return (
      <header style={styles.container.outer}>
        <nav style={styles.container.navbar}>
          <div style={styles.container.inner}>
            <div style={styles.logo.wrapper}>
              <Link to="/" style={styles.logo.link}>
                <h1 style={styles.logo.text}>ApartmentStats</h1>
              </Link>
            </div>
  
            <div style={styles.nav.menu}>
              <div style={styles.nav.item}>
                <button style={styles.nav.button}>
                  Apartments for Rent
                  <ChevronDown size={20} style={{ marginLeft: '8px', color: '#d1d5db' }} />
                </button>
              </div>
            </div>
  
            <div style={styles.actions.wrapper}>
              <div style={styles.actions.favorites}>
                <Link to="/favorites" style={{
                  ...styles.nav.button,
                  color: '#d1d5db',
                  ':hover': {
                    color: '#ffffff'
                  }
                }}>
                  <Heart size={24} />
                </Link>
              </div>
              
              <div style={styles.actions.auth}>
                <Link to="/login" style={{
                  ...styles.nav.button,
                  marginRight: '12px',
                  color: '#d1d5db',
                  ':hover': {
                    color: '#ffffff'
                  }
                }}>
                  Log in
                </Link>
                <Link to="/signup" style={{
                  display: 'flex',
                  height: '40px',
                  width: '98px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  backgroundColor: '#7c3aed',
                  color: '#ffffff',
                  fontWeight: '500',
                  transition: 'background-color 0.2s ease',
                  ':hover': {
                    backgroundColor: '#6d28d9'
                  }
                }}>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
};

export default Header;