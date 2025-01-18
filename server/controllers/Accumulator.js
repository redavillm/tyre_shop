const Accumulator = require("../models/Accumulator");

const createNewProduct = require("../sevices/createNewProduct");
const deleteProduct = require("../sevices/deleteProduct");
const updateProduct = require("../sevices/updateProduct");

const list = async (req, res) => {
  try {
    res.json({
      count: await Accumulator.countDocuments(),
      items: await Accumulator.find(),
    });
  } catch (error) {
    console.error("Error fetching unique parameters:", error);
    res
      .status(500)
      .json({ message: "Ошибка при получении уникальных параметров" });
  }
};

const getById = async (req, res) => {
  try {
    res.json({ item: await Accumulator.findById(req.params.id) });
  } catch (error) {
    console.error("Error fetching unique parameters:", error);
    res
      .status(500)
      .json({ message: "Ошибка при получении уникальных параметров" });
  }
};

const getUniqueParameters = async (req, res) => {
  try {
    const uniqueParameters = await Accumulator.aggregate([
      {
        $group: {
          _id: null,
          size: {
            $addToSet: {
              $concat: [
                { $toString: "$length" },
                "x",
                { $toString: "$height" },
                "x",
                { $toString: "$width" },
              ],
            },
          },

          polarity: { $addToSet: "$polarity" },
          capacity: { $addToSet: "$capacity" },
          brand: { $addToSet: "$brand" },
        },
      },
      {
        $project: {
          _id: 0,
          size: 1,
          polarity: 1,
          capacity: 1,
          brand: 1,
        },
      },
    ]);

    if (uniqueParameters.length === 0) {
      return res.status(404).json({ message: "Нет уникальных параметров" });
    }
    res.json(uniqueParameters[0]);
  } catch (error) {
    console.error("Error fetching unique parameters:", error);
    res
      .status(500)
      .json({ message: "Ошибка при получении уникальных параметров" });
  }
};

const createNewAccumulator = async (req, res) =>
  createNewProduct(req, res, Accumulator, "accumulatorImgs");

const updateAccumulator = async (req, res) =>
  updateProduct(req, res, Accumulator, "accumulatorImgs");

const deleteAccumulator = async (req, res) =>
  deleteProduct(req, res, Accumulator);

module.exports = {
  list,
  getById,
  getUniqueParameters,
  createNewAccumulator,
  updateAccumulator,
  deleteAccumulator,
};
