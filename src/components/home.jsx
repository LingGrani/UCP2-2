import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fotokueultah3 from '../assets/fotokueultah3.jpg'
import fotokueultah2 from '../assets/fotokueultah2.jpg'
import fotokue1 from '../assets/birthdaycake.jpg'
import fotokueultah4 from '../assets/fotokueultah4.jpg'
// Video
import video from '../assets/video.mp4';

const Home = () => {
  const videoStyle = {
    width: '100%',
    height: 'auto',
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
    <>
      <section id="videobg">
        <div className="hero-section">
          <video style={videoStyle} autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Container style={overlayStyle} className="text-center">
            <h1 style={textStyles}>Selamat Datang di toko Lake Cake </h1>
            <p style={{ fontSize: '1.5rem' }}>Berusaha menjadi toko terbaik di Kota Yogyakarta</p>
            <Link to="/about">
              <Button variant="warning">Jelajahi Lebih</Button>
            </Link>
          </Container>
        </div>
      </section>
      <section id="pengenalantoko" className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img src={fotokueultah4} alt="Our Store" className="img-fluid" />
            </Col>
            <Col md={8}>
              <h2>Sejarah Toko Lake Cake</h2>
              <p>Toko kami baru di buka dan dibuat website pada hari kamis tanggal 27 Juni 2024 jam 18.00 WIB oleh kelompok 2 Terimakasih Banyak kelompok 2 yang membantu membuat website toko kami</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="jeniskue" className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Contoh Cake</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={fotokue1} />
                <Card.Body>
                  <Card.Title>Birthday Cake</Card.Title>
                  <Card.Text>
                    Birthday Cake ini cocok untuk mereka yang sedang merayakan ulang tahun mereka,tentu saja siapa yang tidak suka saat merayakan ulang tahun nya apalagi kalau di berikan kue ini dan di belikan minimal ya mercedes lah ya
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={fotokueultah2} />
                <Card.Body>
                  <Card.Title>Birthday Cake</Card.Title>
                  <Card.Text>
                    Ada Birthday Cake Versi mahal nya cake ini cocok untuk orang yang duit nya sedikit lebih banyak daripada 2 kue disamping ini dengan harga Rp.300.000 kamu bisa bawa pulang cake yang enak dan endul ini
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={fotokueultah3} />
                <Card.Body>
                  <Card.Title>Birthday Cake</Card.Title>
                  <Card.Text>
                    Birthday Cake dibawah yang Rp.300.000 tadi kalian bisa membawa pulang kue ini seharga Rp.175.000 sudah dibungkus rapih dan diberikan untuk tulisan birthday nya dan diberikan kepada orang yang kalian sayangi
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="contact" className="py-5">
        <Container className="text-center">
          <Row>
            <Col>
              <p>Jika ada pertanyaan atau ingin memberikan kritik dan saran anda bisa klik tombol di bawah ini ya </p>
              <Link to="/contact">
                <Button variant="warning">Contact Us</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
