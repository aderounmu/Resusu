import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HeroNavBar from '../components/HeroNavBar';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

const Main = () => {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LandingPage />}></Route>
              </Routes>
              <Routes>
                  <Route path='/login' element={<Login />}></Route>
              </Routes>
              <Routes>
                  <Route path='/profilepage' element={<Profile />}></Route>
              </Routes>
          </BrowserRouter>
    </div>
  )
}

export default Main