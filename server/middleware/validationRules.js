const { body } = require("express-validator");

const tyreValidation = [
  body("brand").notEmpty().withMessage("Поле 'бренд' должно быть заполнено"),
  body("model").notEmpty().withMessage("Поле 'модель' должно быть заполнено"),
  body("season").notEmpty().withMessage("Поле 'сезон' должно быть заполнено"),
  body("size.width")
    .isInt({ min: 10, max: 500 })
    .withMessage("Неверное значение в поле Ширина"),
  body("size.radius")
    .isInt({ min: 10, max: 500 })
    .withMessage("Неверное значение в поле Диаметр"),
  body("size.height")
    .isInt({ min: 10, max: 500 })
    .withMessage("Неверное значение в поле Высота"),
  body("price")
    .isFloat({ min: 0 })
    .withMessage("Поле 'price' должно быть положительным числом"),
];

module.exports = { tyreValidation };
