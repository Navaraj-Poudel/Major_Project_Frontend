import React from "react";
import LoginPage from "../Loginpage/loginpage";
import "./dstyle.css";

const Doctor = () => {
  return (
    <div className="Doct">
      <LoginPage name="Doctor" newpage="/doctor1" />
    </div>
  );
};

export default Doctor;
