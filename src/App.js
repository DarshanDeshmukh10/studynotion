import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
function App() {
  const[isLoggedIn, setUserLoggedIn]=useState(false);
  return (

    <div>
      <Navbar isLoggedIn={isLoggedIn} setUserLoggedIn={setUserLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        
      </Routes>

      
    </div>
  );
}

export default App;
