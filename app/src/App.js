// import logo from './logo.svg';
import React from 'react';
import Main from './navigation/Main';
import './App.css';
import {WalletProvider} from './context/walletContext'

function App() {
  return (
    <WalletProvider>
      <div className='h-full'>
        <Main />
      </div>
    </WalletProvider>
  );
}

export default App;