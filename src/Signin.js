import React from "react";
import "./assests/styles/style.scss";
import logo1 from "./assests/images/crepescopy.png";
import logo2 from "./assests/images/cormac-copy-bright.jpg";

export default function Signin() {
  return (
    <div className="signin">
      <div className="users-portal w-100 overflow-auto text-center d-flex flex-column align-items-center justify-content-center">
        <div className="logo">
          <img className="rounded" src={logo1} alt="logo" />
        </div>
        <div className="user-signin w-100">
          <div className="body-content">
            <p>CREATE AN ACCOUNT</p>
            <form>
              <div className="form-group d-flex flex-column align-items-start">
                <label for="firstname">FIRST NAME</label>
                <input
                  type="text"
                  placeholder="First name"
                  id="firstname"
                  name="firstname"
                  size="30"
                />
              </div>
              <div className="form-group d-flex flex-column align-items-start">
                <label for="lastname">LAST NAME</label>
                <input
                  type="text"
                  placeholder="Last name"
                  id="lastname"
                  name="lastname"
                  size="30"
                />
              </div>
              <div className="form-group d-flex flex-column align-items-start">
                <label for="email-id">EMAIL ID</label>
                <input
                  type="email"
                  placeholder="somename@mail.com"
                  id="email-id"
                  name="Email"
                  size="30"
                />
              </div>
              <div className="form-group d-flex flex-column align-items-start">
                <label for="password-id">PASSWORD</label>
                <input
                  type="password"
                  id="password-id"
                  name="password"
                  size="30"
                />
              </div>
              <div className="form-group d-flex flex-column align-items-start">
                <label for="conf-password-id">CONFIRM PASSWORD</label>
                <input
                  type="password"
                  id="conf-password-id"
                  name="password"
                  size="30"
                />
              </div>
            </form>
            <div className="signup-button d-flex justify-content-end">
              <button type="button" className="btn btn-primary">
                Signup
              </button>
            </div>
          </div>
          <div className="account-portal">
            <p>
              Already have an account?<span><a href="#sign up">Sign in</a></span></p>
          </div>
        </div>
      </div>
      <div className="footer d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <img className="rounded" src={logo2} alt="logo" />
          <p>&copy; 2019 CORMAC corp.</p>
          <div className="footer-buttons">
            <button type="button" className="btn btn-sm btn-link">Terms of Services</button>
            <button type="button" className="btn btn-sm btn-link">Privacy policy</button>
            <button type="button" className="btn btn-sm btn-link border-0">Accessibility</button>
          </div>
        </div>
      </div>
    </div>
  );
}
