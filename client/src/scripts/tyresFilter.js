import { TYRES } from "../db/TYRES";

export const tyresfilter = (selectedOption, isWinter) => {
  const { width, height, radius, brand } = selectedOption;

  let tyresArrResult = TYRES.filter((el) => {
    if (isWinter) {
      return el.season === "winter";
    } else {
      return el.season === "summer";
    }
  });

  if (width !== "all") {
    tyresArrResult = tyresArrResult.filter((el) => el.size.width === +width);
  }
  if (height !== "all") {
    tyresArrResult = tyresArrResult.filter((el) => el.size.height === +height);
  }
  if (radius !== "all") {
    tyresArrResult = tyresArrResult.filter((el) => el.size.radius === +radius);
  }
  if (brand !== "all") {
    tyresArrResult = tyresArrResult.filter((el) => el.brand === brand);
  }

  return tyresArrResult;
};
