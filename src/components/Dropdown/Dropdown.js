import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { LocalDatabase } from "../../context/DataLayer";

const Dropdown = () => {
  const [data, dispatch] = LocalDatabase();

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        <Redirect to="/" />;
      })
      .catch((error) => {
        // An error happened.
      });
    setClick(!click);
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu-new clicked" : "dropdown-menu-new"}
      >
        {data.user ? (
          <li>
            <Link to="/" onClick={logout} className="dropdown-link">
              Logout
            </Link>
          </li>
        ) : (
          MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default Dropdown;
