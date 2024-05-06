import { DISKS } from "../db/DISKS";

export const disksOptionsCreator = (value) => {
  try {
    const optionsdResult = [];

    switch (value) {
      case "diametr":
        DISKS.map((el) => optionsdResult.push(el.diametr));
        break;
      case "mount":
        DISKS.map((el) => optionsdResult.push(el.mount));
        break;
      case "type":
        DISKS.map((el) => optionsdResult.push(el.type));
        break;
      case "brand":
        DISKS.map((el) => optionsdResult.push(el.brand));
        break;
      default:
        break;
    }

    return Array.from(new Set(optionsdResult.sort((a, b) => a - b)));
  } catch (error) {
    console.log(error.message);
  }
};
