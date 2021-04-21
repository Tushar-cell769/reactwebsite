import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import sign from "../../../images/Banners/sign-aboutus.webp";
import "./AboutUsInfo.css";

const AboutUsInfo = () => {
  return (
    <Container fluid>
      <Row className="aboutus-info">
        <Col xs="6" className="info-left">
          <p className="sub-info-title">History Since 2010</p>
          <h2>Welcome To Michelie Shop Amazing Fashion.</h2>
          <span>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </span>
        </Col>
        <Col xs="6" className="info-right">
          <p className="info-right-desc info-right-desc1">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cras mattis consectetur purus sit amet fermentum. Sed posuere
            consectetur est at lobortis. Nullam id dolor id nibh ultricies
            vehicula ut id elit.
          </p>
          <p className="info-right-desc info-right-desc2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <div className="sign">
            <Image src={sign} alt="Signature" />
          </div>
          <p className="about-author text-uppercase">
            <span>pr. Megan</span> -ceo Eurotas
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsInfo;
