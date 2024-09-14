import { productStatusMapping } from "./constants";

export const handleStatus = (i: keyof typeof productStatusMapping) => {
  return productStatusMapping[i];
};
