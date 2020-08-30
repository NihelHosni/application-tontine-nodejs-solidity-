
const compiledContract = require('./ethereum/compileimf');
const cpm = JSON.parse(compiledContract)
const abi = cpm.contracts.tontine.IMFToken.abi;


var Web3 = require('web3')

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

var dep = new web3.eth.Contract(abi, "0x77ec2668e6c814f873Cf52B3C7d1f1b7c6e91877")




    dep.methods.approve( '0x5d3152A3E53E15c3549508118116C432b4CA17c7',32)

            .send({ from: '0xEBfc46abD908E1CC60AFD6d2553B0E6e63271B3B', gas: 3000000 }, function (error, result) {
            })
            .then(result => { console.log('done') })
            .catch(e => console.log(e));


