import React,{ useEffect} from 'react'
import HeroNavBar from '../components/HeroNavBar';
import { useWallet } from '../context/walletContext';

const LandingPage = () => {
    const { connectWallet , disconnect } = useWallet()
    useEffect(()=>{
        connectWallet()
    },[])
    
    return (
        <div>
            <HeroNavBar />
        </div>
    );
}

export default LandingPage