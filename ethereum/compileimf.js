
const path = require("path");
const fs = require("fs");
const solc = require("solc");

const pathProof = path.resolve(__dirname, "contract", "IMFT.sol");
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
module.exports = solc.compile(JSON.stringify(input));






