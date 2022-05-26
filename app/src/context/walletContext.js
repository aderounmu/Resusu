import React, {useCallback , useContext , useEffect , useMemo , useState} from 'react'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Metamasklogo from '../assets/metamask.svg'
//import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { FaTimes } from "react-icons/fa";

// const providerOptions = {
//     walletconnect: {
//       package: WalletConnectProvider, // required
//       options: {
//         infuraId: "3b6d4c576e9a42acb45fa1ec8991e89f" // required
//       }
//     },
//  walletlink: {
//     package: CoinbaseWalletSDK, // Required
//     options: {
//       appName: "Chainlink hackathon", // Required
//       infuraId: "3b6d4c576e9a42acb45fa1ec8991e89f" // Required unless you provide a JSON RPC url; see `rpc` below
//     }
//   },
// };

// const modalWeb3 = new Web3Modal({
//     cacheProvider: true,
//     disableInjectedProvider: true,
//     providerOptions // Required
// })


//add functionality to update wallet when change occurs using metamask

export const WalletConnectModal = ({connectWallet}) => {
    
    const [show , setShow] = useState(true)

    if(!show){
      return <></>
    }else{
    return(
      <div className='absolute w-full h-full top-0 left-0 bg-slate-300/80 flex justify-center items-center z-20'>
        <div className="flex flex-col justify-center items-center py-8 px-8  rounded-md bg-white ">
            <div className="flex justify-end w-full mb-5 pb-3 border-gray-300 border-b-[0.5px]">
              <button onClick={()=> setShow(false)}><FaTimes/></button>
            </div>
            <button className='px-16' onClick={()=> connectWallet()}>
              <img src={Metamasklogo} className="w-40 h-40 mx-auto" alt="metamask-logo" />
              <div className='text-xl py-4 font-bold text-center'>MetaMask</div>
              <div className=' text-center'>Connect your metamask wallet</div>
            </button>
        </div>
      </div>
    )
  }
}

async function connectToMetamask () {
    //check if metamask is available
    if(!window.ethereum) throw Error('Meta mask is not available')

    //if available call metamask to connect
    try{
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    }catch(error){
      throw error
    }
    

    return window.ethereum;


}


export const WalletContext = React.createContext(null);

export const WalletProvider = ({children}) => {

    const [isLoading , setIsLoading] = useState(true);
    const [isActive , setIsActive] = useState(false);
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [ethLib,setEthLib] = useState(null);
    const [error, setError] = useState(null);
    const [chainId, setChainId] = useState(null);
    const [network, setNetwork] = useState(null);


    /*changge create custom pop up */

    const connectWallet = async () => {
        setError(null)
        try{
            const _provider = await connectToMetamask() //modalWeb3.connect();
            const _ethLib = new ethers.providers.Web3Provider(_provider);
            const _account  = await _ethLib.listAccounts();
            const _network = await _ethLib.getNetwork();

            setProvider(_provider);
            setEthLib(_ethLib);
           if(_account) setAccount(_account[0]);
            setChainId(_network.chainId)

            console.log(account)
        }catch(err){
          setError(err)
          throw err
            
        }
    }


    const refreshState = () => {
        setAccount();
        setChainId();
        setNetwork("");
    };

    const disconnect = async () => {
        // await modalWeb3.clearCachedProvider();
        refreshState();
    };

    // useEffect(() => {
    //     if (modalWeb3.cachedProvider) {
    //       connectWallet();
    //     }
    // }, []);
    
    
    useEffect(() => {
        if (provider?.on) {
          const handleAccountsChanged = (accounts) => {
            console.log("accountsChanged", accounts);
            if (accounts) setAccount(accounts[0]);
          };
    
          const handleChainChanged = (_hexChainId) => {
            setChainId(_hexChainId);
          };
    
          const handleDisconnect = () => {
            console.log("disconnect", error);
            disconnect();
          };
    
          provider.on("accountsChanged", handleAccountsChanged);
          provider.on("chainChanged", handleChainChanged);
          // provider.on("disconnect", handleDisconnect);
    
          return () => {
            if (provider.removeListener) {
              provider.removeListener("accountsChanged", handleAccountsChanged);
              provider.removeListener("chainChanged", handleChainChanged);
              // provider.removeListener("disconnect", handleDisconnect);
            }
          };
        }
      }, [provider]);

      const values = {
        isLoading, 
        isActive,
        account,
        provider,
        ethLib,
        error,
        chainId,
        network,
        connectWallet,
        disconnect,
        WalletConnectModal
    }
    

    //once we mount check if the wallet is connected 
    return <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
}


export function useWallet(){
    const context = React.useContext(WalletContext);

    if(!context) throw Error('useWallet Must be inside Wallet Provider') ;

    return context;
}