const Creature = artifacts.require("./Creature.sol");

module.exports = function(deployer, network) {
  let proxyRegistryAddress = ""; // OpenSea
  if (network === 'rinkeby') {
    proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";
  } else { // mainnet
    proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
  }

  deployer.deploy(Creature, proxyRegistryAddress, {gas: 5000000});
};
