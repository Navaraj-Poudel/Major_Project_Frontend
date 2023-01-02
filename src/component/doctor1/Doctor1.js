import React from 'react'
import './style.css'
import SideNavbar from './sideNavbar'
import Footer from '../footer/Footer'
const Doctor1 = () => {
  return (
    <>
    <SideNavbar d1="Logo" d2="Treated Patient" d3="Upcoming Patient" path1="/Treatedp" path2="/Upcomingp"/>
    <Footer/>
    </>
  )
}

export default Doctor1
