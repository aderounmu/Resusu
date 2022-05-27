import React,{useEffect, useState} from 'react'
import {GoKebabVertical} from 'react-icons/go'
import {FaEdit ,FaTrash , FaExternalLinkAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'


const GroupCard = ({isUser, groupName ,
groupBuyInAmount,
groupCoordinator ,
groupBalance,
groupActivationTime}) => {

    const [toggleSub, setToggleSub] = useState(false)
    const navigate = useNavigate();

    
    const openSub = () => { setToggleSub(true) }
    const closeSub = () => {setToggleSub(false)}


    const bgcolor = [
        'bg-blue-100',
        'bg-green-100',
        'bg-purple-100',
        'bg-red-100',
        'bg-yellow-100',
    ]
    let mybgcolor = bgcolor[Math.floor(Math.random() * bgcolor.length)]

  return (
    <div className="rounded-md p-5 shadow-sm bg-white relative" >
       { !toggleSub ? '': <div className="absolute right-[10px]">
            
            <ul className='px-4 py-2 shadow-sm bg-slate-50' >
                <li>
                    <Link to={'/group/1'} className='my-2 w-full flex items-center justify-around'>
                        <span> Open</span> <FaExternalLinkAlt className='inline ml-2'/>
                    </Link>
                </li>
                <li>
                    <Link to={'/'} className='my-2 w-full flex items-center justify-around'>
                        <span> Edit</span> <FaEdit className='inline ml-2'/>
                    </Link>
                </li>
                <li>
                    <Link to={'/'} className='my-2 w-full flex items-center justify-around'>
                        <span> Delete</span> <FaTrash className='inline ml-2'/>
                    </Link>
                </li>
                
            </ul>
        </div> }

        { isUser ? <></>:<div className="flex justify-between round">
            <div className='font-bold text-lg' onClick={()=> closeSub()}>
                {groupName}
            </div>
             <button onClick={()=> openSub()}> <GoKebabVertical/> </button> 
        </div> }

        
        <div className={`py-3 px-4 my-3 rounded-md flex justify-between ${mybgcolor}`} onClick={()=> closeSub()}>
            <span>admin :</span>  <span> {groupCoordinator}</span>
        </div>
        <div className={`py-3 px-4 my-3 rounded-md flex justify-between ${mybgcolor}`} onClick={()=> closeSub()}>
            <span>groupBuyInAmount :</span>  <span> {groupBuyInAmount}</span>
        </div>
        <div className={`py-3 px-4 my-3 rounded-md flex justify-between ${mybgcolor}`} onClick={()=> closeSub()}>
            <span>groupBalance :</span>  <span> {groupBalance}</span>
        </div>

    </div>
  )
}

export default GroupCard