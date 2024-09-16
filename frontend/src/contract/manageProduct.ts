import { getContract } from ".";
import { handleStatus } from "../utils/libs";

// create user
interface CreateItemProps {
  name: string;
  origin: string;
}


export const createItem = async ({ name, origin }: CreateItemProps) => {
  const contract = await getContract();

  try {
    console.log("name", name);
    console.log("origin", origin);
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

//  get item details
