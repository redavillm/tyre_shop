const uploadImage = require("./img/uploadImage");

const createNewProduct = async (req, res, Model, bucketFolder) => {
  try {
    const { body, file } = req;
    const imageUrl = await uploadImage(file, bucketFolder);

    const newProduct = new Model({
      ...body,
      imgSrc: imageUrl,
    });

    await newProduct.save();
    res.status(200).json({ message: "Товар добавлен", product: newProduct });
  } catch (error) {
    console.error("Ошибка при добавлении товара: ", error);
    res.status(500).json({ message: "Ошибка при добавлении товара" });
  }
};

module.exports = createNewProduct;
