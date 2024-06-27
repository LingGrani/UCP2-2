import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <p className="mb-0">
              <Link to="/" className="text-white">Home</Link> | 
              <Link to="/about" className="text-white"> About</Link> | 
              <Link to="/contact" className="text-white"> Contact</Link>
            </p>
          </div>
          <div className="col-md-4">
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
