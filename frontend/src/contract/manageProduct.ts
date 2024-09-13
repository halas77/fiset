import { getContract } from ".";

export const createItem = async () => {
  const contract = await getContract();

  try {
    const item = contract.createItem("Keffa Buna", "Keffa, Ethiopia");

    console.log("Start waiting");
    await item.wait();
    console.log("item", item);
    console.log("End waiting");
  } catch (error) {
    console.log("error", error);
  }
};
