import React from 'react'

const HeroBtn = (props) => {
    return (
        <div>
            <button className='bg-black text-white py-2 px-6 rounded md:ml-8 hover:bg-[#82B1FF] duration-500'>
                {props.children}
            </button>
        </div>
    );
}

export default HeroBtn