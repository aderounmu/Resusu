import React,{useEffect , useState} from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import { Link } from "react-router-dom";


const words = [
    <span className='font-extrabold text-green-300'>Savings</span>, 
    <span className='font-extrabold text-blue-300'>Donatings</span>, 
    <span className='font-extrabold text-purple-300'>Contributing</span>,
]



const images = [
    <img src={image2} className="mx-auto" alt="metamask-logo" />,
    <img src={image1} className="mx-auto" alt="metamask-logo" />,
    <img src={image3} className="mx-auto" alt="metamask-logo" />
]



const HeroBody = () => {

    const [count, setCount] = useState(0);
    const [firstMount, setFirstMount] = useState(true);

   
    
    useEffect(() => {
        console.log(count)
        let countDown = 14000
        if(firstMount) countDown = 20000
      const timer = setTimeout(()=>{
        if(count === 2){ setCount(0); return;}
        setCount(count + 1)
        console.log(count)
        setFirstMount(false)
      },countDown)
    
      return () => {
        clearTimeout(timer)
      }
    }, [count])
    

  return (
    <div className="h-screen w-full flex bg-white relative z-0  items-center">
        <div className='absolute w-full h-1/3 bg-blue-100 z-[-2] bottom-0 heroBottom'>
        </div>
        <div className='content bg-transparent flex flex-col lg:flex-row-reverse lg:justify-between lg:pt-24 lg:px-40 lg:items-center'>
            <div className='images lg:w-1/2'>
                <div className='image-container w-10/12 lg:w-3/4 mx-auto'>
                    {/* <img src={images[count]} className="mx-auto" alt="metamask-logo" /> */}
                    {images[count]}
                </div>
            </div>
            <div className='texts lg:w-1/2 w-3/4 mx-auto'>
                <div className='text-container text-center lg:text-left flex flex-col justify-center'>
                    <div className='Headline lg:text-6xl text-4xl'>
                        {words[count]} Just Got Way More Secure
                    </div>
                    <div className='subheadline my-5 lg:text-xl text-base'> Blockchain backed African Thrift banking</div>
                    <div className="buttons flex flex-row mt-10 lg:mt-14 mx-auto lg:mx-0">
                        <div className="mr-3 bg-black text-white py-2 px-6 rounded hover:bg-[#82B1FF] duration-500"> <Link to='/'> Get Started</Link></div>
                        <div className='ml-3 py-2 px-6 rounded bg-gray-200  duration-500'> <Link to='/'> Learn More</Link></div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBody