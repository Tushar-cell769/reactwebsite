import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadingBanner from "../../components/HeadingBanner/HeadingBanner";
import { auth } from "../../Database/firebase";
import bg from "../../images/Banners/shop.jpg";
import "./Register.css";
import { Button } from "react-bootstrap";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const handleSubmit = () => {
    if (email.length < 1 || password.length < 1) {
      alert("Please fill all the fields");
      return;
    }
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      alert("Invalid Email");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          console.log(error);
        })
        .then((res) => {
          alert("success");
          setUser(true);
        });
    }
  };
  return (
    <div>
      <HeadingBanner title="Register" image={bg} />
      <div className="container" style={{ marginTop: 80, marginBottom: 80 }}>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="login">
              <div className="login-form-container">
                <div className="login-text">
                  <h2>Create Account</h2>
                  <p>Please Register using account detail bellow.</p>
                </div>
                <div className="register-form">
                  <form>
                    {/* <input
                      placeholder="First Name"
                      autoCapitalize="words"
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      placeholder="Last Name"
                      autoCapitalize="words"
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    /> */}
                    <input
                      placeholder="Email"
                      autoCapitalize="off"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="form-action-button">
                      <Button className="btn btn-sqr" onClick={handleSubmit}>
                        Create
                      </Button>
                      {user ? (
                        <div>
                          Account created successfully
                          <Link to="/login">Login Now</Link>
                        </div>
                      ) : null}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
