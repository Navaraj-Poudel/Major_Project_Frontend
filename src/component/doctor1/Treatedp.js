import React from "react";
import Card from "./Card";
import SideNavbar from "./sideNavbar";
import t4 from '../images/t4.jpeg'
import Footer from "../footer/Footer";
const Treatedp = () => {
  return (
    <>
      <div className="treated">
        <SideNavbar d1="Logo" d2="Treated Patient" d3="Upcoming Patient"  path1="/Treatedp" path2="/Upcomingp"/>
        <div className="row">
          <div className="col-md-3">
            <Card picture = {t4} name="Patient No.1" to="/Yourinfo"/>
          </div>

          <div className="col-md-3">
            <Card picture = {t4}  name="Patient No.2" to="/Yourinfo" />
          </div>
          
           <div className="col-md-3">
            <Card picture = {t4}   name="Patient No.3" to="/Yourinfo"/>
          </div>
          <div className="col-md-3">
            <Card  picture = {t4}  name="Patient No.4" />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  name="Patient No.5" />
          </div>
          <div className="col-md-3">
            <Card picture = {t4} name="Patient No.6"  />
          </div>
          <div className="col-md-3">
            <Card  picture = {t4}  name="Patient No.7"  />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  name="Patient No.8" />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  name="Patient No.9" />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  name="Patient No.10" />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  name="Patient No.11" />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  name="Patient No.12" />
          </div>
          
        </div>
      </div>
      <Footer/>
      </>
  );
};

export default Treatedp;
