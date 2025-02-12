import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
const LoginForm  = ({setIsLoggedIn}) => {
  const navigate=useNavigate();
  const[formData,setFormData]=useState({
    email:"",password:""
  })
  const[showPassword,setShowPassword]=useState(false);
  function changeHandler(event){
    setFormData((prevData)=>(
      { 
        ...prevData,
        [event.target.name]:event.target.value
      }
    ))
  }
  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>Email Address <sub>*</sub></p>
        <input type="text" value={formData.email} required onChange={changeHandler} placeholder='Enter email id' name='email'/>
      </label>

      <label> 
        <p>Password <sub>*</sub></p>
        <input type={showPassword?("text"):("password")} value={formData.password} required onChange={changeHandler} placeholder='Enter Password' name='password'/>
        <span onClick={()=>setShowPassword((prev)=>!prev)}>
          {showPassword?(<FaEyeSlash/>):(<FaEye/>)}
        </span>
        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>
    <button >
      Sign In
    </button>
    </form>
  )
}

export default LoginForm
