var Dog = artifacts.require("./Dog.sol");

module.exports = function(deployer) {
  deployer.deploy(Dog);
};
