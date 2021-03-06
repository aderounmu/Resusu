import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HeroNavBar from '../components/HeroNavBar';
// import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Profile2 from '../pages/Profile2';
import LandingPage2 from '../pages/LandingPage2'
import LandingPage from '../pages/LandingPage';
import AddGroup from '../pages/AddGroup';
import AddUserPage from '../pages/AddUserPage';
import UserGroup from '../pages/UserGroup';
import DepositPage from '../pages/DepositPage';
const Main = () => {
  return (
      <div className='bg-slate-100 h-full'>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LandingPage />}/>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/profilepage' element={<Profile />}/>
                  <Route path='/profile' element={<Profile2/>}/>
                  <Route path='/landingpage2' element={<LandingPage2 />} />
                  <Route path='/group/add' element={<AddGroup />} />
                  {/* <Route path='/group/:GroupId/user/' element={<AddUserPage/>}/> */}
                  <Route path='/group/join' element={<AddUserPage/>}/>
                  <Route path='/group/:id' element={<UserGroup/>}/>
                  <Route path='/group/deposit/:id/amount/:amount' element={<DepositPage/>}/>
              </Routes>
          </BrowserRouter>

    </div>
  );
}

export default Main