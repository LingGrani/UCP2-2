import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './component/home';
import Contact from './component/contact';
import About from './component/about';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/UCP-2/" element={<Home />} />
          <Route path="/UCP-2/about" element={<About />} />
          <Route path="/UCP-2/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
