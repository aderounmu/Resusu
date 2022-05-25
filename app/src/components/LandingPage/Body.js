import React from 'react'
import { Link } from 'react-router-dom';

const Body = () => {
    return (

        /* INTRO */
        <div className='bg-white py-44 px-20'>
            <div className='justify-between'>
                <div className='lg:text-left text-center'>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-4xl font-extrabold'>
                        Convenient Money <br />Management With <br /><span className='hover:text-gray-500'>RESUSU</span>
                    </h1>
                    <h3 className='pt-7 pb-7 lg:text-base md:text-base sm:text-sm text-gray-500'>
                        Get benefits saving with RESUSU on the web. <br />Manage funds easy and conveniently with RESUSU.
                    </h3>

                    <Link to='/login'>
                        <button className='bg-[#181620bc] px-3 py-3 text-white rounded-3xl hover:text-black hover:bg-gray-200'>Get Started</button>
                    </Link>
                
                    <div className='pt-7 md:w-4/12 sm:4/12 lg:w-2/12 justify-between flex'>
                        <div>
                            <h3 className='font-bold'>1k+</h3>
                            <p className='text-gray-500'>Active Users</p>
                        </div>
                        <div>
                            <h3 className='font-bold'>100k+</h3>
                            <p className='text-gray-500'>Total funds</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICES */}
            <div className='pt-14'>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* PLANS */} 
            <div className='pt-14'>
                <div className='text-center font-extrabold lg:text-4xl md:text-3xl sm:text-2xl lg:pb-5 sm:pb-3'>
                    Our Plans
                </div>
                <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                    <div className='rounded-lg overflow-hidden shadow-lg bg-gray-100'>
                        {/* image */}
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>RESUSU <span className='text-gray-400'>lite</span></div>
                            <p className='text-gray-500 truncate'>Monthly contributions spanning over 3 years with monthly payouts</p>
                        </div>
                        <div className='px-6 pt-4 pb-2 w-1/3'>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                More info
                            </button>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                Join
                            </button>
                        </div>
                    </div>
                    <div className='rounded-lg overflow-hidden shadow-lg bg-gray-100'>
                        {/* image */}
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>RESUSU <span className='text-blue-500'>midi</span></div>
                            <p className='text-gray-500 truncate'>Monthly contributions spanning over 5 years with monthly payouts and a raffle draw every 6 months!.</p>
                        </div>
                        <div className='px-6 pt-4 pb-2 w-1/3'>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                More info
                            </button>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                Join
                            </button>
                        </div>
                    </div>
                    <div className='rounded-lg overflow-hidden shadow-lg bg-gray-100'>
                        {/* image */}
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>RESUSU <span className='text-green-400'>Gold</span></div>
                            <p className='text-gray-500 truncate'>Monthly contributions spanning over 10 years with monthly payouts and a raffle draw every 3 months!.</p>
                        </div>
                        <div className='px-6 pt-3 pb-2 w-1/3'>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                More info
                            </button>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                Join
                            </button>
                        </div>
                    </div>
                    <div className='rounded-lg overflow-hidden shadow-lg bg-gray-100'>
                        {/* image */}
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>RESUSU <span className='text-red-400'>Gold</span></div>
                            <p className='text-gray-500 truncate'>Monthly contributions spanning over 10 years with monthly payouts and a raffle draw every 3 months!.</p>
                        </div>
                        <div className='px-6 pt-3 pb-2 w-1/3'>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                More info
                            </button>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                Join
                            </button>
                        </div>
                    </div>
                    <div className='rounded-lg overflow-hidden shadow-lg bg-gray-100'>
                        {/* image */}
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>RESUSU <span className='text-yellow-400'>Gold</span></div>
                            <p className='text-gray-500 truncate'>Monthly contributions spanning over 10 years with monthly payouts and a raffle draw every 3 months!.</p>
                        </div>
                        <div className='px-6 pt-3 pb-2 w-1/3'>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                More info
                            </button>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                Join
                            </button>
                        </div>
                    </div>
                    <div className='rounded-lg overflow-hidden shadow-lg bg-gray-100'>
                        {/* image */}
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>RESUSU <span className='text-purple-600'>Gold</span></div>
                            <p className='text-gray-500 truncate'>Monthly contributions spanning over 10 years with monthly payouts and a raffle draw every 3 months!.</p>
                        </div>
                        <div className='px-6 pt-3 pb-2 w-1/3'>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                More info
                            </button>
                            <button className='inline-block bg-[#181620bc] rounded-full px-3 py-1 text-sm font-semibold hover:text-black hover:bg-gray-200 text-white mb-2'>
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className='bg-[#181620bc] text-white'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                        <Link to='/' className='mb-5 cursor-pointer'>
                            <h4>RESUSU</h4>
                        </Link>
                    </div>
                    <div className='mb-5'>
                        343 Blackwell Street,<br />Festac LG,<br />Enugu.
                        <p><strong>Phone: </strong>+23409087625436</p>
                        <p><strong>Emai: </strong>info@resusu.io</p>
                    </div>
                    <div className='mb-5'>
                        <h4>Links</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Features</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h4>Plans</h4>
                        <ul>
                            <li>lite</li>
                            <li>midi</li>
                            <li>gold</li>
                            <li>gold</li>
                            <li>gold</li>
                            <li>gold</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h4>Join Our Community</h4>
                        <p>Don't miss out</p>
                        <form>
                            <input type='text' placeholder='your email' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Body