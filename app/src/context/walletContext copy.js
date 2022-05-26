import React, {useCallback , useContext , useEffect , useMemo , useState} from 'react'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
//import WalletConnectProvider from "@walletconnect/web3-provider";


function connectWallet(setProvider, setAccount){
    if(!window.ethereum){
        console.log('Metamask Wallet is required')
        return;
    }
}


function checkConnectWallet(setProvider, setAccount){
    if(window.ethereum){
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if (accounts.length > 0) {
            const account = accounts[0];
            setAccount(account);
            return;
        }

        // if (isMobileDevice()) {
        //     await connectWallet(setAccount);
        // }
    }
}

export const WalletContext = React.createContext(null);

export const WalletProvider = ({children}) => {

    const [isLoading , setIsLoading] = useState(true);
    const [isActive , setIsActive] = useState(false);
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null)




    //once we mount check if the wallet is connected 
    useEffect(() => {
        checkConnectWallet( setAccount , provider)
        .then(val => {
            setIsLoading(false)
        })
    },[])
    
    //

    return <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
}


export function useWallet(){
    const context = React.useContext(WalletContext);

    if(!context) throw Error('useWallet Must be inside Wallet Provider') ;

    return context;
}