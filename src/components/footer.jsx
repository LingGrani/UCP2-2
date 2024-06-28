import React from 'react';
import { Link } from 'react-router-dom';
import wa from '../assets/wa.jpg';
import ig from '../assets/ig.jpg';
import tt from '../assets/tiktok.png';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="bg-warning text-white text-center py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <img src={logo} alt="Logo" width={60}/>
            <p className="mb-0">&copy; 2024 Toko Kue. By Kelompok 2 C</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <p className="mb-0">
              <Link to="/" className="text-white">Home</Link> | 
              <Link to="/about" className="text-white"> About</Link> | 
              <Link to="/contact" className="text-white"> Contact</Link>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <a href="https://wa.me/+6282335982028" className='text-white'><p>+62 823-3598-2028</p></a>
            </p>
            <p>
              <a href="mailto:example@example.com" className='text-white'><p>Email</p></a>
            </p>
            <p className="mb-0">
              <a href="https://wa.me/+6282335982028">
                <img src={wa} alt="WhatsApp" className="img-fluid" style={{ width: "50px", padding:"10px"}}/>
              </a>
              <a href="https://www.instagram.com/">
                <img src={ig} alt="Instagram" className="img-fluid" style={{ width: "50px", padding:"10px"}}/>
              </a>
              <a href="https://www.tiktok.com/">
                <img src={tt} alt="TikTok" className="img-fluid" style={{ width: "50px", padding:"10px"}}/>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
