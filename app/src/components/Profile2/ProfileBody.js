import React,{ useEffect , useState} from 'react'
import GroupCard from './GroupCard'
import { FaPlusCircle} from "react-icons/fa";
import { useWallet } from '../../context/walletContext'
import { useNavigate } from 'react-router-dom';
import { ethers } from "ethers";
// import { createUserProfile } from '../../services'
const ProfileBody = ({account, data , user}) => {

    const navigate = useNavigate()
    
    return (
    <>
    <div className='flex flex-row justify-between items-center'>
            <div className=''>
                <div className=' text-2xl lg:text-4xl font-semibold'>Good Morning</div>
                <div className='text-base mt-2 text-gray-400'>{account}</div>
            </div>
            <div>
            <div className='text-xl font-medium'>
                Total Holding
            </div>
                <div className='text-base text-gray-400'>{ user.amount} ETH</div>
             </div>  
           
        </div>

        {/* Cards */}


        <div className='mt-9'>
            <div className='flex flex-row items-center'>
                <div className='text-bold text-2xl'> Your Groups</div>
                <div className='ml-5'>
                    <button onClick={()=> navigate('/group/add')} className="px-3 py-2 bg-cyan-200 rounded">
                        <FaPlusCircle className='inline mr-2'/> Add Group
                    </button>
                </div>
                <div className='ml-5'>
                    <button onClick={()=> navigate('/group/join/')} className="px-3 py-2 bg-red-200 rounded">
                        <FaPlusCircle className='inline mr-2'/> Join Group
                    </button>
                </div>
            </div>
            
            <div className=' mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6'>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
            </div>
            
            {/* <button onClick={ () =>{
                connectWallet();
                console.log('People')
            }}>
                click me
            </button>
            <button onClick={ () =>{
                disconnect();
                console.log('Pd')
            }}>
                disconnect
            </button> */}
        </div>
    </>
  )
}

export default ProfileBody