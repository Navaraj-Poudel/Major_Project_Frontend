import React from 'react'
import Card from "./Card";
import SideNavbar from './sideNavbar'
import t3 from '../images/t3.jpg'
import './style.css'
import Footer from '../footer/Footer';
const Upcomingp = () => {
  return (
    <>
    <div className="treated">
    <SideNavbar d1="Logo" d2="Treated Patient" d3="Upcoming Patient"  path1="/Treatedp" path2="/Upcomingp"/>
    <div className="row">
      <div className="col-md-3">
        <Card  picture = {t3}  />
      </div>

      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      
       <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      <div className="col-md-3">
        <Card picture = {t3} />
      </div>
      
    </div>
  </div>
  <Footer/>
    </>
  )
}

export default Upcomingp
