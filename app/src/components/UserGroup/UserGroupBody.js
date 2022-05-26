import React from 'react'

const UserGroupBody = () => {
  return (
    <>
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
    </>
  )
}

export default UserGroupBody