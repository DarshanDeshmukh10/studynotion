import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'
const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-8 justify-between gap-y-0'>
      <div className='w-11/12 max-w-[450px] mx-0'>
        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-white'>{desc1}</span>
            <br />
            <span className='text-blue-300 italic'>{desc2}</span>
        </p>
        {
            formtype==='signup'?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        }
        <div className='flex w-full items-center my-4 gap-x-2'>
        <div className='h-[1px] bg-[#2c333f] w-full'></div>
        <p className='text-[#2c333f] font-medium leading-[1.375rem]'>OR</p>
        <div className='h-[1px] bg-[#2c333f] w-full'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-[#afb2bf] border border-[#2c333f] px-[12px] py-[8px] gap-x-2 mt-6'>
            <FcGoogle/>
            <p>Sign up with Google</p>
        </button>
        
      </div>
      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImage} alt="frame" width={558} height={504} loading='lazy'/>
        <img src={image} alt="student" width={558} height={504} loading='lazy' className='absolute -top-4 right-4'/>
      </div>

    </div>
  )
}

export default Template
