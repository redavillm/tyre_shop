import { DISKS } from "../db/DISKS";

export const disksFilter = (selectedOption) => {
  try {
    const { diametr, mount, brand, type } = selectedOption;

    return DISKS.filter(
      (el) =>
        (diametr === "all" || el.diametr === +diametr) &&
        (mount === "all" || el.mount === mount) &&
        (type === "all" || el.type === type) &&
        (brand === "all" || el.brand === brand)
    );
  } catch (error) {
    console.log(error.message);
  }
};
