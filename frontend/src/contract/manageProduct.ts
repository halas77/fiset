import { getContract } from ".";

export const createItem = async () => {
  const contract = await getContract();

  try {
    const item = await contract.createItem("Gold", "Gambella, Ethiopia");
    await item.wait();
  } catch (error) {
    console.log("error", error);
  }
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
      origin: item.origin,
      remarks: item.remarks,
      status: item.status,
      location: item.location,
      timestamp: new Date(item.timestamp * 1000).toLocaleString(),
    };
    items.push(formattedItem);
  }

  console.log('items', items)

  return items;
};
