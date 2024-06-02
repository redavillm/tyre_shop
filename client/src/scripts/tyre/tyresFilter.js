export const tyresfilter = (data, selectedOption) => {
  try {
    const { width, height, radius, brand } = selectedOption;

    if (width !== "all") {
      data = data.filter((el) => el.size.width === +width);
    }
    if (height !== "all") {
      data = data.filter((el) => el.size.height === +height);
    }
    if (radius !== "all") {
      data = data.filter((el) => el.size.radius === +radius);
    }
    if (brand !== "all") {
      data = data.filter((el) => el.brand === brand);
    }

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
