import React,{ useEffect} from 'react'
import HeroBody from '../components/HeroBody';
import HeroNavBar from '../components/HeroNavBar';
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
        </div>
    );
}

export default LandingPage