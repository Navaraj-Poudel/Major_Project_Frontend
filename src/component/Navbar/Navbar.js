import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import l1 from './m.png'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light fs-5 pt-3 pb-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={l1} alt="" />
          </a>{" "}
          <h4>Smart Health Card</h4>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  <h5>Home</h5>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                  <h5>About</h5>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/doctor">
                  <h5>Doctor</h5>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/patient">
                  <h5>Patient</h5>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/admin">
                  <h5>Admin</h5>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/contactus"
                >
                  <h5>Contactus</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
