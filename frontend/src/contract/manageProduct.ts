import { getContract } from ".";
import { productStatusMapping } from "../utils/constants";

export const createItem = async () => {
  const contract = await getContract();

  try {
    const item = await contract.createItem("Gold", "Gambella, Ethiopia");
    await item.wait();
  } catch (error) {
    console.log("error", error);
  }
};

const handleStatus = (i: keyof typeof productStatusMapping) => {
  return productStatusMapping[i];
};

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
