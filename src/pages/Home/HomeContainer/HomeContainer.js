import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../images/Banners/banner-v1-img1.jpg";
import banner2 from "../../../images/Banners/banner-v1-img2.jpg";
import banner3 from "../../../images/Banners/banner-v2-img2.jpg";
import banner4 from "../../../images/Banners/banner-v2-img1.jpg";
import "./HomeContainer.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const HomeContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs="4" style={{ padding: 0 }}>
          <div className="banner-1 banner-item style2 text-center order-1">
            <Link className="d-block img-url" to="/shop">
              <Image className="img-fluid w-100" alt="banner" src={banner1} />
            </Link>
            <div className="banner-left-info">
              <h5>Running Shoes</h5>
              <h2>Nike Just Do It</h2>
            </div>
          </div>
        </Col>
        <Col xs="8" style={{ padding: 0 }}>
          <div className="banner-2 banner-item style2 order-2">
            <Link to="/" className="d-block img-url">
              <img src={banner2} className="img-fluid w-100" alt="Banner2" />
            </Link>
            <div className="banner-right-info1">
              <h2>
                The Benefits <br />
                Of Running
              </h2>
              <h5>Season off 30 - 10%</h5>
              <Link to="/" className="button-name style1">
                More Info
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="8" style={{ padding: 0 }}>
          <div className="banner-2 banner-item style2 order-2">
            <Link to="/" className="d-block img-url">
              <img src={banner3} className="img-fluid w-100" alt="Banner2" />
            </Link>
            <div className="banner-right-info2">
              <h5>New Arrivals</h5>
              <h2>
                Women Hoodies & <br />
                Sweatshirts
              </h2>
              <Link to="/" className="button-name style1">
                More Info
              </Link>
            </div>
          </div>
        </Col>
        <Col xs="4" style={{ padding: 0 }}>
          <div className="banner-1 banner-item style2 text-center order-1">
            <Link className="d-block img-url" to="/shop">
              <Image className="img-fluid w-100" alt="banner" src={banner4} />
            </Link>
            <div className="banner-left-info">
              <h5>Running Shoes</h5>
              <h2>Nike Just Do It</h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContainer;
