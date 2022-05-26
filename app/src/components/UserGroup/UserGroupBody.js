import React from 'react'
import GroupCard from '../Profile2/GroupCard'
import { useNavigate } from 'react-router-dom'
import UserMember from './UserMember';

const UserGroupBody = () => {
    const navigate = useNavigate();
  return (
    <> 
        {/* heading */}
        <div className='flex flex-row items-center'>
            <div className=''>
                <div className=' text-2xl lg:text-4xl font-semibold'>Welcome to <span className='text-green-300'>Group A</span></div>
                <div className='text-base mt-2 text-gray-400'>Here what's happening in today</div>
            </div>
        </div>

        {/*  */}
        <div className='lg:flex lg:flex-row-reverse lg:items-end lg:justify-between mt-6 lg:mt-9 mb-9' >
            <div className="lg:w-3/6">
                <GroupCard isUser={true}/>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 mt-8 justify-between lg:mt-0 lg:w-2/5 w-full '>
                <div className='my-3'>
                    <button onClick={()=> navigate('/group/add')} className="px-3 py-2 bg-cyan-200 rounded">
                           Activate
                    </button>
                </div>
                <div className='my-3'>
                    <button onClick={()=> navigate('/group/add')} className="px-3 py-2 bg-pink-200 rounded">
                            Deposit
                    </button>
                </div>
                <div className='my-3'>
                    <button onClick={()=> navigate('/group/add')} className="px-3 py-2  bg-green-200 rounded">
                            Withdraw
                    </button>
                </div>
                <div className='my-3'>
                    <button onClick={()=> navigate('/group/add')} className="px-3 py-2  bg-gray-400 rounded">
                            Group Link
                    </button>
                </div>
            </div>
        </div>

        {/* Members of the Group */}
        <div>
        
        <div class="my-6 text-3xl font-semibold">Group Members</div>
        
        <ul>
            {[1,2,3,4,5].map((index) => <li className='my-5'>
                <UserMember/>
            </li>)}
        </ul>

        </div>


    </>
  )
}

export default UserGroupBody