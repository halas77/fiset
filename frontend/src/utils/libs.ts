import { productStatusMapping } from "./constants";

export const handleStatus = (i: keyof typeof productStatusMapping) => {
  return productStatusMapping[i];
};

export const handleStatusKeys = (value: string) => {
  return Object.keys(productStatusMapping).find(
    (key) =>
      productStatusMapping[key as keyof typeof productStatusMapping] === value
  );
};
