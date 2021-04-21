import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadingBanner from "../../components/HeadingBanner/HeadingBanner";
import { LocalDatabase } from "../../context/DataLayer";
import bg from "../../images/Banners/shop.jpg";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { auth } from "../../Database/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, dispatch] = LocalDatabase();

  async function handleSubmit() {
    if (email.length < 1 || password.length < 1) {
      alert("Please fill all the fields");
      return;
    }
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      alert("Invalid Email");
    } else {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("success");
          dispatch({
            type: "SET_USER",
            payload: true,
          });
        })
        .catch((error) => {
          alert("Something went wrong");
          console.log(error);
        });
      // await auth.signInWithEmailAndPassword(email, password);
    }
  }

  return (
    <div>
      <HeadingBanner title="Login" image={bg} />
      <div className="container" style={{ marginTop: 80, marginBottom: 80 }}>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="login">
              <div className="login-form-container">
                <div className="login-text">
                  <h2>Login</h2>
                  <p>Please login using account detail bellow.</p>
                </div>
                <div className="login-form">
                  <input
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="login-toggle-btn">
                    <div className="form-action-button">
                      <button className="btn btn-sqr" onClick={handleSubmit}>
                        Sign In
                      </button>
                      <Link to="/">Forgot your password?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
