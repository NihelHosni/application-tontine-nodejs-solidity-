const Migrations = artifacts.require("Migrations");
const tontine = artifacts.require("tontine");
const IMFToken = artifacts.require("IMFToken");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(tontine);
  deployer.deploy(IMFToken);
};
