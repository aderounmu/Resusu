import React from 'react'
import { HomeIcon, UserIcon, SearchIcon, LightningBoltIcon  } from '@heroicons/react/solid'
import NavbarItem from './NavbarItem';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='flex flex-col sm:flex-row m-4 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <NavbarItem title='HOME' Icon={HomeIcon} />
                <NavbarItem title='SEARCH' Icon={SearchIcon} />
                <NavbarItem title='TRANSACTIONS' Icon={LightningBoltIcon} />
                <NavbarItem title='ACCOUNT' Icon={UserIcon} />
            </div>
        </header>
    );
}

export default Navbar