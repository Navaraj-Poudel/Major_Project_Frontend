import React from "react";
import Card from "./Card";
import SideNavbar from "./sideNavbar";
import t4 from '../images/t4.jpg'
const Treatedp = () => {
  return (
    <>
      <div className="treated">
        <SideNavbar d1="Logo" d2="Upcoming Patient" d3="Treated Patient"  path1="/Treatedp" path2="/Upcomingp"/>
        <div className="row">
          <div className="col-md-3">
            <Card picture = {t4} />
          </div>

          <div className="col-md-3">
            <Card picture = {t4}  />
          </div>
          
           <div className="col-md-3">
            <Card picture = {t4}  />
          </div>
          <div className="col-md-3">
            <Card  picture = {t4}  />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  />
          </div>
          <div className="col-md-3">
            <Card  picture = {t4}  />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  />
          </div>
          <div className="col-md-3">
            <Card picture = {t4}  />
          </div>
          
        </div>
      </div>
      </>
  );
};

export default Treatedp;
