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
import { joinGroup, lateDonation , userDonation} from '../services'


const AddUserForm = ({handleSubmit, round , handleround , donate , latedonate}) => {

  return (<div className='h-screen flex flex-col justify-center items-center' onSubmit={handleSubmit}>
  <div className='flex flex-col items-center'>
      <div className='my-12 font-extrabold text-4xl text-center w-2/3'> Input the round you want to deposit for 📝 </div>
      <div className='lg:flex lg:flex-row'>
          <div className='w-full m-3'><input value={round} onChange={handleround}  className='w-full p-3 border-blue-400 border-2 rounded-md' type='text' placeholder='Group ID'/></div>
      </div>
      <div className='mx-auto my-8 flex justify-center' ><button className='mx-auto text-white bg-emerald-400 hover:bg-emerald-600 py-2 px-5 rounded-md' onClick={() => donate()}>Deposit</button></div>
      <div className='mx-auto my-8 flex justify-center' ><button className='mx-auto text-white bg-emerald-400 hover:bg-emerald-600 py-2 px-5 rounded-md' onClick={() => latedonate()}>Late Deposit</button></div>
  </div>
</div>)





}

function Statebody (mystate,navigate,params,account , handleSubmit, round ,handleround , setCurrentState, donate , latedonate){
  switch (mystate) {
      case 0:
          return  <Loading show={true} Message={'We are adding you to the group'}/> ;
      case 1:
          return <Message Message={'You were successfully added'} imagesrc={star_struck} color='green' other={<>
            <div>User: {account} </div>
            <div>Group: {params.id}</div>
            <div>round: {round}</div>
        </>} onClick={()=> navigate('/profile')}/>;
      case 2:
          return <Message Message={'Oops ! Something went wrong'} imagesrc={disappointed} color='red' other={<>Sorry Something went wrong please try again</> } onClick={()=> setCurrentState(3)}/>;
      case 3:
          return <AddUserForm handleSubmit ={handleSubmit} round={round } handleround={handleround} donate={donate} latedonate={latedonate}/>
      default:
          return <Loading show={true} Message={'We are adding you to the group'}/> ;
  }
}


const DepositPage = () => {

  const params = useParams()
  const [round ,setround]  = useState("")
  const [isLoading , setIsLoading] = useState(false)
  // 0 loading 2 success 3 error
  const [currenState , setCurrentState] = useState(3)
  const navigate = useNavigate()

  const { connectWallet, account , isActive , provider , chainId  ,ethLib } = useWallet()

  const handleround = (event) => setround(event.target.value) ;
  

  const handleSubmit  = async (event) => {
    event.preventDefault();
    setCurrentState(0)
    try{

        console.log('jointried')
        // await joinGroup(ethLib, chainId,round)
        
    }catch(err){
        setCurrentState(2)
        throw err

    }

    setCurrentState(1)
    }

    const donate = async () => {
        
        setCurrentState(0)
        try{
    
            console.log('jointried')
            await userDonation(ethLib, chainId,params.id,round)
            
        }catch(err){
            setCurrentState(2)
            throw err
    
        }
    
        setCurrentState(1)
    }

    const latedonate  = async () => {

        setCurrentState(0)
        try{  
            await lateDonation(ethLib, chainId,params.id,round)
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
                <div>Group: {params.round}</div>
            </>}/>} */}
            {
              Statebody(currenState ,navigate,params,account , handleSubmit, round ,handleround , setCurrentState , donate , latedonate)
            }
        </Body>
    </>
  )
}

export default DepositPage