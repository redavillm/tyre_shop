export const accumsOptionCreator = (data, value) => {
  try {
    const optionsdResult = [];

    switch (value) {
      case "size":
        data.map((el) =>
          optionsdResult.push(el.length + "x" + el.height + "x" + el.width)
        );
        break;
      case "polarity":
        data.map((el) => optionsdResult.push(el.polarity));
        break;
      case "capacity":
        data.map((el) => optionsdResult.push(el.capacity));
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
