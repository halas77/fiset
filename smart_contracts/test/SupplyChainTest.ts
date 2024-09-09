const { expect } = require("chai");
const { ethers } = require("hardhat");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Fisset contract", async () => {
  const deployContractFixture = async () => {
    const [owner, producer, supplier, inspector] = await ethers.getSigners();
    const fissetContract = await ethers.deployContract("SupplyChain");

    await fissetContract
      .connect(owner)
      .addRole(
        producer.address,
        ethers.keccak256(ethers.toUtf8Bytes("PRODUCER_ROLE"))
      );

    await fissetContract
      .connect(owner)
      .addRole(
        supplier.address,
        ethers.keccak256(ethers.toUtf8Bytes("SUPPLIER_ROLE"))
      );

    return { fissetContract, owner, producer, supplier };
  };

  it("should create an item", async () => {
    const { fissetContract, producer } = await loadFixture(
      deployContractFixture
    );
    await fissetContract.connect(producer).createItem("Beans", "Ethiopia");
    const item = await fissetContract.items(1);
    expect(item.name).to.equal("Beans");
  });

  it("should change an item status", async () => {
    const { fissetContract, producer, supplier } = await loadFixture(
      deployContractFixture
    );
    await fissetContract.connect(producer).createItem("Coffee", "Ethiopia");

    await fissetContract
      .connect(producer)
      .transferOwnership(1, supplier.address, "Sudan");
    const item = await fissetContract.items(1);
    expect(item.location).to.equal("Sudan");
  });
});
