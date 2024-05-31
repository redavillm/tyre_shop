export const tyresOptionsCreator = (data, value) => {
  try {
    const optionsdResult = [];

    switch (value) {
      case "width":
        data.map((el) => optionsdResult.push(el.size.width));
        break;
      case "height":
        data.map((el) => optionsdResult.push(el.size.height));
        break;
      case "radius":
        data.map((el) => optionsdResult.push(el.size.radius));
        break;
      case "brand":
        data.map((el) => optionsdResult.push(el.brand));
        break;
      default:
        break;
    }

    return Array.from(new Set(optionsdResult.sort((a, b) => a - b)));
  } catch (error) {
    console.log(error.message);
  }
};
