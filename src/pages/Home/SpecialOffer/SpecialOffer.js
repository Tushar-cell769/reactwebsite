import React from "react";

import WomenTank from "../../../images/Banners/women-nike-tank.jpg";
import EQTBanner from "../../../images/Banners/EQT-banner.jpg";

import { Link } from "react-router-dom";

import "./SpecialOffer.css";

const SpecialOffer = () => {
  return (
    <div className="home-container" style={{ marginTop: 110 }}>
      <div className="first-col special-hover">
        <Link to="/" className="d-block img-url">
          <img src={EQTBanner} alt="Shoes" className="home-img" />
        </Link>
        <div className="special-banner-info-left info-text">
          <h5>Men's Originals</h5>
          <h2>
            EQT Cushion
            <br />
            ADV Shoes <strong>$65</strong>
          </h2>
          <Link to="/" className="button-name">
            More Info
          </Link>
        </div>
      </div>
      <div className="second-col special-hover">
        <Link to="/" className="d-block img-url">
          <img src={WomenTank} alt="Shoes" className="home-img" />
        </Link>
        <div className="special-banner-info-right info-text">
          <h5>Women's Tank</h5>
          <h2>
            Nike Pro
            <br />
            HyperCool
          </h2>
          <Link to="/" className="button-name">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
