import React from 'react'
import SideNavbar from '../doctor1/sideNavbar'
import t4 from '../images/t4.jpg'
const Yourinfo = () => {
  return (
    <>
    
    <div className='patient'>
          <SideNavbar  d1="Logo" d2="Your information" d3="Previous test report" d4 ="Latest test report" path1="/Yourinfo" path2="/Previoustr" path3="/Latesttr"/>         
          <div className="yourinfo">
          <img src={t4} class="card-img-top" alt="..." />
          </div>
          <div className="personalinfo">
            <h6>Name : MIA Khalifa </h6>
            <h6>Age : 29 years old </h6>
            <h6> Sex: Female </h6>
            <h6>Date Of Birth: 2001 may 09</h6>
            <h6>Current address:Lamachaure,Pokhara </h6>
            <h6>Permanent address:Kawasoti </h6>
            <h6>Email id:sunarakash@gmail.com </h6>
            <h6>Weigth:72kg </h6>
            <h6>Height:5.4 </h6>
            <h6>Phone:9867767616 </h6>
          </div>
    </div> 
    </>
  )
}

export default Yourinfo