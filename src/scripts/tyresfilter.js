import { TYRES } from "../db/TYRES";

export const tyresfilter = (selectedOption, isWinter) => {
  const filters = {
    width: (value) => (el) => value === "-" || el.width === value,
    height: (value) => (el) => value === "-" || el.height === value,
    radius: (value) => (el) => value === "-" || el.radius === value,
    brand: (value) => (el) => value === "-" || el.brand === value,
  };

  let tyresArrResult = TYRES.filter((el) => {
    if (isWinter) {
      return el.season === "winter";
    } else {
      return el.season === "summer";
    }
  });

  Object.entries(selectedOption).forEach(([key, value]) => {
    if (filters[key]) {
      tyresArrResult = tyresArrResult.filter(filters[key](value));
    }
  });

  return { tyresArrResult, isWinterIcon: isWinter };
};
