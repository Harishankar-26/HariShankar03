import React from "react";
import "./assests/styles/style.scss";
import logo1 from "./assests/images/crepescopy.png";
import down from "./assests/images/icon img/angle-down.png";
import logo2 from './assests/images/cormac-copy-bright.jpg';

export default function Details() {
  return (
    <div className="contents">
      <div className="header d-flex align-items-center justify-content-between">
        <div className="logo">
          <img src={logo1} alt="logo" className="rounded" />
        </div>
        <div class="users-profile d-flex align-items-center justify-content-between">
          <a href="#profile-img" class="d-flex align-items-center justify-content-center rounded-circle">R</a>
          <p>Ralphe Stone</p>
          <img src={down} alt="angle-down icon" />
        </div>
      </div>
      <div className="stepper-content">
        <div className="stepper">
          <div className="container">
            <div className="stepper-list d-flex justify-content-flex-start align-items-center">
              <div className="steps d-flex align-items-center justify-content-flex-start">
                <a href="Procurement Details" className="d-flex align-items-center justify-content-center">1</a>
                <p>ProcurementDetails</p>
              </div>
              <div className="fill-bar"></div>
              <div className="steps d-flex align-items-center justify-content-flex-start">
                <a href="Documentation" className="d-flex align-items-center justify-content-center">2</a>
                <p>SolicitationDocument</p>
              </div>
              <div className="fill-bar"></div>
              <div className="steps d-flex align-items-center justify-content-flex-start">
                <a href="Contractor Data" className="d-flex align-items-center justify-content-center">3</a>
                <p>ContractorData</p>
              </div>
              <div className="fill-bar"></div>
              <div className="steps d-flex align-items-center justify-content-flex-start">
                <a href="Dashboard" className="d-flex align-items-center justify-content-center">4</a>
                <p>ViewDashboard</p>
              </div>
              <div className="fill-bar"></div>
              <div className="steps d-flex align-items-center justify-content-flex-start">
                <a href="Reports Found" className="d-flex align-items-center justify-content-center">5</a>
                <p>Reports</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="container d-flex align-items-center justify-content-between flex-column">
            <div className="upper-content w-100 d-flex align-items-center justify-content-center flex-column">
              <p>procurement Details</p>
              <form className="w-100">
                <div className="curement-name form-group d-flex flex-column align-items-start">
                  <label for="curement-name">Procurement Name</label>
                  <input type="text" placeholder="some Name" id="curement-name" name="porcurement Name"/>
                </div>
                <div className="dun-num form-group d-flex flex-column align-items-start">
                  <label for="dun-num">Duns Number</label>
                  <textarea type="text" placeholder="1231434344" id="dun-num" name="dun-number"/>
                </div>
                <div className="dollar-value form-group d-flex flex-column align-items-start">
                  <label for="dollar-value">Dollar Value</label>
                  <input type="text" placeholder="$ 21,12,783" id="dollar-value" name="dollar-value"/>
                </div>
              </form>
            </div>
            <div class="switch-buttons">
                <button type="button" class="btn first-button">Back</button>
                <button type="button" class="btn btn-primary">Next</button>
            </div>
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
