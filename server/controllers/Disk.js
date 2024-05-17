const Disk = require("../models/Disk");

const list = async (req, res, next) => {
  try {
    res.json({
      count: await Disk.countDocuments(),
      items: await Disk.find(),
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    res.json({ item: await Disk.findById(req.params.id) });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list,
  getById,
};
