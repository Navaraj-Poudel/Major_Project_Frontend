import React from 'react'
// import { SlPeople } from "react-icons/sl";
// import { GiMedicalPack } from "react-icons/gi";

const Navbar1 = () => {
  return (
    <div className="nav2">
          <div className="navbar">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        <h4>
                          {" "}
                          {/* <GiMedicalPack /> */}
                          ... Logo{" "}
                        </h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        <h4>
                          {/* <SlPeople /> */}
                          Personal information
                        </h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        <h4>Treated Patient</h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        <h4>Upcomming Patient</h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        <h4>Link</h4>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
  )
}

export default Navbar1
