import { getContract } from ".";
import { handleStatus, handleStatusKeys } from "../utils/libs";

interface CreateItemProps {
  name: string;
  origin: string;
}

// Create item
export const createItem = async ({ name, origin }: CreateItemProps) => {
  const contract = await getContract();

  try {
    const item = await contract.createItem(name, origin);
    await item.wait();
  } catch (error) {
    console.log("error", error);
  }
};

// get all items

export const getItems = async () => {
  const contract = await getContract();
  const itemCounter = await contract.itemCounter();

  const items = [];

  for (let i = 1; i <= itemCounter; i++) {
    const item = await contract.items(i);

    const formattedItem = {
      id: item.id.toString(),
      name: item.name,
      owner: item.currentOwner,
      origin: item.origin,
      remarks: item.remarks,
      status: handleStatus(item.status),
      location: item.location,
      timestamp: new Date(item.timestamp * 1000).toLocaleString(),
    };
    items.push(formattedItem);
  }

  return items;
};

//  get audit trail for an item
export const getAuditTrail = async (id: number) => {
  const contract = await getContract();

  try {
    const audits = await contract.getAuditTrail(id);

    const formattedAudits = [];

    for (let i = 0; i <= audits.length - 1; i++) {
      const audit = audits[i];
      const formattedAudit = {
        user: audit.caller,
        remarks: audit.remarks,
        timestamp: new Date(audit.timestamp * 1000).toLocaleString(),
      };
      formattedAudits.push(formattedAudit);
    }
    return formattedAudits;
  } catch (error) {
    console.log("error", error);
  }
};

interface changeStatusType {
  itemId: number;
  status: string;
  remarks: string;
}

// change item status
export const changeStatus = async ({
  itemId,
  status,
  remarks,
}: changeStatusType) => {
  const contract = await getContract();

  try {
    console.log("contract", contract);
    const formattedStatus = handleStatusKeys(status);
    const tx = await contract.updateStatus(itemId, formattedStatus, remarks);
    await tx.wait();
  } catch (error) {
    console.log("error", error);
  }
};

interface producerChangeType {
  itemId: number;
  account: string;
  address: string;
}

export const producerChange = async ({
  itemId,
  account,
  address,
}: producerChangeType) => {
  const contract = await getContract();
  try {
    // const tx = await contract.transferOwnership(itemId, account, address);
    const tx = await contract["transferOwnership(uint256,address,string)"](
      itemId,
      account,
      address
    );
    await tx.wait();
  } catch (error) {
    console.log("error", error);
  }
};
