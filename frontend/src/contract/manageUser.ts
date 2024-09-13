import { ethers } from "ethers";
import { getContract } from ".";

export const addRole = async () => {
  const contract = await getContract();

  // Parameters
  const account = "";
  const PRODUCER_ROLE = ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes("PRODUCER_ROLE")
  );

  const user = await contract.addRole(account, PRODUCER_ROLE);
  await user.wait();
};
