import { SUMMER_TYRES } from "../db/SUMMER_TYRES";
import { WINTER_TYRES } from "../db/WINTER_TYRES";

export const tyresfilter = (selectedOption, isWinter) => {
  const { width, height, radius, brand } = selectedOption;
  let curretnArr = isWinter ? WINTER_TYRES : SUMMER_TYRES;
  let tyresArrResult = curretnArr;

  if (width !== "-") {
    tyresArrResult = tyresArrResult.filter((el) => el.width === width);
  }

  if (height !== "-") {
    tyresArrResult = tyresArrResult.filter((el) => el.height === height);
  }

  if (radius !== "-") {
    tyresArrResult = tyresArrResult.filter((el) => el.radius === radius);
  }

  if (brand !== "-") {
    tyresArrResult = tyresArrResult.filter((el) => el.brand === brand);
  }

  return tyresArrResult;
};
