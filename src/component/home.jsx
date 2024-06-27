import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Video
import video from '../assets/video.mp4';

const Home = () => {
  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  };

  const textStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  return (
    <div className="hero-section">
      <video style={videoStyle} autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container style={overlayStyle}>
        <h1 style={textStyles}>Welcome to Our Website</h1>
        <p style={{ fontSize: '1.5rem' }}>Discover the Best Cakes in Town</p>
        <Link to="/about">
          <Button variant="primary">Explore More</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
