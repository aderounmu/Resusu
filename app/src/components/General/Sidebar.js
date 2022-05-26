import React from 'react'
import { FaUsers , FaHome} from "react-icons/fa";
import {BsGearFill} from 'react-icons/bs'
import { CubeIcon, CurrencyDollarIcon, CurrencyEuroIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';



const SideBar = () => {
  return (
    <aside className="z-10 side-bar-inner pt-3 lg:pt-24 px-3 bg-white fixed lg:h-screen w-full lg:w-auto bottom-0 ">
        <div className=" px-5 hidden lg:block text-2xl font-mono">
            Resusu
        </div>
        <ul className='text-xl px-5 py-4 border-gray-300 border-b-[1px] flex flex-row justify-between lg:flex-col '>
            <li className=""> 
            <Link to={'/'} className="py-5 text-black flex flex-col lg:flex-row items-center">
                <FaHome/>
                <span className="pl-2  mt-3 lg:mt-0">Home</span>
            </Link>  
            </li>
            <li>
            <Link  to="/profile" className="py-5  text-black flex flex-col lg:flex-row items-center"> 
                <FaUsers/>
                <span className="pl-2  mt-3 lg:mt-0">My Groups</span>
            </Link>
            </li>
            
            <li className="py-5  text-black flex flex-col lg:flex-row items-center"> 
                <BsGearFill/>
                <span className="pl-2 mt-3 lg:mt-0">Account</span>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar