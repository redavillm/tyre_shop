import { ACCUMULATORS } from "../db/ACCUMULATORS";

export const accumFilter = (selectedOption) => {
  const { size, polarity, capacity, brand } = selectedOption;

  return ACCUMULATORS.filter(
    (el) =>
      (size === "-" || el.size === size) &&
      (polarity === "-" || el.polarity === polarity) &&
      (capacity === "-" || el.capacity === capacity) &&
      (brand === "-" || el.brand === brand)
  );
};
