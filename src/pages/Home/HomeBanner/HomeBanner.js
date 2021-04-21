import React from "react";
import bg from "../../../images/Banners/bg-slideshow-v1.jpg";
import bgShoe from "../../../images/Banners/slideshow-img1.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="bg" style={{ position: "relative" }}>
        <Image
          src={bg}
          className="img-fluid w-100"
          alt="Home bg"
          style={{ objectFit: "cover", display: "block" }}
        />
      </div>
      <div className="content-active">
        <p style={{ color: "#fff" }} className="content1">
          Men's Originals
        </p>
        <h3 style={{ color: "#fff" }} className="content2">
          New Sneaker
          <br />
          Fower
        </h3>
      </div>
      <div className="img-effect">
        <Link to="/" className="d-block" tabIndex="0">
          <Image src={bgShoe} className="img-fluid" alt="bg Shoe" />
        </Link>
      </div>
      <Link to="/shop" className="shop-home-btn" tabIndex="0">
        Shop Now
      </Link>
    </div>
  );
};

export default HomeBanner;
