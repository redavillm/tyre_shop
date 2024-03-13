import { WINTER_TYRES } from "../db/WINTER_TYRES";

export const tyresfilter = (obj) => {
  const { brand, width, height, radius } = obj;

  if (brand !== "All") {
    return WINTER_TYRES.filter((el) => el.width === width)
      ?.filter((el) => el.height === height)
      ?.filter((el) => el.radius === radius)
      ?.filter((el) => el.brand === brand);
  }

  return WINTER_TYRES.filter((el) => el.width === width)
    ?.filter((el) => el.height === height)
    ?.filter((el) => el.radius === radius);
};
