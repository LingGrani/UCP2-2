import React, { useState } from 'react';
import bgimage from '../assets/bg.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Tambahkan logika untuk mengirim data formulir ke backend atau melakukan aksi lainnya di sini
  };

  return (
    <div className="contact-page">
      <div className="content">
        <section>
          <div className="bg" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px'}}>
            <h1 className="text-center">Reviews</h1>
            <p className="text-center">Kritik dan Saran<br />Selalu kami dengarkan</p>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <form onSubmit={handleSubmit} className="border border-dark rounded p-4 bg-white">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button className="btn btn-dark" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 mb-5 container mt-3">
          <div className="row">
            <div className="col-md-6">
              <h2>Hubungi Kami</h2>
              <p>
                Jika anda berminat segera hubungi dan daftar lalu Healing bersama kami
              </p>
              <p>
                <h5>Whatsapp</h5>
                <a className="text-dark" href="https://wa.me/+6282335982028"><p>+62 823-3598-2028</p></a>
              </p>
              <p>
                <h5>Email</h5>
                <a className="text-dark" href="mailto:example@example.com"><p>Email</p></a>
              </p>
            </div>
            <div className="col-md-6">
              <div className="map-container">
                <iframe
                  title="Google Maps"
                  width="600"
                  height="450"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8081594747737!2d110.32230538722497!3d-7.810122470052278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af80f28426fb3%3A0x72412294845ee8b4!2sUniversitas%20Muhammadiyah%20Yogyakarta!5e0!3m2!1sid!2sid!4v1719495065532!5m2!1sid!2sid"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
