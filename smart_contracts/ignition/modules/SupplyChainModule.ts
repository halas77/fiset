const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const SupplyChainModule = buildModule("SupplyChainModule", (m) => {
  const SupplyChain = m.contract("SupplyChain");

  return { SupplyChain };
});

module.exports = SupplyChainModule;

// contract address
// 0x7aaEEDb9596Aab96933645AAbE4A6C67d0Cfb665
