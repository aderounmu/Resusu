import React from 'react'

const NavbarItem = ({ title, Icon }) => {
    return (
        <div className='flex flex-col group items-center cursor-pointer w-12 sm:w-20 hover:text-[#4285F6]'>
            <Icon className='h-8 mb-1 group-hover:animate-bounce' />
            <p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
        </div>

    );
}

export default NavbarItem