import React, { useState } from 'react'
import { FaEye,FaEyeSlash } from "react-icons/fa";
const LoginForm = () => {
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
  return (
    <form>
      <label>
        <p>Email Address <sub>*</sub></p>
        <input type="text" value={formData.email} required onChange={changeHandler} placeholder='Enter email id'/>
      </label>

      <label>
        <p>Password <sub>*</sub></p>
        <input type={showPassword?("text"):("password")} value={formData.password} required onChange={changeHandler} placeholder='Enter Password'/>
        <span onClick={()=>setShowPassword((prev)=>!prev)}>
          {showPassword?(<FaEyeSlash/>):(<FaEye/>)}
        </span>
      </label>

    </form>
  )
}

export default LoginForm
