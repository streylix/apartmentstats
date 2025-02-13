import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-inner">
        {/* Logo Section */}
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
            <h1 className="header-logo-text">ApartmentStats</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;