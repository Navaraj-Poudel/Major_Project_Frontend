import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import l1 from './m.png'
const Navbar = () => {
  return (
    <div className="NAV">
      <nav className="navbar navbar-expand-lg bg-light fs-5 pt-3 pb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src={l1} alt="" /> */}
          </a>{" "}
          <h4>Smart Health Card</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" spy={true} smooth={true} offset={50} duration={500}>
                  <h5>Home</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  <h5>About</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/doctor"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  <h5>Doctor</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/patient"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  <h5>Patient</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/admin"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  <h5>Admin</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contactus"
                  spy={true} smooth={true} offset={50} duration={500}
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
