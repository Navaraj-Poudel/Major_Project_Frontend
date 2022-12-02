import React from 'react'
 import './style.css'
 import { Link } from "react-router-dom";
const loginpage = (props) => {
  return (
    <>

      <div className="login">
        <form className='needs-validation'>
            <div className="login-1">

         <h1>{props.name} Login-Page!!</h1>

        <div className="form-group was-validated">
                <label className='form-label' htmlFor='email'>Email Adress</label><br />
                <input className='form-control' type="email" id='email' required/> 

                <div className="invalid-feedback">
                    Please Enter your Email adress
                </div>
        </div>

        <div className="form-group was-validated">
                <label className='form-label' htmlFor='password'>Password</label><br />
                <input className='form-control' type="password" id='password' required/> 
                <div className="invalid-feedback">
                    Please Enter your Password
                </div>
        </div>
        <div className="form-group">
                <input type="checkbox" id='checkbox'/> 
                <label htmlFor='checkbox'>Remember me</label>
        </div>
        
        <Link class="nav-link active" aria-current="page" to="/doctor1">
                  <h5> <input className='btn btn-success' type="submit" value="login-in"/></h5>
                </Link> 
       

            </div>
        </form>
      </div>
    </>
  )
}

export default loginpage