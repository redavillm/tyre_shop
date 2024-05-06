import { ACCUMULATORS } from "../db/ACCUMULATORS";

export const accumFilter = (selectedOption) => {
  try {
    const { size, polarity, capacity, brand } = selectedOption;

    return ACCUMULATORS.filter(
      (el) =>
        (size === "all" ||
          el.length + "x" + el.height + "x" + el.width ===
            ACCUMULATORS.length +
              "x" +
              ACCUMULATORS.height +
              "x" +
              ACCUMULATORS.width) &&
        (polarity === "all" || el.polarity === polarity) &&
        (capacity === "all" || el.capacity === capacity) &&
        (brand === "all" || el.brand === brand)
    );
  } catch (error) {
    console.log(error.message);
  }
};
