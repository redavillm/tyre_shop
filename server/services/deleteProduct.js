const deleteImage = require("./img/deleteImage");

const deleteProduct = async (req, res, Model) => {
  try {
    const { id } = req.params;
    // Проверяем, существует ли товар
    const product = await Model.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Товар не найден",
      });
    }
    // Удаляем изображение, если оно существует

    if (product.imgSrc) {
      await deleteImage(product.imgSrc);
    }

    // Удаляем товар из базы данных
    await Model.findByIdAndDelete(id);

    res.status(200).json({
      message: "Товар успешно удален",
    });
  } catch (error) {
    console.error("Ошибка при удалении товара: ", error);
    res.status(500).json({
      message: "Произошла ошибка при удалении товара",
    });
  }
};

module.exports = deleteProduct;
