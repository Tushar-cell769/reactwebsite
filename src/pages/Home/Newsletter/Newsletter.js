import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="section-newsletter">
      <div className="newsletter-container">
        <div className="newsletter">
          <div className="newsletter-info">
            <h2>Newsletter</h2>
            <p>
              Enter your email address for our mailing list to keep your self
              update.
            </p>
          </div>
          <form>
            <input
              className="form-control"
              placeholder="Enter your email.."
              type="email"
              autoCapitalize="off"
              autoCorrect="off"
              aria-label="email@example.com"
            />
            <button className="btn-newsletter">
              <AiOutlineMail />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
