import React,{useState , useEffect} from 'react'
import Body from '../components/General/Body'
import SideBar from '../components/General/Sidebar'
import Message from '../components/General/Message'
import star_struck from '../assets/star_struck.png'
import disappointed from '../assets/disappointed.png'
import Loading from '../components/General/Loading'

const AddGroup = () => {

    const [ name, setName] = useState('');
    const [buyin , setBuyIn] = useState('');
    // const [isLoading , setIsLoading] = useState(false)
    // const [isForm , setIsForm] = useState(false)
    // const [isError , setIsError] = useState(false)

    // 0 form 1 loading 2 success 3 error
    const [currenState , setCurrentState] = useState(2)


    const handlename = (event) => setName(event.target.value) ;
    const handlebuyin = (event) => setBuyIn(event.target.value) ;

    const handleSubmit  = (event) => {
        event.preventDefault();
    }

    const Myform = () => {
        return (<form className='h-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'>
            <div className='my-12 font-extrabold text-4xl text-center w-2/3'> Create A Group : Add your group name 📝  and Buy In Amount 💵</div>
            <div className='lg:flex lg:flex-row'>
                <div className='w-full m-3'><input value={name}  onChange={handlename} className='w-full p-3 border-blue-400 border-2 rounded-md' type='text' placeholder='Group Name'/></div>
                <div className='w-full m-3'><input value={buyin} onChange={handlebuyin} className='w-full p-3 border-blue-400 border-2 rounded-md' type='text' placeholder='By In Amount'/></div>
            </div>
            <div className='mx-auto my-8 flex justify-center' ><button className='mx-auto text-white bg-emerald-400 hover:bg-emerald-600 py-2 px-5 rounded-md'>Add Group</button></div>
        </div>
    </form>)
    }

    function Statebody (mystate){
        switch (mystate) {
            case 0:
                return <Myform/>;
            case 1:
                return  <Loading show={true} Message={'We are creating your group'}/>;
            case 2:
                return <Message Message={'You were successfully added'} imagesrc={star_struck} color='green' other={<>Group Was Success Created</>} onClick={()=> setCurrentState(0)}/>;
            case 3:
                return <Message Message={'Oops ! Something went wrong'} imagesrc={disappointed} color='red' other={<>Sorry Something went wrong please try again</> } onClick={()=> setCurrentState(0)}/>;
            default:
                return <Myform/>;
        }
    }

    
  return (
    <>
        <SideBar/>
        <Body>
            {
                Statebody(currenState)
            }
        </Body>
        
    </>
  )
}

export default AddGroup