const Accumulator = require("../models/Accumulator");

const list = async (req, res, next) => {
  try {
    res.json({
      count: await Accumulator.countDocuments(),
      items: await Accumulator.find(),
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    res.json({ item: await Accumulator.findById(req.params.id) });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list,
  getById,
};
