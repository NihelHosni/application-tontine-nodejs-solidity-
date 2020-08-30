const path = require("path");
const fs = require("fs");
const solc = require("solc");

const pathProof = path.resolve(__dirname, "contract", "IMFtoken.sol");
//console.log(pathProof);
const source = fs.readFileSync(pathProof, "UTF-8");

var input = {
  language: "Solidity",
  sources: {
    tontine: {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};
//console.log(solc.compile(JSON.stringify(input)));
//console.log(solc.compile(source,1));
module.exports = solc.compile(JSON.stringify(input));

//module.exports = solc.compile(source, 1).contracts[":documentproof"];

/*
var solc = require('solc');

var input = {
  language: 'Solidity',
  sources: {
    'test.sol': {
      content: 'contract C { function f() public { } }'
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

 console.log(solc.compile(JSON.stringify(input)));
*/