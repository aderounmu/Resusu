import React from 'react'
import {FaArrowLeft} from 'react-icons/fa' 

const Message = ({Message , imagesrc ,color ,other, onClick}) => {
  return (
    <div className='mx-3 mt-4'>
        <div className='mb-3'>
            <button className='flex flex-row items-center px-3 py-1 hover:border-2 hover:border-blue-300 hover:rounded-md' onClick={ ()=> onClick()}>
                <FaArrowLeft/>
                <span className='ml-3'>Back</span>
            </button>
        </div>

        <div className='w-full h-full flex flex-col justify-center items-center relative'>
            
            <div>
                <img src={imagesrc} alt='message-image'/>
            </div>
            <div className={`pt-9 text-3xl font-semibold text-${color}-500 `}>
                {Message}
            </div>
            <div className={`pt-3 text-2xl `} >
                {other}
            </div>
        </div>
    </div>
  )
}

export default Message