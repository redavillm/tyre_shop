const Tyre = require("../models/Tyre");

const list = async (req, res, next) => {
  try {
    res.json({
      count: await Tyre.countDocuments(),
      items: await Tyre.find(),
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    res.json({ item: await Tyre.findById(req.params.id) });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list,
  getById,
};
