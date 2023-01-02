import React from 'react'
import Footer from '../footer/Footer'
import LoginPage from '../Loginpage/loginpage'
import './style.css'

const Admin = () => {
  return (
    <>
    <div className='Admin'>
        <LoginPage name = "Admin"  newpage="/Admin1" color = "btn btn-secondary"/>
    </div>
    <Footer/>
    </>
  )
}

export default Admin;