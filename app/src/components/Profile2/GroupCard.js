import React,{useState} from 'react'
import {GoKebabVertical} from 'react-icons/go'
import {FaEdit ,FaTrash , FaExternalLinkAlt } from 'react-icons/fa'



const GroupCard = () => {

    const [toggleSub, setToggleSub] = useState(false)
    
    const openSub = () => { setToggleSub(true) }
    const closeSub = () => {setToggleSub(false)}

  return (
    <div className="rounded-md p-5 shadow-sm m-4 bg-white mt-8 relative" >
       { !toggleSub ? '': <div className="absolute right-[10px]">
            
            <ul className='px-4 py-2 shadow-sm bg-slate-50' >
                <li className='my-2 w-full flex items-center justify-around'><span> Open</span> <FaExternalLinkAlt className='inline ml-2'/></li>
                <li className='my-2 w-full flex items-center justify-around'><span> Edit</span> <FaEdit className='inline ml-2'/></li>
                <li className='my-2 w-full flex items-center justify-around'><span> Delete</span> <FaTrash className='inline ml-2'/></li>
                
            </ul>
        </div> }

        <div className="flex justify-between round">
        <div className='font-bold text-lg' onClick={()=> closeSub()}>
            Group A
        </div>
            <button onClick={()=> openSub()}> <GoKebabVertical/></button>
        </div>

        
        <div className='py-3 px-4 my-3 bg-blue-100 rounded-md flex justify-between' onClick={()=> closeSub()}>
            <span>admin :</span>  <span> 87sjhshdhhdhd</span>
        </div>
        <div className='py-3 px-4 my-3 bg-blue-100 rounded-md flex justify-between' onClick={()=> closeSub()}>
            <span>groupBuyInAmount :</span>  <span> 87 ETH</span>
        </div>
        <div className='py-3 px-4 my-3 bg-blue-100 rounded-md flex justify-between' onClick={()=> closeSub()}>
            <span>groupBalance :</span>  <span> 300 ETH</span>
        </div>

    </div>
  )
}

export default GroupCard