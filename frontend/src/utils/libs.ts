import { ItemNumberTypes, productStatusMapping } from "./constants";
import { ItemType } from "./TypeDeclarations";

export const handleStatus = (i: keyof typeof productStatusMapping) => {
  return productStatusMapping[i];
};

export const handleStatusKeys = (value: string) => {
  return Object.keys(productStatusMapping).find(
    (key) =>
      productStatusMapping[key as keyof typeof productStatusMapping] === value
  );
};

export const isValidStatus = (
  status: string
): status is keyof ItemNumberTypes => {
  return ["Created", "Transitted", "Delivered", "Accepted", "Rejected"].includes(status);
};

export const getNumbersofItems = (items: ItemType[]) => {
  const numberOfItems = {
    Created: 0,
    Transitted: 0,
    Delivered: 0,
    Accepted: 0,
    Rejected: 0,
  };

  items.map((item: ItemType) => {
    if (item.status == "Created") {
      numberOfItems.Created += 1;
    } else if (item.status == "Transitted") {
      numberOfItems.Transitted += 1;
    } else if (item.status == "Delivered") {
      numberOfItems.Delivered += 1;
    } else if (item.status == "Accepted") {
      numberOfItems.Accepted += 1;
    } else if (item.status == "Rejected") {
      numberOfItems.Rejected += 1;
    }
  });

  return numberOfItems;
};
