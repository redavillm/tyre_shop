export const tyresfilter = (data, selectedOption) => {
  try {
    const { width, height, radius, brand } = selectedOption;
    let result = data;

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

    return result.length !== 0 ? result : false;
  } catch (error) {
    console.log(error.message);
  }
};
