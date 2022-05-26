import React from 'react'
import {AiFillCheckCircle , AiFillCloseCircle} from 'react-icons/ai'

const UserMember = () => {
  return (
    <div className='flex flex-row bg-s0 py-8 px-4 bg-white justify-between rounded-xl shadow-lg'>
        <div className="text-xl font-medium">
            afsgsgggsggsgggszzbbzb
        </div>
        <div className="text-xl">
            12/10/2031
        </div>
        <div className="text-xl">
            ETH 1000
        </div>
        <div className='flex flex-row gap-6'>
            <AiFillCheckCircle className="text-green-600 text-2xl"/>
            <AiFillCloseCircle className='text-red-600 text-2xl'/>
            <AiFillCheckCircle className="text-green-600 text-2xl"/>
            <AiFillCloseCircle className="text-red-600 text-2xl"/>
            <AiFillCheckCircle className="text-green-600 text-2xl"/>
            <AiFillCheckCircle className="text-green-600 text-2xl"/>
        </div>
    </div>
  )
}

export default UserMember