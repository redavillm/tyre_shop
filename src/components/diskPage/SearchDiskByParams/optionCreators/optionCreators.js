import { DISKS } from "../../../../db/DISKS";

const getUniqElements = (arr) => {
  const uniqArr = [];

  for (let el of arr) {
    if (!uniqArr.includes(el)) {
      uniqArr.push(el);
    }
  }
  return uniqArr;
};

export const diametrOptionCreator = () => {
  let diametrOptions = [];

  DISKS.map((el) => diametrOptions.push(el.diametr));
  return getUniqElements(diametrOptions);
};
export const mountOptionCreator = () => {
  let mountOptions = [];

  DISKS.map((el) => mountOptions.push(el.mount));
  return getUniqElements(mountOptions);
};
export const brandOptionCreator = () => {
  let brandOptions = [];

  DISKS.map((el) => brandOptions.push(el.brand));
  return getUniqElements(brandOptions);
};
export const typeOptionCreator = () => {
  let typeOptions = [];

  DISKS.map((el) => typeOptions.push(el.type));
  return getUniqElements(typeOptions);
};
