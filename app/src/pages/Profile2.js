import React,{useState , useEffect} from 'react'
import Body from '../components/General/Body.js'
import Sidebar  from '../components/General/Sidebar.js'
import ProfileBody from '../components/Profile2/ProfileBody.js'
import star_struck from '../assets/star_struck.png'
import disappointed from '../assets/disappointed.png'
import Loading from '../components/General/Loading'
import Message from '../components/General/Message'
import { ethers } from "ethers";

import { useWallet, WalletConnectModal } from '../context/walletContext'
import { createUserProfile , getUserProfile} from '../services/index.js'


function statebody (mystate, connectWallet, getData,account,user , error){
  switch (mystate) {
    case 0:
        return <WalletConnectModal connectWallet={ 
          async () => {
            const p = await connectWallet() ; 
            console.log(p)
            await getData(p._ethLib, p._netID)
          }
        }/> ;
    case 1:
        return  <Loading show={true} Message={'We are getting things started'}/>;
    case 2:
        return <ProfileBody account={account} user={user}/> ;
    case 3:
        return <Message Message={error} imagesrc={disappointed} color='red' other={<>Sorry Something went wrong please try again</> } onClick={()=> getData()}/>;
    case 4:
      return <Message Message={'Your Group was successfully added'} imagesrc={star_struck} color='green' other={<>Group Was Success Created</>} onClick={()=> getData()}/>;
    default:
        return <WalletConnectModal connectWallet={ () => connectWallet()}/> ;
  }
}



function Profile2() {
  const { connectWallet, account , isActive , provider , chainId  ,ethLib } = useWallet()
  const [currenState, setCurrentState] = useState(0);
  const [user, setUser] = useState(null)
  const [groups , setGroups] = useState([])
  const [error, setError] = useState("Oops ! Something went wrong")
  const[firstAccountChange , setFirstAccountChange] = useState(false);
  // const [getCurrentData, setGetCurrenData] = useState(false)


  const getData = async (_provider, _chainId) => {
    setCurrentState(1)
    setUser(null)

    const _pro = ethLib || _provider
    const _cha = _chainId || chainId
    let _user = null
    try{
      console.log('here-333')
      _user = await getUserProfile(_pro , _cha)
      let _amount = ethers.utils.formatEther(_user[1])
      setUser({
        address: _user[0],
        amount : _amount
      })
      // setUser(_user)
    }catch(err){
      // if(err.hasOwnProperty('data')){
      //   if(err.data.message === 'VM Exception while processing transaction: Create an EsusuUser account to view profile' ){
      //     setError(err.data.message)
      //     setCurrentState(3)
      //     throw err
      //   }
      // }else{
      //   setError('Oops ! Something went wrong')
      //   setCurrentState(3)
      //   throw err
      // }
      //Create an EsusuUser account to view profile

      console.log(err.message)
     
    }

    if(_user !== null ){ 
      setCurrentState(2);
      return;
    }

    try {
      console.log('here')
      await createUserProfile(_pro , _cha)
      console.log(user)
    }catch(err){
        // if(err.data.message !== 'VM Exception while processing transaction: revert You are already a user'){
        // console.log(err.data.message);
        // setError(err.data.message)
        
        setCurrentState(3)
        throw err 
    }

    setCurrentState(4)
  }


  useEffect(()=>{
    if(isActive) {
      if(firstAccountChange) getData()

      setFirstAccountChange(true)
    }
  },[account])


  


  return (
    <div>
        <Sidebar/>
        <Body>
            { statebody(currenState ,connectWallet, getData,account,user , error ) }
           
        </Body>
    </div>
  )
}

export default Profile2