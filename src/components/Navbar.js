import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast'
const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
    
    return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to='/'>
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>
      <nav >
        <ul className='flex gap-x-6 text-white'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
      </nav>

      {/* Buttons */}

      <div className='flex items-center gap-x-4'>
        
        { !isLoggedIn &&
            <Link to='/login'>
                <button className='bg-[#161d29] text-white py-[8px] px-[12px] rounded-[8px] border border-[#2c333f]'>
                    Log in
                    
                </button>
            </Link>
        }
        { !isLoggedIn &&
            <Link to='/signup'>
                <button className='bg-[#161d29] text-white py-[8px] px-[12px] rounded-[8px] border border-[#2c333f]'>
                    SignUp
                </button>
            </Link>
        }
        {   isLoggedIn &&
            <Link to='/'>
                <button onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }} className='bg-[#161d29] text-white py-[8px] px-[12px] rounded-[8px] border border-[#2c333f]'>
                    Logout
                </button>
            </Link>
        }
        {  isLoggedIn &&
            <Link to='/dashboard'>
                <button className='bg-[#161d29] text-white py-[8px] px-[12px] rounded-[8px] border border-[#2c333f]'>
                    Dashboard
                </button>
            </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
