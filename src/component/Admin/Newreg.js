import React from 'react'
import SideNavbar from '../doctor1/sideNavbar'
import Form from './Form'
const Newreg = () => {
  return (
    <div className='newreg'>
        <SideNavbar d1="Logo" d2="New Registration" d3="Add doctor"  path1="/Newreg" path2="/Addpatient"/>
        <Form/>
    </div>
  )
}

export default Newreg