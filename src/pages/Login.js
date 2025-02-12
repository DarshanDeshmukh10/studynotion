import React from 'react'
import loginImg from '../assets/login.png'
import Template from '../components/Template'
const Login = ({setIsLoggedIn}) => {
  return (
    <div>
       <Template
        title='Welcome back'
        desc1='Build skills for today, tomorrow and beyond'
        desc2='Education to future-proof your carrer'
        image={loginImg}
        formtype='login'
        setIsLoggedIn={setIsLoggedIn}
       />
    </div>
  )
}

export default Login
