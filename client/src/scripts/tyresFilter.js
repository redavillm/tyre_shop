export const tyresfilter = (data, selectedOption, isWinter) => {
  try {
    const { width, height, radius, brand } = selectedOption;

    let tyresArrResult = data.filter((el) => {
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
      tyresArrResult = tyresArrResult.filter(
        (el) => el.size.height === +height
      );
    }
    if (radius !== "all") {
      tyresArrResult = tyresArrResult.filter(
        (el) => el.size.radius === +radius
      );
    }
    if (brand !== "all") {
      tyresArrResult = tyresArrResult.filter((el) => el.brand === brand);
    }

    return tyresArrResult;
  } catch (error) {
    console.log(error.message);
  }
};
