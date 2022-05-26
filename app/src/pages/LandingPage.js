import React,{ useEffect} from 'react'
import HeroBody from '../components/LandingPage2/HeroBody';
import Footer from '../components/LandingPage2/Footer';
import HeroNavBar from '../components/LandingPage2/HeroNavBar';
import OurPlan from '../components/LandingPage2/OurPlan';
import { useWallet } from '../context/walletContext';

const LandingPage = () => {
    const { connectWallet , WalletConnectModal  } = useWallet()
    // useEffect(()=>{
    //     connectWallet()
    // },[])
    
    return (
        <div>
            <HeroNavBar />
            {/* <WalletConnectModal connectWallet={connectWallet} /> */}
            <HeroBody/>
            < div className='bg-white pt-16 pb-32'> 
            <OurPlan />
            </div>
           
            <Footer/>
        </div>
    );
}

export default LandingPage