import { DISKS } from "../db/DISKS";

export const disksFilter = (selectedOption) => {
  const { diametr, mount, brand, type } = selectedOption;

  let disksArrResult = DISKS;

  if (diametr !== "-") {
    disksArrResult = disksArrResult.filter((el) => el.diametr === diametr);
  }

  if (mount !== "-") {
    disksArrResult = disksArrResult.filter((el) => el.mount === mount);
  }

  if (type !== "-") {
    disksArrResult = disksArrResult.filter((el) => el.type === type);
  }

  if (brand !== "-") {
    disksArrResult = disksArrResult.filter((el) => el.brand === brand);
  }

  return disksArrResult;
};
