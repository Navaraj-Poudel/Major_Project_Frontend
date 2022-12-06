import React from 'react'
import LoginPage from '../Loginpage/loginpage'
import './style.css'

const Admin = () => {
  return (
    <div className='Admin'>
        <LoginPage name = "Admin"  newpage="/Admin1"/>
    </div>
  )
}

export default Admin;