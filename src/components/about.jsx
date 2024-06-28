import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import brownies from '../assets/brownies.jpg';
import cheesecake from '../assets/cheesecake.jpg';
import cupcake from '../assets/cupcake.jpg';
import redvelvet from '../assets/redvelvet.jpg';
import tiramisucake from '../assets/tiramisucake.jpg';
import kueultah from '../assets/kueultah.jpg';
import bgimage from '../assets/bg2.jpg';
import bannerimg from '../assets/banner.jpg';

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
  const textStyles = {
    fontFamily: 'Arial Black',
    color: '#F01810',
    fontSize: '5rem',
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
    <section id="backgroundimage" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '2px'}}>
      <div className="mt-5 mb-5 container">
        <h1 style={textStyles}>Lake Cake</h1>
      </div>
    </section>
    <section id="gambarkue">
      <Container id="about" className="py-5">
        <Row className="text-center mb-4">
          <Col>
            <h2>Kenali Kue Kami</h2>
            <p>Temukan ragam kue istimewa yang siap memanjakan lidah Anda</p>
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
      <div className="container mb-5">
        <h2 className="text-center">Layanan Kami</h2>
        <p className="text-center">Nikmati berbagai pilihan kue dan layanan istimewa kami</p>
        <div className="row">
          <div className="col-md-4">
            <span class="material-symbols-outlined">bakery_dining</span>
            <h4 className="font-weight-bold">Fresh</h4>
            <p>Diproduksi segar untuk setiap momen istimewa dalam hidup Anda</p>
            <span class="material-symbols-outlined">cake</span>
            <h4 className="font-weight-bold">Kue Premium</h4>
            <p>Memiliki koleksi kue-kue premium, yang memiliki cita rasa sempurna dengan sentuhan kreatif yang eksklusif</p>
          </div>
          <div className="col-md-4">
            <span class="material-symbols-outlined">cookie</span>
            <h4 className="font-weight-bold">Kue Kering</h4>
            <p>Tersedia beragam pilihan kue kering lezat untuk memuaskan selera Anda.</p>
            <span class="material-symbols-outlined">menu_book</span>
            <h4 className="font-weight-bold">Menu lainnya</h4>
            <p>Tersedia beragam menu lainnya yang menggugah selera, dari pilihan kue-kue istimewa hingga camilan favorit, semua untuk memuaskan selera Anda.</p>
          </div>
          <div className="col-md-4">
          <img src={bannerimg} className="img-fluid rounded" alt="Banner" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
