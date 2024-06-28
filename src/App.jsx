import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';

const App = () => {
  const textStyles = {
    fontFamily: 'Trebuchet MS'
  };
  return (
    <>
      <div className="textstyle" style={textStyles}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
