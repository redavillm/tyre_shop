const uploadImage = require("./img/uploadImage");

const createNewProduct = async (req, res, Model, bucketFolder) => {
  try {
    const { body, file } = req;
    const imageUrl = await uploadImage(file, bucketFolder);

    if (body.season === "summer") {
      delete body.isSpiked;
    }

    const count = body.count && !isNaN(body.count) ? Number(body.count) : 0;

    const newProduct = new Model({
      ...body,
      imgSrc:
        imageUrl ||
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2-xKzlNSdo9DeADg0OVnjwHaHa%26pid%3DApi&f=1&ipt=f7841183de1f31f93b98e9b0d7e3fdb70a9b4670280f8d86a608613ab6d962d9&ipo=images",
      count: count,
    });

    await newProduct.save();
    res.status(200).json({ message: "Товар добавлен", product: newProduct });
  } catch (error) {
    console.error("Ошибка при добавлении товара: ", error);
    res.status(500).json({ message: "Ошибка при добавлении товара" });
  }
};

module.exports = createNewProduct;
