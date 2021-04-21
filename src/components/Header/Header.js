import React, { useState } from "react";
import { FaOpencart, FaSearch } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Dropdown from "../Dropdown/Dropdown";

import { Link } from "react-router-dom";
import { LocalDatabase } from "../../context/DataLayer";

import Popup from "../Popup/Popup";
import "./header.css";

const Header = () => {
  const [data, dispatch] = LocalDatabase();
  const [state] = LocalDatabase();
  const [openPopup, setOpenPopup] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav className="navbar-new">
        <Link to="/" className="navbar-logo">
          Shoporium
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul
          className={
            click ? "nav-menu active" : data.user ? "nav-menu-new" : "nav-menu"
          }
        >
          <li className="nav-item">
            <Link to="/" className="nav--links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
              Shop
            </Link>
          </li>
          {data.user ? (
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
          ) : null}
          {data.user ? (
            <li className="nav-item">
              <Link
                to="/categories"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Categories
              </Link>
            </li>
          ) : null}
          <li className="nav-item">
            <div className="cart-container">
              <Link className="nav-links" to="#">
                <FaSearch
                  style={{ fontSize: 22, color: "#ffffff" }}
                  onClick={() => setOpenPopup(true)}
                />
              </Link>
            </div>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to={data.user ? "/myaccount" : "/login"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              <AiOutlineUser style={{ fontSize: 22, color: "#ffffff" }} />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link className="nav-links" to="/cart">
              <FaOpencart style={{ fontSize: 22, color: "#ffffff" }} />
              <div className="cart-item-count">
                {Object.keys(state.cart).length}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
    </>
  );
};

export default Header;
