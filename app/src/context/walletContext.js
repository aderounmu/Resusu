import React, {useCallback , useContext , useEffect , useMemo , useState} from 'react'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
//import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

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

const modalWeb3 = new Web3Modal({
    cacheProvider: true,
    providerOptions: /*{walletlink: */{
            package: CoinbaseWalletSDK, // Required
            options: {
                appName: "Chainlink hackathon", // Required
                infuraId: "3b6d4c576e9a42acb45fa1ec8991e89f" // Required unless you provide a JSON RPC url; see `rpc` below
            }
        }
    // }
})

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




    const connectWallet = async () => {
        try{
            const _provider = await modalWeb3.connect();
            const _ethLib = new ethers.providers.Web3Provider(_provider);
            const _account  = await _ethLib.listAccounts();
            const _network = await _ethLib.getNetwork();

            setProvider(_provider);
            setEthLib(_ethLib);
           if(_account) setAccount(_account[0]);
            setChainId(_network.chainId)

            console.log(account)
            console.log(_account)
        }catch(err){
            setError(err)
        }
    }


    const refreshState = () => {
        setAccount();
        setChainId();
        setNetwork("");
    };

    const disconnect = async () => {
        await modalWeb3.clearCachedProvider();
        refreshState();
    };

    useEffect(() => {
        if (modalWeb3.cachedProvider) {
        //   connectWallet();
        }
      }, []);
    
    
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
          provider.on("disconnect", handleDisconnect);
    
          return () => {
            if (provider.removeListener) {
              provider.removeListener("accountsChanged", handleAccountsChanged);
              provider.removeListener("chainChanged", handleChainChanged);
              provider.removeListener("disconnect", handleDisconnect);
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