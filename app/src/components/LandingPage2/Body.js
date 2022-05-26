import React from 'react'
import { Link } from 'react-router-dom';

import Footer from './Footer';
import OurPlan from './OurPlan';

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
            {/* <div className='pt-14'>
                <div></div>
                <div></div>
                <div></div>
            </div> */}

            {/* PLANS */} 
            <OurPlan/>
            {/* FOOTER */}
            <Footer/>
        </div>
    );
}

export default Body