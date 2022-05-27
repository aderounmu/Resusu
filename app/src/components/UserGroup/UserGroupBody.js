import React, {useState , useEffect} from 'react'
import GroupCard from '../Profile2/GroupCard'
import { useNavigate } from 'react-router-dom'
import UserMember from './UserMember';
import { useWallet, WalletConnectModal } from '../../context/walletContext'
import { getGroupbyId } from '../../services/index.js'
import { modifiyGroup } from '../../utils';




const UserGroupBody = () => {
    
    const [data , setData] = useState(null);
    const [groupData, setGroupData] = useState({
        groupName: '' ,
        groupBuyInAmount: '',
        groupCoordinator: '' ,
        groupBalance: '',
        groupActivationTime: '',
    })
    const [loading , setloading] = useState(true);

    const { connectWallet, account , isActive , provider , chainId  ,ethLib } = useWallet()

    async function getData(){
        setloading(true)    

        try{

            const _data = await getGroupbyId(ethLib,chainId,1);
            setData(_data)

            const _x = modifiyGroup(_data[0])
            setGroupData(_x)
            

            

        }catch(err){
            throw err
        }

        setloading(false)
    }

    useEffect(()=>{

        //set state
        getData()


    },[])


    const navigate = useNavigate();
  return (
    <> 
        {/* heading */}
        <div className='flex flex-row items-center'>
            <div className=''>
                <div className=' text-2xl lg:text-4xl font-semibold'>Welcome to <span className='text-green-300'>{groupData.groupName}</span></div>
                <div className='text-base mt-2 text-gray-400'>Here what's happening in today</div>
            </div>
        </div>

        {/*  */}
        <div className='lg:flex lg:flex-row-reverse lg:items-end lg:justify-between mt-6 lg:mt-9 mb-9' >
            <div className="lg:w-3/6">
                <GroupCard 
                    groupName ={groupData.groupName}
                    groupBuyInAmount={groupData.groupBuyInAmount}
                    groupCoordinator ={groupData.groupCoordinator}
                    groupBalance={groupData.groupBalance}
                    groupActivationTime={groupData.groupActivationTime}
                isUser={true}/>
            </div>
            <div className='grid  grid-cols-3 mt-8 gap-4 justify-between lg:mt-0 lg:w-2/5 w-full '>
                <div className='my-3'>
                    <button onClick={()=> navigate('/group/add')} className="px-3 py-2 bg-cyan-200 rounded w-full">
                           Activate
                    </button>
                </div>
                <div className='my-3'>
                    <button onClick={()=> navigate('/group/add')} className="px-3 py-2 bg-pink-200 rounded w-full">
                            Deposit
                    </button>
                </div>
                <div className='my-3'>
                    <button onClick={()=> navigate('/group/add')} className="px-3 py-2  bg-green-200 rounded w-full ">
                            Withdraw
                    </button>
                </div>
                {/* <div className='my-3'>
                    <button onClick={()=> navigate('/group/1/user/')} className="px-3 py-2  bg-gray-400 rounded">
                            Group Link
                    </button>
                </div> */}
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