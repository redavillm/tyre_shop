export const getProductParams = (product, type) => {
  const productData = {
    title: "",
    params: "",
    counterStep: 0,
    season: "",
  };

  switch (type) {
    case "tyres":
      productData.title = product.brand + " " + product.model;
      productData.params = `${product.size.width}/${product.size.height} R${product.size.radius}`;
      productData.counterStep = 2;
      productData.season = product.season;
      break;
    case "disks":
      productData.title =
        product.brand + " " + (product.model !== "-" ? product.model : "");
      productData.params =
        product.diametr + " " + product.mount + " " + product.color;
      productData.counterStep = 2;
      break;
    case "accumulators":
      productData.title = product.brand + " " + product.model;
      productData.params = product.capacity + "Ah";
      productData.counterStep = 1;
      break;
    default:
      break;
  }
  return productData;
};
