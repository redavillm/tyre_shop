import { TYRES } from "../db/TYRES";

export const tyresOptionsCreator = (value) => {
  const optionsdResult = [];

  switch (value) {
    case "width":
      TYRES.map((el) => optionsdResult.push(el.size.width));
      break;
    case "height":
      TYRES.map((el) => optionsdResult.push(el.size.height));
      break;
    case "radius":
      TYRES.map((el) => optionsdResult.push(el.size.radius));
      break;
    case "brand":
      TYRES.map((el) => optionsdResult.push(el.brand));
      break;
    default:
      break;
  }

  return Array.from(new Set(optionsdResult.sort((a, b) => a - b)));
};
