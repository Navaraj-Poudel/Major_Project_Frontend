import React from 'react'
import Loginpage from '../Loginpage/loginpage'
import './style.css'

const Patient = () => {
  return (
    <div className='Patient'> 
      <Loginpage name = "Patient" newpage="/Patient1" />
    </div>
  )
}

export default Patient