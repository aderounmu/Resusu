import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { CubeIcon } from '@heroicons/react/solid'

const HeroNavBar = () => {

    let [open,setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-gray-100 py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center'>
                    <span className='text-3xl mr-1 pt-2'>
                    <CubeIcon className='h-8' />
                    </span>
                    RESUSU
                </div>
            
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <Link to='/' className='md:ml-8 text-xl md:my-0 my-7 font-semibold'>
                        <p className=' hover:text-gray-500 duration-500'>Home</p>
                    </Link>
                    <Link to='/' className='md:ml-8 text-xl md:my-0 my-7 font-semibold'>
                        <p className=' hover:text-gray-500 duration-500'>About</p>
                    </Link>
                    <Link to='/' className='md:ml-8 text-xl md:my-0 my-7 font-semibold'>
                        <p className=' hover:text-gray-500 duration-500'>Features</p>
                    </Link>
                    <Link to='/' className='md:ml-8 text-xl md:my-0 my-7 font-semibold'>
                        <p className=' hover:text-gray-500 duration-500'>Contact</p>
                    </Link>

                    <Link to='/login'>
                        <button className='bg-black text-white py-2 px-6 rounded md:ml-8 hover:bg-[#82B1FF] duration-500'>
                            Get Started
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    );
    
}

export default HeroNavBar
