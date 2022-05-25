import React,{ useEffect} from 'react'
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
        </div>
    );
}

export default LandingPage