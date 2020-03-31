import React from "react";
import "./assests/styles/style.scss"
import logo1 from "./assests/images/crepescopy.png";
import logo2 from "./assests/images/cormac-copy-bright.jpg";


function App() {
  return (
    <div>
                  <div className="users-portal w-100 text-center">
        <div className="content d-flex flex-column align-items-center justify-content-center">
        <div className="logo">
          <img className="rounded" src={logo1} alt="logo" />
        </div>
        <div className="login-content w-100">
          <div className="body-content">
          <p>WELCOME BACK</p>
          <form>
            <div className="form-group d-flex flex-column align-items-start">
              <label for="email-id">EMAIL</label>
              <input type="email" placeholder="somename@mail.com" id="email-id" name="Email" size="30" />
            </div>
            <div className="form-group d-flex flex-column align-items-start">
              <label for="password-id">PASSWORD</label>
              <input type="password" placeholder="**** ****" id="password-id" name="password" size="30" />
            </div>
          </form>
          <div className="forgot-password d-flex justify-content-between align-items-center">
            <a href="#forgotpassword">
              Forgot Password?
            </a>
            <button type="button" className="btn btn-primary">Login</button>
          </div>
          </div>

        </div>
        <div className="account-portal">
          <p>Create a new account?<span><a href="#sign up">Sign up</a></span></p>
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

export default App;
