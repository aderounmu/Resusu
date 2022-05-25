import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HeroNavBar from '../components/HeroNavBar';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Profile2 from '../pages/Profile2';

const Main = () => {
  return (
      <div className='bg-slate-100 h-full'>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LandingPage />}/>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/profilepage' element={<Profile />}/>
                  <Route path='/profile' element={<Profile2/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  )
}

export default Main