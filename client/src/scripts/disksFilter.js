import { DISKS } from "../db/DISKS";

export const disksFilter = (selectedOption) => {
  const { diametr, mount, brand, type } = selectedOption;

  return DISKS.filter(
    (el) =>
      (diametr === "-" || el.diametr === diametr) &&
      (mount === "-" || el.mount === mount) &&
      (type === "-" || el.type === type) &&
      (brand === "-" || el.brand === brand)
  );
};
