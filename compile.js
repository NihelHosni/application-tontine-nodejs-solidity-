// The path module provides utilities for working with file and directory paths.
const path = require("path");

// fs-extra adds file system methods that aren't included in the native fs module
// and adds promise support to the fs methods.
const fs = require("fs-extra");

// It is used to compile solidity files
const solc = require("solc");

// This code removes a file or directory inside the Build directory
// __dirname returns the current the directory path
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// It returns tontine.sol path
const contractPath = path.resolve(__dirname, "Contracts", "tontine.sol");

// Get the content of tontine.sol
const tontineSource = fs.readFileSync(contractPath, "utf8");

// This code compile the tontine contract code and return the contracts object
const output = solc.compile(tontineSource, 1).contracts;

// Ensures that the directory 'Build' exists. If the directory structure does not exist, it is created.
fs.ensureDirSync(buildPath);

// Create a JSON file with tontine contract. It will be used to create contract instance from Angular application.
fs.outputJsonSync(
  path.resolve(buildPath, "tontine.json"),
  output[":tontine"]
);

// Export tontine contract
module.exports = output[":tontine"];