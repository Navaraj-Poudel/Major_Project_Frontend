import React from "react";
import Footer from "../footer/Footer";
import LoginPage from "../Loginpage/loginpage";
import "./dstyle.css";

const Doctor = () => {
  return (
    <>
    <div className="Doct">
      <LoginPage name="Doctor" newpage="/doctor1" color = "btn btn-success" />
    </div>
      <Footer/>
    </>
  );
};

export default Doctor;
