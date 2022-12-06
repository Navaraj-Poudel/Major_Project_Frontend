import React from 'react'
import { Link } from 'react-router-dom'
const sideNavbar = (props) => {
  return (
    <div>
      <div className='main-container'>
      <div class="sidenav">
        <h3>{props.d1}</h3>
  <Link to={props.path1}>{props.d2}</Link>
  <Link to={props.path2}>{props.d3}</Link>
  <Link to={props.path3}>{props.d4}</Link>
  <Link to={props.path4}>{props.d5}</Link>
</div>
    </div>
    </div>
  )
}

export default sideNavbar
