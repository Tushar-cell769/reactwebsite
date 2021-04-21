import React from "react";
import { Link } from "react-router-dom";
import "./HeadingBanner.css";

const HeadingBanner = (props) => {
  return (
    <div className="shop-bg-banner">
      <Link to="/" className="effect-img2">
        <img src={props.image} alt="Shop Banner" className="img-fluid" />
      </Link>
      <div className="page-title">
        <h2>{props.title}</h2>
        <div className="bread-crumb">
          <Link to="/" title="Back to the front page">
            Home
          </Link>
          <strong>
            <i> / </i>
            {props.title}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default HeadingBanner;
