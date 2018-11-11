require('dotenv').config();
require('babel-register')({
  ignore: /node_modules\/(?!openzeppelin-solidity\/test\/helpers)/
});
require('babel-polyfill');

const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      // gas: 0xfffffffffff,
      // gasPrice: 0x01,
    },
    coverage: {
      host: 'localhost',
      port: 8555,
      network_id: '*',
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(process.env.MNENOMIC, `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`);
      },
      network_id: '4',
      gas: 7000000,
      gasPrice: 4100000000, // 4.1 gwei
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(process.env.MNENOMIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`);
      },
      network_id: '3',
      gas: 3900000,
      gasPrice: 3880000000, // 4.1 gwei
    },
  },
  // solc: {
  //   optimizer: {
  //     enabled: true,
  //     runs: 200,
  //   },
  // },
};
