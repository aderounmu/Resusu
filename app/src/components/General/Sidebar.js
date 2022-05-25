import React from 'react'
import { FaUsers , FaHome} from "react-icons/fa";
import {BsGearFill} from 'react-icons/bs'
import { CubeIcon, CurrencyDollarIcon, CurrencyEuroIcon } from '@heroicons/react/solid'


const SideBar = () => {
  return (
    <aside className="z-10 side-bar-inner pt-5 lg:pt-24 px-3 bg-white fixed lg:h-screen w-full lg:w-auto bottom-0 ">
        <div className=" px-5 hidden lg:block text-2xl font-mono">
            Resusu
        </div>
        <ul className='text-xl px-5 py-4 border-gray-300 border-b-[1px] flex flex-row justify-between lg:flex-col '>
            <li className="py-5  text-black flex flex-row items-center"> 
                <FaHome/>
                <span className="pl-2">Home</span>
            </li>

            <li className="py-5  text-black flex flex-row items-center"> 
                <FaUsers/>
                <span className="pl-2">My Groups</span>
            </li>

            <li className="py-5  text-black flex flex-row items-center"> 
                <BsGearFill/>
                <span className="pl-2">Account</span>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar