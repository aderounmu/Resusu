import React, {useState , useEffect} from 'react'
import GroupCard from '../Profile2/GroupCard'
import { useNavigate , useParams } from 'react-router-dom'
import UserMember from './UserMember';
import { useWallet, WalletConnectModal } from '../../context/walletContext'
import { getGroupbyId, activateGroup, userWithdrawal, userDonation , payGroupMember } from '../../services/index.js'
import { modifiyGroup , modifiyUser } from '../../utils';




const UserGroupBody = () => {
    
    const [data , setData] = useState(null);
    const [groupData, setGroupData] = useState({
        groupName: '' ,
        groupBuyInAmount: '',
        groupCoordinator: '' ,
        groupBalance: '',
        groupActivationTime: '',
    })
    const params = useParams()

    const [userData,setUserData] = useState([])
    const [loading , setloading] = useState(true);

    const { connectWallet, account , isActive , provider , chainId  ,ethLib } = useWallet()

    async function getData(){
        setloading(true)    

        try{
            //use Param
            let _id = params.id
            _id = parseInt(_id)
            const _data = await getGroupbyId(ethLib,chainId,_id);
            setData(_data)
            const _x = modifiyGroup(_data[0])
            const _y = _data[1].map(item => modifiyUser(item))
            setUserData(_y)
            // console.log(_y)
            setGroupData(_x)
        }catch(err){
            throw err
        }

        setloading(false)
    }


    async function activate(){
        try{
            //useParam
            const _data = await activateGroup(ethLib,chainId,1);
        }catch(err){
            throw err
        }
    }

    async function widthdraw(){
        try{
            //useParam
            const _data = await userWithdrawal(ethLib,chainId);
        }catch(err){
            throw err
        }
    }


    async function deposit(){
        try{
            //useParam and update round
            const _data = await userDonation(ethLib,chainId , 1 , 1);
        }catch(err){
            throw err
        }
    }

    async function paygroupmember(){
        try{
            //useParam
            const _data = await payGroupMember(ethLib,chainId,1);
        }catch(err){
            throw err
        }
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
            <div className='flex flex-row mt-8 gap-4 justify-between lg:mt-0 lg:w-2/5 w-full '>
                
                { account !== groupData.groupCoordinator ? <></>: <><div className='my-3 flex-1'>
                    <button onClick={()=> activate()} className="px-3 py-2 bg-cyan-200 rounded w-full">
                           Activate
                    </button>
                </div>
                <div className='my-3 flex-1'>
                    <button onClick={()=> paygroupmember()} className="px-3 py-2  bg-gray-400 rounded">
                            payGroupMember
                    </button>
                </div></>}
                <div className='my-3 flex-1'>
                    <button onClick={()=> navigate(`/group/deposit/${params.id}`)} className="px-3 py-2 bg-pink-200 rounded w-full">
                            Deposit
                    </button>
                </div>
                <div className='my-3 flex-1'>
                    <button onClick={()=> widthdraw()} className="px-3 py-2  bg-green-200 rounded w-full ">
                            Withdraw
                    </button>
                </div>
            </div>
        </div>

        {/* Members of the Group */}
        <div>
        
        <div class="my-6 text-3xl font-semibold">Group Members</div>
        
        <ul>
            {userData.map((item, index) => <li className='my-5'>
                <UserMember
                key={index}
                userAddress ={item.userAddress}
                nextPaymentDate={item.nextPaymentDate}
                nextPaymentAmount={item.nextPaymentAmount}
                lastPaymentAmount={item.lastPaymentAmount}
                completedDonationRounds={item.completedDonationRounds}
                />
            </li>)}
        </ul>

        </div>


    </>
  )
}

export default UserGroupBody