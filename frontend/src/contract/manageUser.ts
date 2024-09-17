import { ethers } from "ethers";
import { getContract } from ".";

interface addRoleProps {
  account: string;
  role: string;
}

export const addRole = async ({ account, role }: addRoleProps) => {
  const contract = await getContract();
  const hashedRole = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(role));
  const user = await contract.addRole(account, hashedRole);
  await user.wait();
};

// get all users
export const getUsers = async () => {
  const contract = await getContract();

  return contract
};
