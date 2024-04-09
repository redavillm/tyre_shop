import { DISKS } from "../../../../db/DISKS";
import { getUniqArr } from "../../../../scripts";

export const diametrOptionCreator = () => {
  let diametrOptions = [];

  DISKS.map((el) => diametrOptions.push(el.diametr));
  return getUniqArr(diametrOptions);
};
export const mountOptionCreator = () => {
  let mountOptions = [];

  DISKS.map((el) => mountOptions.push(el.mount));
  return getUniqArr(mountOptions);
};
export const brandOptionCreator = () => {
  let brandOptions = [];

  DISKS.map((el) => brandOptions.push(el.brand));
  return getUniqArr(brandOptions);
};
export const typeOptionCreator = () => {
  let typeOptions = [];

  DISKS.map((el) => typeOptions.push(el.type));
  return getUniqArr(typeOptions);
};
