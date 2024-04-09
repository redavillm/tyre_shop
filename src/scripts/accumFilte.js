import { ACCUMULATORS } from "../db/ACCUMULATORS";

export const accumFilter = (selectedOption) => {
  const { size, polarity, capacity, brand } = selectedOption;

  let accumArrResult = ACCUMULATORS;

  if (size !== "-") {
    accumArrResult = accumArrResult.filter((el) => el.size === size);
  }

  if (polarity !== "-") {
    accumArrResult = accumArrResult.filter((el) => el.polarity === polarity);
  }

  if (capacity !== "-") {
    accumArrResult = accumArrResult.filter((el) => el.capacity === capacity);
  }

  if (brand !== "-") {
    accumArrResult = accumArrResult.filter((el) => el.brand === brand);
  }

  return accumArrResult;
};
