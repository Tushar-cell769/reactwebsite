import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import team1 from "../../../images/Team/team1.webp";
import team2 from "../../../images/Team/team2.jpg";
import team3 from "../../../images/Team/team3.jpg";
import team4 from "../../../images/Team/team4.jpg";
import "./TeamSection.css";

const TeamSection = () => {
  return (
    <div className="testimonial-aboutus">
      <Container fluid>
        <h2 className="section-title text-center title-line-bottom">
          Our Teams
        </h2>
        <Row>
          <Col md="3" sm="6">
            <div class="our-team">
              <Image src={team1} alt="team1" />
              <ul className="social">
                <li>
                  <Link to="/" className="fab fa-facebook"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-twitter"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-google-plus"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-pinterest"></Link>
                </li>
              </ul>
              <div className="team-content">
                <h3 className="title">WILLIAMSON</h3>
                <span className="post">WEB DEVELOPER</span>
              </div>
            </div>
          </Col>
          <Col md="3" sm="6">
            <div class="our-team">
              <Image src={team2} alt="team1" />
              <ul className="social">
                <li>
                  <Link to="/" className="fab fa-facebook"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-twitter"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-google-plus"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-pinterest"></Link>
                </li>
              </ul>
              <div className="team-content">
                <h3 className="title">KRISTIANA</h3>
                <span className="post">WEB DESIGNER</span>
              </div>
            </div>
          </Col>
          <Col md="3" sm="6">
            <div class="our-team">
              <Image src={team3} alt="team1" />
              <ul className="social">
                <li>
                  <Link to="/" className="fab fa-facebook"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-twitter"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-google-plus"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-pinterest"></Link>
                </li>
              </ul>
              <div className="team-content">
                <h3 className="title">STEVE THOMAS</h3>
                <span className="post">WEB DEVELOPER</span>
              </div>
            </div>
          </Col>
          <Col md="3" sm="6">
            <div class="our-team">
              <Image src={team4} alt="team1" />
              <ul className="social">
                <li>
                  <Link to="/" className="fab fa-facebook"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-twitter"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-google-plus"></Link>
                </li>
                <li>
                  <Link to="/" className="fab fa-pinterest"></Link>
                </li>
              </ul>
              <div className="team-content">
                <h3 className="title">MIRANDA JOY</h3>
                <span className="post">WEB DESIGNER</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamSection;
