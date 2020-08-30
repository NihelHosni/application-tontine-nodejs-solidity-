var express = require('express');
var router = express.Router();
const compiledContract = require('../ethereum/compile');
const compiledContractI = require('../ethereum/compileimf');
const controller = require('../controller/contr');

const cpm = JSON.parse(compiledContract)
//const abi = cpm.contracts.tontine.Tontine.abi;
const cpmI = JSON.parse(compiledContractI)

var Web3 = require('web3')

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

//var dep = new web3.eth.Contract(abi, "0xd9D3643CF7E9dE8785Fd144d8961bf13d80B51a1")
console.log('go')
/* GET home page. */
//router.post('/', ControllerMethods.postaddNewToken);
router.post('/create', controller.Creation)
router.get('/getTontine',controller.getTontine)
router.post('/createuser',controller.CreateUser)
router.post('/virement ',controller.Virement )
router.post('/retrait',controller.retrait)
router.get('/ValidTontine',controller.ValidTontine)
router.post('/addParticipant',controller.addParticipant)
router.get('/convert',controller.convert)
router.get('/balanceOf',controller.balanceOf)
router.get('/Transfer',controller.Transfer)
router.get('/getgaranti',controller.getgaranti)
router.get('/getCotisation',controller.getCotisation)
router.post('/addgaranti',controller.addgaranti)
router.post('/addcotisation',controller.addcotisation)
router.post('/confirmation',controller.confirmation)

module.exports = router;
