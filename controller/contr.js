
const compiledContract = require('../ethereum/compile');
const compiledContractI = require('../ethereum/compileimf');
const cpm = JSON.parse(compiledContract)
const cpm1 = JSON.parse(compiledContractI)
const abiIMFT = cpm1.contracts.tontine.IMFToken.abi;
const abi = cpm.contracts.tontine.Tontine.abi;

const cpmI = JSON.parse(compiledContractI)


var Web3 = require('web3')

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

var dep = new web3.eth.Contract(abi, "0x99aCc3224127d11d67558164bE6Ed1D9cfaD221b")

var IMFT = new web3.eth.Contract(abiIMFT, "0x5300cbf440484Cca34aEEB64F90E57377E410029")


//0x0dbCfd50524B0e834Bea5cD74Db735bF8D920B94 tont
//0xcc7F8e96F891d1fa18F38513Cd0B42a61d00e196

//function create Tontine
exports.Creation = (req, res) => {
    const users = [{address : '0x63B392592B8E7648a365aFFFC8A8b1FAbaa1cD03' , ordre : 1} ,
    {address : '0xbbBcEbFa6Ffd595DB4bb07719d5bCCE0170a479a' , ordre : 2} , 
    {address : '0x0D8a29F1969499a255c22cBe2e1b71D78BFB92e7' , ordre : 3} ]
    dep.methods.Creation(req.body._ID_Tontine, req.body.NBR_P, req.body.Montant, req.body.NBR_cercle, req.body.frequence)
            .send({ from: req.body.tontine, gas: 3000000 }, function (error, result) {
           console.log({error,result}) 
           for(let i = 0 ; i < users.length ; i++){
            dep.methods.addParticipant(req.body._ID_Tontine,  users[i].ordre)
        .send({ from: users[i].address, gas: 3000000 }, function (error, result1) {
        })
        .then(result => { console.log(result) })
        .catch(e => console.log(e));
        }
     //   res.send(result)
        })
         
            .catch(e => res.status(205).send(e));

};


//function getTontine
exports.getTontine = (req, res) => {
    dep.methods.getTontine(req.body._ID_Tontine).call(function (error, result) {
            res.send(result)
    })
};


//function createUser
exports.CreateUser = (req, res) => {
    const users = [{address : '0x63B392592B8E7648a365aFFFC8A8b1FAbaa1cD03' , ordre : 1} ,
    {address : '0xbbBcEbFa6Ffd595DB4bb07719d5bCCE0170a479a' , ordre : 2} , 
    {address : '0x0D8a29F1969499a255c22cBe2e1b71D78BFB92e7' , ordre : 3} ]
    dep.methods.Creation(req.body._ID_Tontine, req.body.NBR_P, req.body.Montant, req.body.NBR_cercle, req.body.frequence)
            .send({ from: req.body.tontine, gas: 3000000 }, function (error, result1) {
            })
            .then(result => {   
                for(let i = 0 ; i < users.length ; i++){
                    dep.methods.addParticipant(req.body.id,  users[i].ordre)
                .send({ from: users[i].address, gas: 3000000 }, function (error, result) {
                })
                .then(result => { console.log(result) })
                .catch(e => res.status(207).send("error User not create"));
                }
                res.send(result1)
             })
            .catch(e => res.status(205).send("error Tontine not create"));

};


//function virement 
exports.Virement = (req, res) => {
    dep.methods.Virement(req.body.ID_Tontine, req.body.receiver)
        .send({ from: req.body.Virement, gas: 3000000 }, function (error, result) {
        })
        .then(result => { res.send(result) })
        .catch(e => res.status(205).send("erreur de virement"));

};
//function transfer
exports.Transfer = (req, res) => {
    IMFT.methods.transfer(req.body.address, req.body.montant)
        .send({ from: '0xEBfc46abD908E1CC60AFD6d2553B0E6e63271B3B', gas: 3000000 }, function (error, result) {
        })
        .then(result => { res.send(result) })
        .catch(e => res.status(205).send("erreur de transfer"));

};
//function balanceOF
exports.balanceOf = (req, res) => {
    IMFT.methods.balanceOf(req.body.address)
        .call( function (error, result) {
            res.send(result)
        })
        
        .catch(e => console.log(e));

};


//function convertttt
exports.convert = (req, res) => {
    dep.methods.convertttt(req.body._ID_Tontine).call(function (error, result) {
            res.send(result)
    })
};





//function addNewToken
exports.addNewToken = (req, res) => {
    dep.methods.addNewToken(req.body.symbol, req.body.address)
            .send({ from: intermediate, gas: 3000000 }, function (error, result) {

            })

            .then(result => { res.send(result) })
            .catch(e => res.status(208).json("error address token invalid"));

};





//function retrait
exports.retrait = (req, res) => {
    dep.methods.retrait(req.body.ID_Tontine)
    .send({ from: req.body.ValidTontine, gas: 3000000 }, function (error, result) {
    })
    .then(result => { res.send(result) })
    .catch(e => res.status(205).send("error retrait invalid"));

};



//function ValidTontine
exports.ValidTontine = (req, res) => {
    dep.methods.ValidTontine(req.body.ID_Tontine)
            .send({ from: req.body.ValidTontine, gas: 3000000 }, function (error, result) {
            })
            .then(result => { res.send(result) })
            .catch(e => res.status(205).send("error Tontine invalid"));

};




//function addParticipant
exports.addParticipant = (req, res) => {
    dep.methods.newAdherent(req.body._ID_Tontine, req.body.ordre)
            .send({ from: req.body.addParticipant, gas: 3000000 }, function (error, result) {
            })
            .then(result => { res.send(result) })
            .catch(e => res.status(205).send("error Participant not add"));

};


//function addgaranti
exports.addgaranti = (req, res) => {
    dep.methods.addgaranti(req.body._ID_Tontine, req.body.idG, req.body.participant)
            .send({ from: req.body.addgaranti, gas: 3000000 }, function (error, result) {
            })
            .then(result => { res.send(result) })
            .catch(e => res.status(205).send("error garanti not add"));

};
//function getgaranti
exports.getgaranti = (req, res) => {
    dep.methods.getgaranti(req.body._ID_Tontine,req.body.idG).call(function (error, result) {
            res.send(result)
    })
};
//function addcotisation
exports.addcotisation = (req, res) => {
    dep.methods.addcotisation(req.body._ID_Tontine,req.body.participant, req.body.IDCotisation )
            .send({ from: req.body.addcotisation, gas: 3000000 }, function (error, result) {
            })
            .then(result => { res.send(result) })
            .catch(e => res.status(205).send("error cotisation not add"));

};
//function getCotisation
exports.getCotisation = (req, res) => {
    dep.methods.getCotisation(req.body._ID_Tontine).call(function (error, result) {
            res.send(result)
    })
};
////function confirmation 
exports.confirmation = (req, res) => {
    dep.methods.confirmation(req.body._ID_Tontine, req.body.idG )
            .send({ from: req.body.confirmation, gas: 3000000 }, function (error, result) {
            })
            .then(result => { res.send(result) })
          .catch(e => res.status(205).send("error confirmation"));

};