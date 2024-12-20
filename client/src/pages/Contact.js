import React, { useState } from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name is ${formData.name}`);
    console.log(`email is ${formData.email}`);
    console.log(`message is ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Hero
        className="w-10"
        backgroundImage="https://raw.githubusercontent.com/YTasheva/HomeWise.AI/main/client/public/contactus.jpeg"
      />
      <hr />
      <div className="text-center mt-3 h4 font-weight-bold">
        <h2>Get In Touch</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="w-50 m-auto mt-5">
          <Row className="mb-5">
            <Col size="12">
              <label htmlFor="Name" className="form-label">
                <i
                  className="bi bi-person-bounding-box m-2"
                  aria-hidden="true"
                ></i>
                Your Name
              </label>
              <input
                type="text"
                className="form-control bg-light"
                id="Name"
                aria-describedby="nameHelp"
                name="name"
                value={formData.name}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col size="12">
              <label htmlFor="Email" className="form-label">
                <i
                  className="bi bi-envelope-at-fill m-2"
                  aria-hidden="true"
                ></i>
                Your Email
              </label>
              <input
                type="email"
                className="form-control bg-light"
                id="Email"
                aria-describedby="emailHelp"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
              />
              <div id="emailHelp" className="form-text text-dark m-4">
                HomeWise is artificially intelligent, but when you reach out
                you’ll hear from real humans. Promise.
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col size="12">
              <label htmlFor="Message" className="form-label">
                <i className="bi bi-chat-quote-fill m-2" aria-hidden="true"></i>
                Your Message
              </label>
              <textarea
                className="form-control bg-light"
                id="Message"
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleOnChange}
              ></textarea>
            </Col>
          </Row>
          <button
            type="submit"
            className="btn bg-yellow btn-outline-danger mb-2"
          >
            <i className="bi bi-send m-1" aria-hidden="true"></i>
            Submit
          </button>
        </Container>
        <Container className="text-center text-body mt-5 mb-5 font-weight-bold">
          <h3>GET HOMEWISE {formData.name}!</h3>
          <p className="mt-3">
            We’re here to help if you need anything. Except if you need to
            balance your bank account. That’s all you.
          </p>
        </Container>
      </form>
    </>
  );
};

export default Contact;
