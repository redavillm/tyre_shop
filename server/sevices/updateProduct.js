const uploadImage = require("./img/uploadImage");
const deleteImage = require("./img/deleteImage");

const updateProduct = async (req, res, Model, bucketFolder) => {
  try {
    const { body, file } = req;
    const id = body._id;

    const product = await Model.findById(id);

    let updatedData = { ...body };

    if (body.deleteImg && product.imgSrc) {
      await deleteImage(product.imgSrc);
      updatedData.imgSrc = null; // Удаляем ссылку на изображение
    }

    if (file) {
      const newImageUrl = await uploadImage(file, bucketFolder);
      if (product.imgSrc) {
        await deleteImage(product.imgSrc);
      }
      updatedData.imgSrc = newImageUrl;
    }
    const updatedProduct = await Model.findByIdAndUpdate(
      id,
      updatedData,
      { new: true } // Опция new: true возвращает обновленный объект
    );

    res.status(200).json({
      message: "Товар успешно обновлен",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Ошибка при обновлении товара: ", error);
  }
};

module.exports = updateProduct;
