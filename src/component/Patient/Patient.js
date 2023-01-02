import React from 'react'
import Footer from '../footer/Footer'
import Loginpage from '../Loginpage/loginpage'
import './style.css'

const Patient = () => {
  return (
    <>
    <div className='Patient'> 
      <Loginpage name = "Patient" newpage="/Patient1" color = "btn btn-primary" />
    </div>
    <Footer/>
    </>
  )
}

export default Patient