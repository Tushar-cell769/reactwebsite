import React from "react";
import "./Footer.css";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import PaymentMethod from "../../images/payment.webp";

import { FiPhone } from "react-icons/fi";

const Footer = () => {
  const account = [
    {
      title: "My Account",
      class: "acc",
    },
    {
      title: "Login",
      class: "login",
    },
    {
      title: "My Cart",
      class: "cart",
    },
    {
      title: "Wishlist",
      class: "wishlist",
    },
    {
      title: "Checkout",
      class: "checkout",
    },
  ];
  const information = [
    {
      title: "About Us",
      class: "about",
    },
    {
      title: "Careers",
      class: "careers",
    },
    {
      title: "Delivery Information",
      class: "delivery",
    },
    {
      title: "Privacy Policy",
      class: "privacy",
    },
    {
      title: "Terms & Conditions",
      class: "terms",
    },
  ];
  const customService = [
    {
      title: "Shipping Policy",
      class: "shipping",
    },
    {
      title: "Compensation First",
      class: "compensation",
    },
    {
      title: "My Account",
      class: "acc",
    },
    {
      title: "Retutn Policy",
      class: "return",
    },
    {
      title: "Contact Us",
      class: "contact",
    },
  ];
  return (
    <footer className="footer-v1">
      <div className="footer-top" style={{ background: "#222222" }}>
        <div className="footer-container">
          <div className="row">
            <div className="footer-column-1 col-xl-3 col-lg-4 col-sm-6 col-12 order-sm-4 order-md-1">
              <h3>Contact</h3>
              <div
                className="footer-address footer-contact"
                style={{ color: "#aaaaaa" }}
              >
                <span>
                  <AiOutlineHome />
                </span>
                <p>1234 Heaven Stress, Beverly Hill.</p>
              </div>
              <div
                className="footer-tel footer-contact"
                style={{ color: "#aaaaaa" }}
              >
                <span>
                  <FiPhone />
                </span>
                <p>Telephone: +01 234 567 89</p>
              </div>
              <div
                className="footer-email footer-contact"
                style={{ color: "#aaaaaa" }}
              >
                <span>
                  <AiOutlineMail />
                </span>
                <p>Email: engotheme@gmail.com</p>
              </div>
              <div
                className="footer-clock footer-contact"
                style={{ color: "#aaaaaa" }}
              >
                <span>
                  <AiOutlineClockCircle />
                </span>
                <p>8:00 - 19:00, Monday - Saturday</p>
              </div>
              <div className="payment-method">
                <a href="/">
                  <img src={PaymentMethod} alt="Payment Method" />
                </a>
              </div>
            </div>
            <div className="footer-column-2 col-xl-3 col-lg-2 col-sm-6 col-12 order-sm-1 order-md-2">
              <h3>My Account</h3>
              <ul className="list-unstyled mb-0">
                {account.map((item, id) => {
                  const title = item.title;
                  return (
                    <li key={id}>
                      <a href="/" className={item.class}>
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer-column-3 col-xl-3 col-lg-3 col-sm-6 col-12 order-sm-2 order-md-3">
              <h3>Information</h3>
              <ul className="list-unstyled mb-0">
                {information.map((item, id) => {
                  const title = item.title;
                  return (
                    <li key={id}>
                      <a href="/" className={item.class}>
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer-column-4 col-xl-3 col-lg-3 col-sm-6 col-12 order-sm-3 order-md-4">
              <h3>Custom Service</h3>
              <ul className="list-unstyled mb-0">
                {customService.map((item, id) => {
                  const title = item.title;
                  return (
                    <li key={id}>
                      <a href="/" className={item.class}>
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ background: "#111111" }}>
        <div className="footer-container">
          <div className="row">
            <div className="col-md-6 col-12 text-md-left">
              <p className="desc mb-0">
                Copyright © 2021 by{" "}
                <a href="/" target="_blank" style={{ textDecoration: "none" }}>
                  MyTheme
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="socials col-md-6 col-12 text-md-right">
              <span>Follow Me:</span>
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaPinterestP />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
