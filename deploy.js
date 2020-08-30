var Web3 = require('web3')
const compiledContract = require('../backend_nodejs/ethereum/compile');
const com  = JSON.parse(compiledContract)
//const byte = com.contracts.tontine.IMFToken.evm.bytecode.object;
console.log(com.contracts.tontine.IMFToken)
//const abi = com.contracts.tontine.IMFToken.abi;
/*

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const deployedContract = new  web3.eth.Contract(abi)
		.deploy({
			data:  byte
		}).send({
			from: '0xEBfc46abD908E1CC60AFD6d2553B0E6e63271B3B',
			gas: 6721975,
		}).then(function(newContractInstance){
			console.log(newContractInstance.options.address) // instance with the new contract address
		});
*/
