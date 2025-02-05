export const tyresFilter = (tyreList, selectedOption) => {
  try {
    const { width, height, radius, brand, season, spiked } = selectedOption;
    let result = tyreList;

    if (width !== "all") {
      result = result.filter((el) => el.size.width === +width);
    }
    if (height !== "all") {
      result = result.filter((el) => el.size.height === +height);
    }
    if (radius !== "all") {
      result = result.filter((el) => el.size.radius === +radius);
    }
    if (brand !== "all") {
      result = result.filter((el) => el.brand === brand);
    }
    if (season !== "all") {
      result = result.filter((el) =>
        season === "Лето" ? el.season === "summer" : el.season === "winter"
      );
    }
    if (spiked !== "all" && season === "Зима") {
      result = result.filter((el) => {
        return spiked === "С шипами"
          ? el.isSpiked === true
          : el.isSpiked === false;
      });
    }

    return result.length !== 0 ? result : null;
  } catch (error) {
    console.log(error.message);
  }
};
