const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  // networks: {
  //   develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
  //     host: "127.0.0.1",
  //     port: 8545,
  //     network_id: "*"
  //   }
  // }
  networks: {
    develop_gui: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    develop_cli: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    matic: {
      // provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc-mumbai.maticvigil.com/v1/ID`),
      // provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc-mumbai.matic.today`),
      //provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc-mumbai.maticvigil.com`),
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://polygon-mumbai.infura.io/v3/3b6d4c576e9a42acb45fa1ec8991e89f`),
      network_id: 80001,
      confirmations: 2,
      skipDryRun: true,
      gas: 6000000,
      gasPrice: 10000000000,
      
    },
  },
  compilers: {
    solc: {
      version: "^0.7.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
