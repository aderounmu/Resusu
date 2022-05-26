import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-full'>
         <footer>
                <div className='p-10 bg-blue-100 '>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                            <div className='mb-5 cursor-pointer'>
                                <Link to='/'>
                                    <h4 className='text-2xl pb-4'>RESUSU</h4>
                                </Link>
                                <div className='mb-5 text-gray-500'>
                                    343 Blackwell Street,<br />Festac LG,<br />Enugu.
                                    <p><strong>Phone: </strong>+23409087625436</p>
                                    <p><strong>Emai: </strong>info@resusu.io</p>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <h4 className='pb-4'>Links</h4>
                                <ul className='text-gray-500'>
                                    <li className='pb-4 hover:text-black'>Home</li>
                                    <li className='pb-4 hover:text-black'>About</li>
                                    <li className='pb-4 hover:text-black'>Features</li>
                                    <li className='pb-4 hover:text-black'>Contact</li>
                                </ul>
                            </div>
                            <div className='mb-5'>
                                <h4 className='pb-4'>Plans</h4>
                                <ul className='text-gray-500'>
                                    <li className='pb-4 hover:text-black'>lite</li>
                                    <li className='pb-4 hover:text-black'>midi</li>
                                    <li className='pb-4 hover:text-black'>gold</li>
                                </ul>
                            </div>
                            <div className='mb-5'>
                                <h4 className='pb-4'>Join Our Community</h4>
                                <p className='text-gray-500 pb-2'>Don't miss out</p>
                                <form className='flex flex-row flex-wrap '>
                                    <input className='text-gray-500 w-2/3 px-2 rounded-l-sm' type='text' placeholder='example@gmail.com' />
                                    <button className='p-2 w-1/3 text-white bg-blue-300 hover:bg-blue-500 rounded-r-sm'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gray-800 text-gray-400 px-10'>
                    <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                        <div className='text-center'>
                            <div className='font-bold'>
                                Copyright RESUSU. All Rights Reserved
                            </div>
                        </div>
                        <div className='text-center text-white grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
                            <AiOutlineWhatsApp className='w-8 h-8 p-1 rounded-full bg-blue-300 hover:bg-blue-500 mx-1 inline-block pt-1'/>
                            <AiFillFacebook className='w-8 h-8 p-1 rounded-full bg-blue-300 hover:bg-blue-500 mx-1 inline-block pt-1'/>
                            <AiFillInstagram className='w-8 h-8 p-1 rounded-full bg-blue-300 hover:bg-blue-500 mx-1 inline-block pt-1'/>
                            <AiFillYoutube className='w-8 h-8 p-1 rounded-full bg-blue-300 hover:bg-blue-500 mx-1 inline-block pt-1'/>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer