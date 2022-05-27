import React,{ useEffect , useState } from 'react'
import Body from '../components/General/Body'
import Loading from '../components/General/Loading'
import SideBar from '../components/General/Sidebar'
import { useParams } from 'react-router-dom'
import Message from '../components/General/Message'
import star_struck from '../assets/star_struck.png'
import disappointed from '../assets/disappointed.png'
import { useNavigate } from 'react-router-dom'
import { useWallet, WalletConnectModal } from '../context/walletContext'
import { joinGroup} from '../services'

const AddUserForm = ({handleSubmit, groupId , handlegroupId}) => {

  return (<form className='h-screen flex flex-col justify-center items-center' onSubmit={handleSubmit}>
  <div className='flex flex-col items-center'>
      <div className='my-12 font-extrabold text-4xl text-center w-2/3'> Create A Group : Add your address 📝 </div>
      <div className='lg:flex lg:flex-row'>
          <div className='w-full m-3'><input value={groupId} onChange={handlegroupId}  className='w-full p-3 border-blue-400 border-2 rounded-md' type='text' placeholder='Group ID'/></div>
      </div>
      <div className='mx-auto my-8 flex justify-center' ><button className='mx-auto text-white bg-emerald-400 hover:bg-emerald-600 py-2 px-5 rounded-md'>Add User</button></div>
  </div>
</form>)





}

function Statebody (mystate,navigate,params,account , handleSubmit, groupId ,handlegroupId , setCurrentState){
  switch (mystate) {
      case 0:
          return  <Loading show={true} Message={'We are adding you to the group'}/> ;
      case 1:
          return <Message Message={'You were successfully added'} imagesrc={star_struck} color='green' other={<>
            <div>User: {account} </div>
            <div>Group: {params.groupId}</div>
        </>} onClick={()=> navigate('/profile')}/>;
      case 2:
          return <Message Message={'Oops ! Something went wrong'} imagesrc={disappointed} color='red' other={<>Sorry Something went wrong please try again</> } onClick={()=> setCurrentState(3)}/>;
      case 3:
          return <AddUserForm handleSubmit ={handleSubmit} groupId={groupId } handlegroupId={handlegroupId}/>
      default:
          return <Loading show={true} Message={'We are adding you to the group'}/> ;
  }
}


const AddUserPage = () => {

  const params = useParams()
  const [groupId ,setgroupId]  = useState("")
  const [isLoading , setIsLoading] = useState(false)
  // 0 loading 2 success 3 error
  const [currenState , setCurrentState] = useState(3)
  const navigate = useNavigate()

  const { connectWallet, account , isActive , provider , chainId  ,ethLib } = useWallet()

  const handlegroupId = (event) => setgroupId(event.target.value) ;
  

  const handleSubmit  = async (event) => {
    event.preventDefault();
    setCurrentState(0)
    try{

        console.log('jointried')
        await joinGroup(ethLib, chainId,groupId)
        
    }catch(err){
        setCurrentState(2)
        throw err

    }

    setCurrentState(1)

}
  //state is always true 
  //when user is added 
  //if success set and change message and color

  
  return (
    <>
        <SideBar/>
        <Body>
            {/* { isLoading ? <Loading show={true} Message={'We are adding you to the group'}/> : <Message Message={'You were successfully added'} imagesrc={star_struck} color='green' other={<>
                <div>User: {params.address} </div>
                <div>Group: {params.groupId}</div>
            </>}/>} */}
            {
              Statebody(currenState ,navigate,params,account , handleSubmit, groupId ,handlegroupId , setCurrentState)
            }
        </Body>
    </>
  )
}

export default AddUserPage