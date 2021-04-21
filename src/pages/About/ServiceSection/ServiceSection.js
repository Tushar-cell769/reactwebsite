import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceSection.css";
import deliveryTruck from "../../../images/ServiceIcons/delivery-truck.png";
import gift from "../../../images/ServiceIcons/gift-box.png";
import support from "../../../images/ServiceIcons/24-hours-support.png";
import sales from "../../../images/ServiceIcons/coupon.png";

const ServiceSection = () => {
  return (
    <div className="service-page">
      <Container fluid className="my-container">
        <Row className="service-content">
          <Col xs="3">
            <div className="service">
              <Link to="/" className="ti-truck">
                <Image src={deliveryTruck} alt="Delivery" />
              </Link>
              <div className="service-info">
                <h4 className="mb-0 text-capitalize">Free Shipping</h4>
                <p className="mb-0">Free shipping on all UK orders</p>
              </div>
            </div>
          </Col>
          <Col xs="3">
            <div className="service">
              <Link to="/" className="ti-truck">
                <Image src={gift} alt="Delivery" />
              </Link>
              <div className="service-info">
                <h4 className="mb-0 text-capitalize">Valuable Gifts</h4>
                <p className="mb-0">Free gift after every 10 order</p>
              </div>
            </div>
          </Col>
          <Col xs="3">
            <div className="service">
              <Link to="/" className="ti-truck">
                <Image src={support} alt="Delivery" />
              </Link>
              <div className="service-info">
                <h4 className="mb-0 text-capitalize">All Day Support</h4>
                <p className="mb-0">Call us for free: +01 234 567 89</p>
              </div>
            </div>
          </Col>
          <Col xs="3">
            <div className="service">
              <Link to="/" className="ti-truck">
                <Image src={sales} alt="Delivery" />
              </Link>
              <div className="service-info">
                <h4 className="mb-0 text-capitalize">Seasonal Sale</h4>
                <p className="mb-0">Discounts up to 50% on all</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceSection;
