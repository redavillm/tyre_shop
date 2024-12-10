const Tyre = require("../models/Tyre");

const list = async (req, res) => {
  try {
    const count = await Tyre.countDocuments();
    const items = await Tyre.find();
    res.json({ count, items });
  } catch (error) {
    console.error("Error fetching tyres:", error);
    res.status(500).json({ message: "Ошибка при получении данных" });
  }
};

const getById = async (req, res) => {
  try {
    const item = await Tyre.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Шина не найдена" });
    }
  } catch (error) {
    console.error("Error fetching tyre by ID:", error);
    res.status(500).json({ message: "Ошибка при получении данных" });
  }
};

const getUniqueParameters = async (req, res) => {
  try {
    const uniqueParameters = await Tyre.aggregate([
      {
        $group: {
          _id: null,
          widths: { $addToSet: "$size.width" },
          heights: { $addToSet: "$size.height" },
          radius: { $addToSet: "$size.radius" },
          brands: { $addToSet: "$brand" },
        },
      },
      {
        $project: {
          _id: 0,
          widths: 1,
          heights: 1,
          radius: 1,
          brands: 1,
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

module.exports = {
  list,
  getById,
  getUniqueParameters,
};
