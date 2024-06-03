export const disksOptionsCreator = (data, value) => {
  try {
    const optionsdResult = [];

    switch (value) {
      case "diametr":
        data.map((el) => optionsdResult.push(el.diametr));
        break;
      case "mount":
        data.map((el) => optionsdResult.push(el.mount));
        break;
      case "type":
        data.map((el) => optionsdResult.push(el.type));
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
