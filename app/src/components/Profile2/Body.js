import React from 'react'
import GroupCard from './GroupCard'
import { FaPlusCircle} from "react-icons/fa";

function Body() {
  return (
    <div className='px-5 py-10 lg:ml-48 lg:px-7 mb-24'>
        <div className='flex flex-row justify-between items-center'>
            <div className=''>
                <div className=' text-2xl lg:text-4xl font-semibold'>Good Morning</div>
                <div className='text-base mt-2 text-gray-400'>Here what's happening in today</div>
            </div>
            <div>
            <div className='text-xl font-medium'>
                Total Holding
            </div>
                <div className='text-base text-gray-400'>200 ETH</div>
             </div>  
           
        </div>

        {/* Cards */}


        <div className='mt-9'>
            <div className='flex flex-row items-center'>
                <div className='text-bold text-2xl'> Your Groups</div>
                <div className='ml-5'>
                    <button className="px-3 py-2 bg-cyan-200 rounded">
                        <FaPlusCircle className='inline mr-2'/> Add Group
                    </button>
                </div>
            </div>
            
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
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
        </div>
        
    </div>
  )
}

export default Body