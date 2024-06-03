export const accumFilter = (data, selectedOption) => {
  try {
    const { size, polarity, capacity, brand } = selectedOption;

    return data.filter(
      (el) =>
        (size === "all" ||
          el.length + "x" + el.height + "x" + el.width ===
            data.length + "x" + data.height + "x" + data.width) &&
        (polarity === "all" || el.polarity === polarity) &&
        (capacity === "all" || el.capacity === capacity) &&
        (brand === "all" || el.brand === brand)
    );
  } catch (error) {
    console.log(error.message);
  }
};
