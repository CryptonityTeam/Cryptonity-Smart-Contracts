# Cryptonity Smart Contracts

## Installation
1. Run `npm install`
2. If installed_contracts/oraclize-api doesn't exist, run `truffle install oraclize-api`
3. Install ethereum-bridge in project folder https://github.com/oraclize/ethereum-bridge
  - сreate directory ethereum-bridge and go to it;
  - run `git clone https://github.com/oraclize/ethereum-bridge.git`;
  - `cd ethereum-bridge`;
  - run `npm install`;

## Start development
1. Run `ganache-cli -e 100000000000000 -l 0x8000000` in one terminal
2. Run `node ethereum-bridge/ethereum-bridge/bridge -a 9 -H 127.0.0.1 -p 8545 --dev` in second terminal

## Flatten contracts
1. Install https://github.com/BlockCatIO/solidity-flattener
or https://github.com/nomiclabs/truffle-flattener
2. Run `solidity_flattener --solc-paths="openzeppelin-solidity/=$(pwd)/node_modules/openzeppelin-solidity/" --output flatContracts/FlatCryptonityCrowdsale.sol contracts/crowdsale/CryptonityCrowdsale.sol`
or `truffle-flattener contracts/crowdsale/CryptonityCrowdsale.sol > flatContracts/FlatCryptonityCrowdsale.sol`