import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
  const navigate=useNavigate();
  const[formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const[showPassword,setShowPassword]=useState(false);
  const [accountType, setAccountType] = useState("student");

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
      if(formData.password!==formData.confirmPassword){
        toast.error("Password do not match")
        return;
      }
     setIsLoggedIn(true);
     toast.success("Account Created");
     navigate('/dashboard');
  }
    return (
    <div>
      <div className='flex bg-[#161d29] p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button className={`${accountType==='student'?'bg-[#000814] text-[#f1f2ff] rounded-full py-2 px-5 transition-all duration-500':'bg-transparent text-[#999daa] py-2 px-5 rounded-full transition-all duration-200'}`}
         onClick={()=>setAccountType('student')}>
            Student
        </button>
        <button className={`${accountType==='instructor'?'bg-[#000814] text-[#f1f2ff] rounded-full py-2 px-5 transition-all duration-500':'bg-transparent text-[#999daa] py-2 px-5 rounded-full transition-all duration-200'}`} onClick={()=>setAccountType('instructor')}>
            Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className='flex gap-x-4 mt-[20px]'>
        <label className='w-full'>
            <p className='text-[0.87rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-rose-900'>*</sup></p>
            <input type="text"required name="firstName" onChange={changeHandler} placeholder='Enter first Name' value={formData.firstName} className='bg-[#161d29] rounded-[0.5rem] text-white w-full p-[12px]'/>
        </label>

        <label className='w-full'>
            <p className='text-[0.87rem] text-white mb-1 leading-[1.375rem]'>last Name<sup className='text-rose-900'>*</sup></p>
            <input type="text"required name="lastName" onChange={changeHandler} placeholder='Enter last Name' value={formData.lastName} className='bg-[#161d29] rounded-[0.5rem] text-white w-full p-[12px]'/>
        </label>
      
        </div>

        <div className='mt-[20px]'>
        <label className='w-full mt-[20px]'>
            <p className='text-[0.87rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-rose-900'>*</sup></p>
            <input type="email"required name="email" onChange={changeHandler} placeholder='Enter email Address' value={formData.email} className='bg-[#161d29] rounded-[0.5rem] text-white w-full p-[12px]'/>
        </label>
        </div>
        

       <div className='flex gap-x-4 mt-[20px]'>
       <label className='w-full relative'>
            <p className='text-[0.87rem] text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-rose-900'>*</sup></p>
            <input type={showPassword?("text"):("password")} required name="password" onChange={changeHandler} placeholder='Enter password' value={formData.password} className='bg-[#161d29] rounded-[0.5rem] text-white w-full p-[12px]'/>
             <span onClick={()=>setShowPassword((prev)=>!prev)} className='absolute right-3 top-[38px] cursor-pointer'>
                      {showPassword?(<FaEyeSlash fontSize={24} fill='#AFB2BF'/>):(<FaEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.87rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-rose-900'>*</sup></p>
            <input type={showPassword?("text"):("password")} required name="confirmPassword" onChange={changeHandler} placeholder='Confirm password' value={formData.confirmPassword} className='bg-[#161d29] rounded-[0.5rem] text-white w-full p-[12px]'/>
             <span onClick={()=>setShowPassword((prev)=>!prev)} className='absolute right-3 top-[40px] cursor-pointer'>
                      {showPassword?(<FaEyeSlash fontSize={24} fill='#AFB2BF'/>):(<FaEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>
       
       </div>
       <button className='bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-4 w-full'>
            Create Account 
        </button> 
        </form>
    </div>
  )
}

export default SignupForm
