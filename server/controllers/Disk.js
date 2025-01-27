const Disk = require("../models/Disk");
const createNewProduct = require("../services/createNewProduct");
const deleteProduct = require("../services/deleteProduct");
const updateProduct = require("../services/updateProduct");

const list = async (req, res) => {
  try {
    res.json({
      count: await Disk.countDocuments(),
      items: await Disk.find(),
    });
  } catch (error) {
    console.error("Error fetching tyre by ID:", error);
    res.status(500).json({ message: "Ошибка при получении данных" });
  }
};

const getById = async (req, res) => {
  try {
    res.json({ item: await Disk.findById(req.params.id) });
  } catch (error) {
    console.error("Error fetching tyre by ID:", error);
    res.status(500).json({ message: "Ошибка при получении данных" });
  }
};

const getUniqueParameters = async (req, res) => {
  try {
    const uniqueParameters = await Disk.aggregate([
      {
        $group: {
          _id: null,
          diametr: { $addToSet: "$diametr" },
          mount: { $addToSet: "$mount" },
          brand: { $addToSet: "$brand" },
          type: { $addToSet: "$type" },
        },
      },
      {
        $project: {
          _id: 0,
          diametr: 1,
          mount: 1,
          brand: 1,
          type: 1,
        },
      },
    ]);
    if (uniqueParameters.length === 0) {
      return res.status(404).json({ message: "Нет уникальных параметров" });
    }
    res.json(uniqueParameters[0]);
  } catch (error) {
    console.error("Error fetching tyre by ID:", error);
    res.status(500).json({ message: "Ошибка при получении данных" });
  }
};

const createNewDisk = async (req, res) =>
  createNewProduct(req, res, Disk, "diskImgs");

const updateDisk = async (req, res) =>
  updateProduct(req, res, Disk, "diskImgs");

const deleteDisk = async (req, res) => deleteProduct(req, res, Disk);

module.exports = {
  list,
  getById,
  getUniqueParameters,
  createNewDisk,
  updateDisk,
  deleteDisk,
};
