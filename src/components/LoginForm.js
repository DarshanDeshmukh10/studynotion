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
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
      <label className='w-full '>
        <p className='text-[0.87rem] text-white mb-1 leading-[1.375rem]'>Email Address <sup className='text-rose-900'>*</sup></p>
        <input type="text" value={formData.email} required onChange={changeHandler} placeholder='Enter email id' name='email' className='bg-[#161d29] rounded-[0.5rem] text-white w-full p-[12px]'/>
      </label>

      <label className='w-full relative'> 
        <p className='text-[0.87rem] text-white mb-1 leading-[1.375rem]'>Password <sub className='text-rose-900'>*</sub></p>
        <input type={showPassword?("text"):("password")} value={formData.password} required onChange={changeHandler} placeholder='Enter Password' name='password' className='bg-[#161d29] rounded-[0.5rem] text-white w-full p-[12px]'/>
        <span onClick={()=>setShowPassword((prev)=>!prev)} className='absolute right-3 top-[38px] cursor-pointer '>
          {showPassword?(<FaEyeSlash fontSize={24} fill='#AFB2BF'/>):(<FaEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
        <Link to="#">
          <p className='text-xs mt-1 text-blue-600  max-w-max ml-auto'>Forgot Password</p>
        </Link>
      </label>
    <button className='bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-4'>
      Sign In
    </button>
    </form>
  )
}

export default LoginForm
