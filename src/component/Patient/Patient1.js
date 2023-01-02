import React from 'react'
import SideNavbar from "../doctor1/sideNavbar";
const Patient1 = () => {
  return (
    <div>
      <SideNavbar  d1="Logo" d2="Patient information" d3="Previous test report" d4 ="Latest test report" path1="/Yourinfo" path2="/Previoustr" path3="/Latesttr"/>
    </div>
  )
}

export default Patient1
