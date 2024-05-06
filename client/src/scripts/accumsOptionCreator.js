import { ACCUMULATORS } from "../db/ACCUMULATORS";

export const accumsOptionCreator = (value) => {
  try {
    const optionsdResult = [];

    switch (value) {
      case "size":
        ACCUMULATORS.map((el) =>
          optionsdResult.push(el.length + "x" + el.height + "x" + el.width)
        );
        break;
      case "polarity":
        ACCUMULATORS.map((el) => optionsdResult.push(el.polarity));
        break;
      case "capacity":
        ACCUMULATORS.map((el) => optionsdResult.push(el.capacity));
        break;
      case "brand":
        ACCUMULATORS.map((el) => optionsdResult.push(el.brand));
        break;
      default:
        break;
    }
    return Array.from(new Set(optionsdResult.sort((a, b) => a - b)));
  } catch (error) {
    console.log(error.message);
  }
};
