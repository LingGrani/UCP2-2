import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import brownies from '../assets/brownies.jpg';
import cheesecake from '../assets/cheesecake.jpg';
import cupcake from '../assets/cupcake.jpg';
import redvelvet from '../assets/redvelvet.jpg';
import tiramisucake from '../assets/tiramisucake.jpg';
import kueultah from '../assets/kueultah.jpg';
import bgimage from '../assets/bg2.jpg';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCake, setSelectedCake] = useState({});

  const handleShowModal = (cake) => {
    setSelectedCake(cake);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Data kue
  const cakes = [
    { id: 1, title: 'Cheese Cake', image: cheesecake, description: 'Cheese Cake yang lumer dengan keju yang meluber luber dan dengan kue yang lembut' },
    { id: 2, title: 'Brownies', image: brownies, description: 'Brownies Lezatos Klotos Klotos mbelodes menggigit cokelat' },
    { id: 3, title: 'Cupcake', image: cupcake, description: 'Cupcake lezatos yang manis dengan taburan gula halus di atasnya' },
    { id: 4, title: 'Red Velvet', image: redvelvet, description: 'Red velvet dengan warna merah menggoda iman bagi yang melihatnya' },
    { id: 5, title: 'Tiramisu Cake', image: tiramisucake, description: 'Tiramisu Cake yang lezat karena dibuat dengan cinta sepenuh hati dari owner' },
    { id: 6, title: 'BirthDay Cake', image: kueultah, description: 'Birthday Cake untuk merayakan mereka yang ulang tahun dengan rasa yang tidak akan dilupakan' }
  ];

  return (
    <>
    <section id="backgroundimage" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '40px'}}>
      <div className="mt-5 mb-5 container">
        <h1>Toko Kue</h1>
      </div>
    </section>
    <section id="gambarkue">
      <Container id="about" className="py-5">
        <Row className="text-center mb-4">
          <Col>
            <h2>Katalog Kue</h2>
            <p>Berikut adalah katalog atau jenis jenis kue yang dijual ditoko kami bisa dilihat setelah ini ya</p>
          </Col>
        </Row>
        <Row>
          {cakes.map(cake => (
            <Col key={cake.id} md={4} className="mb-4">
              <Card>
                <div className="card-img-placeholder" onClick={() => handleShowModal(cake)} />
                <Card.Img variant="top" src={cake.image} alt={cake.title} onClick={() => handleShowModal(cake)} />
                <Card.Body>
                  <Card.Title>{cake.title}</Card.Title>
                  <Card.Text>
                    {cake.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal untuk gambar */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCake.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedCake.image} alt={selectedCake.title} className="img-fluid mb-3" />
            <p>{selectedCake.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
    <section id="service">
      
    </section>
    </>
  );
};

export default About;
