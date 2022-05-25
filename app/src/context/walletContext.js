import React, {useCallback , useContext , useEffect , useMemo , useState} from 'react'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

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
//       appName: "Web 3 Modal Demo", // Required
//       infuraId: "3b6d4c576e9a42acb45fa1ec8991e89f" // Required unless you provide a JSON RPC url; see `rpc` below
//     }
//   },
// };

// async function connectWallet(provider ,account , setProvider , setAccount){
//     if(!provider){
//         const web3Modal = new Web3Modal({
//             cacheProvider: true,
//             providerOptions
//         })

//         //connect the wallet
//         const instance = await web3Modal.connect();
//         const newprovider = new ethers.providers.Web3Provider(instance);
        
//         setProvider(newprovider);

//         if(!account){
//             const Accounts = newprovider.listAccounts();
//             setAccount(Accounts[0]);
//         }
//     }
// }

//add functionality to update wallet when change occurs using metamask


export const WalletContext = React.createContext(null);

export const WalletProvider = ({children}) => {

    const [isLoading , setIsLoading] = useState(true);
    const [isActive , setIsActive] = useState(false);
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [ethLib,setEthLib] = useState(null);
    const [error, setError] = useState('');
    const [chainId, setChainId] = useState(null);
    const [network, setNetwork] = useState(null);




    // const showModal =  async ()  => {
    //     await showForm(provider ,account , setProvider , setAccount)
    // }

    const values = {
        isLoading, 
        isActive,
        account,
        provider,
        //showModal,
    }

    //once we mount check if the wallet is connected 
    return <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
}


export function useWallet(){
    const context = React.useContext(WalletContext);

    if(!context) throw Error('useWallet Must be inside Wallet Provider') ;

    return context;
}