import React,{ useEffect , useState } from 'react'
import Body from '../components/General/Body'
import Loading from '../components/General/Loading'
import SideBar from '../components/General/Sidebar'
import { useParams } from 'react-router-dom'
import Message from '../components/General/Message'
import star_struck from '../assets/star_struck.png'
import disappointed from '../assets/disappointed.png'
import { useNavigate } from 'react-router-dom'


const AddUserPage = () => {

  const params = useParams()
  const [isLoading , setIsLoading] = useState(false)
  // 0 loading 2 success 3 error
  const [currenState , setCurrentState] = useState(2)
  const navigate = useNavigate()
  
  //state is always true 
  //when user is added 
  //if success set and change message and color

  function Statebody (mystate){
    switch (mystate) {
        case 0:
            return  <Loading show={true} Message={'We are adding you to the group'}/> ;
        case 1:
            return <Message Message={'You were successfully added'} imagesrc={star_struck} color='green' other={<>
              <div>User: {params.address} </div>
              <div>Group: {params.groupId}</div>
          </>} onClick={()=> navigate('/profile')}/>;
        case 2:
            return <Message Message={'Oops ! Something went wrong'} imagesrc={disappointed} color='red' other={<>Sorry Something went wrong please try again</> } onClick={()=> navigate('/profile')}/>;
        default:
            return <Loading show={true} Message={'We are adding you to the group'}/> ;
    }
  }
  return (
    <>
        <SideBar/>
        <Body>
            {/* { isLoading ? <Loading show={true} Message={'We are adding you to the group'}/> : <Message Message={'You were successfully added'} imagesrc={star_struck} color='green' other={<>
                <div>User: {params.address} </div>
                <div>Group: {params.groupId}</div>
            </>}/>} */}
            {
              Statebody(currenState)
            }
        </Body>
    </>
  )
}

export default AddUserPage