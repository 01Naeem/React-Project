import React from "react";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./style.css";

/*    Icons   */
import { LiaAdobe } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div>
        <div className="certificate_haading">
          <h3>Specializations and Professional Certificates</h3>
          <h3>
            <Badge bg="secondary">New on Coursera</Badge>
          </h3>
          <h4>
            Explore our newest programs, focused on delivering in-demand skills.
          </h4>
        </div>
        <CardGroup className="card_group">
          <Card className="cards">
            <Card.Img variant="top" src="\images\card1.jpg" />
            <Card.Body>
              <div className="icons">
                <LiaAdobe className="LiaAdobe" />
                <p className="icon_name">Adobe</p>
              </div>
              <Card.Title>Adobe Graphic Designer</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Professinal Certificate</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img variant="top" src="\images\card2.jpg" />
            <Card.Body>
              <div className="icons">
                <FaMicrosoft className="FaMicrosoft" />
                <p className="icon_name">Microsoft</p>
              </div>
              <Card.Title>Microsoft Development</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Course</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img variant="top" src="\images\card3.jpg" />
            <Card.Body>
              <div className="icons">
                <FcGoogle className="FcGoogle" />
                <p className="icon_name">Google</p>
              </div>
              <Card.Title>Google Agile Essentiols</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Course</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img variant="top" src="\images\card3.jpg" />
            <Card.Body>
              <div className="icons">
                <FaPython className="FaPython" />
                <p className="icon_name">Python</p>
              </div>
              <Card.Title>Ai Python for Beginnerss</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Professinal Certificate</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div className="div_Image">
        <div>
          <Card.Img src="\images\outcomes.png" alt="Card image" className="" />
        </div>
        <div className="div_Image_Contant">
          <h1>Learner outcomes on Coursera</h1>
          <h3>77% of learners report career benefits,</h3>
          <h5>such as new skills, increased pay, and new job opportunities.</h5>

          <h5>
            <a href="">2023 Coursera Learner Outcomes Report</a>
          </h5>
          <Button variant="primary" size="lg" className="join_Button">
            Join for Free
          </Button>
        </div>
      </div>
      <div className="course_comunity">
      <h1>From the Coursera community</h1>
      <h2>168+ million people have already joined Coursera</h2>
      </div>
      <div className="student_images course_comunity">
        <div className="student_detailes">
          <Col>
            <Image
              src="\images\student1.jpg"
              roundedCircle
              className="image_students"
            />
          </Col>
          <h3>Aisha Patel</h3>
          <h5>India</h5>
          <h6>
            *** Aisha, a 22-year-old aspiring entrepreneur, enrolled in a
            Full-Stack Web Development course. She dreams of building an
            e-commerce platform that helps small businesses in rural areas go
            digital. With expertise in JavaScript, React, and Node.js, she hopes
            to launch her startup within a year. ***
          </h6>
        </div>
        <div className="student_detailes">
          <Col>
            <Image
              src="\images\student4.jpg"
              roundedCircle
              className="image_students"
            />
          </Col>
          <h3>Sofia Rodríguez </h3>
          <h5>Spain</h5>
          <h6>
            *** A 25-year-old creative mind, Sofia decided to pursue a UX/UI
            Design course. She wants to blend psychology and design to create
            user-friendly apps that improve accessibility for people with
            disabilities. With hands-on experience in Figma and Adobe XD, she is
            working on a project to redesign a local government website. ***
          </h6>
        </div>
        <div className="student_detailes">
          <Col>
            <Image
              src="\images\student2.jpg"
              roundedCircle
              className="image_students"
            />
          </Col>
          <h3>Omar Hassan</h3>
          <h5>Egypt</h5>
          <h6>
            *** Passionate about environmental science, Omar, a 24-year-old data
            enthusiast, joined a Data Science & AI program. He aims to use
            Python, machine learning, and big data analytics to study climate
            change patterns and create predictive models for natural disasters.
            ***
          </h6>
        </div>
      </div>
    </>
  );
};

export default Home;
