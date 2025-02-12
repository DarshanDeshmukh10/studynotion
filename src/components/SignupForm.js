import React, { useState } from 'react'
import { FaEye,FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
  const[formData,setFormData]=useState({
    firstName:"",
    LastName:"",
    email:"",
    password:"",
    confirmPassword:""
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
    <div>
      <div>
        <button>
            Student
        </button>
        <button>
            Instructor
        </button>
      </div>
      <form >
        <div>
        <label>
            <p>First Name<sup>*</sup></p>
            <input type="text"required name="firstName" onChange={changeHandler} placeholder='Enter first Name' value={formData.firstName}/>
        </label>

        <label>
            <p>last Name<sup>*</sup></p>
            <input type="text"required name="lastName" onChange={changeHandler} placeholder='Enter last Name' value={formData.lastName}/>
        </label>
      
        </div>

        <label>
            <p>Email Address<sup>*</sup></p>
            <input type="email"required name="email" onChange={changeHandler} placeholder='Enter email Address' value={formData.email}/>
        </label>

       <div>
       <label>
            <p>Create Password<sup>*</sup></p>
            <input type={showPassword?("text"):("password")} required name="password" onChange={changeHandler} placeholder='Enter password' value={formData.password}/>
             <span onClick={()=>setShowPassword((prev)=>!prev)}>
                      {showPassword?(<FaEyeSlash/>):(<FaEye/>)}
            </span>
        </label>

        <label>
            <p>Confirm Password<sup>*</sup></p>
            <input type={showPassword?("text"):("password")} required name="confirmPassword" onChange={changeHandler} placeholder='Confirm password' value={formData.confirmPassword}/>
             <span onClick={()=>setShowPassword((prev)=>!prev)}>
                      {showPassword?(<FaEyeSlash/>):(<FaEye/>)}
            </span>
        </label>
        <button>
            Create Account
        </button>
       </div>
        
        </form>
    </div>
  )
}

export default SignupForm
