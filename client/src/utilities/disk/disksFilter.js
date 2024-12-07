export const disksFilter = (data, selectedOption) => {
  console.log("selectedOption in disksFilter = ", selectedOption);
  try {
    const { diametr, mount, brand, type } = selectedOption;

    return data.filter(
      (el) =>
        (diametr === "all" || el.diametr === +diametr) &&
        (mount === "all" || el.mount === mount) &&
        (type === "all" || el.type === type) &&
        (brand === "all" || el.brand === brand)
    );
  } catch (error) {
    console.log(error.message);
  }
};
