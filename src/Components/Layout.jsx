import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
import { NavbarText } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Outlet } from "react-router-dom";
// import coverImage from 'images/coverImage.jpg'

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className="logoName">
            Book Your Course
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <h6 className="goals">Goals</h6>
                <NavDropdown.Item path={"./service"} className="navbar-item">
                  Take a free course
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3" className="navbar-item">
                  Earn a Degree
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3" className="navbar-item">
                  Earn a Certificate
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3" className="navbar-item">
                  Find your new career
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="navbar-item">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Divider />
                <h6 className="goals">Courses</h6>
                <NavDropdown.Item href="#action5" className="navbar-item">
                  Data Science
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="navbar-item">
                  Data Analytic
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="navbar-item">
                  Machine Learning
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="navbar-item">
                  Artificial Intelligence
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="navbar-item">
                  Fullstack
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1" className="navbar-item home">
                Home
              </Nav.Link>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            src="./images/coverImage01.jpg"
            className="d-block w-100"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src="./images/coverImage.jpg"
            className="d-block w-100"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="./images/coverImage3.jpg"
            className="d-block w-100"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Outlet />
      <div className="footer">
        <footer className="footer-links">
                <ul>
                <h5>Technical Skills</h5>
                  <li>Ethical Hacking</li>
                  <li>Coding</li>
                  <li>Cybersecurity</li>
                  <li>Generative AI</li>
                  <li>Python</li>
                  <li>Java Programming</li>
                </ul>
                <ul>
                <h5>Analytical Skills</h5>
                  <li>Artificial Intellingence</li>
                  <li>Big Data</li>
                  <li>Data Analysis</li>
                  <li>Data Analylitics</li>
                  <li>Data Science</li>
                  <li>Machine Learning</li>
                </ul>
                <ul>
                <h5>Business Skills</h5>
                  <li>Accunting</li>
                  <li>Digital Marketing</li>
                  <li>E-commerce</li>
                  <li>Finance</li>
                  <li>Google</li>
                  <li>IBM</li>
                </ul>
                <ul>
                <h5>Career Resources</h5>
                  <li>Essential IT Certificate</li>
                  <li>High-Income Skills to Learn</li>
                  <li>How to Learn Artificial Intelligence</li>
                  <li>How to Learn PMP Certificate</li>
                  <li>Career Education Articles</li>
                  <li>Career Development Resources</li>
                </ul>
        </footer>
      </div>
    </>
  );
};

export default Layout;
