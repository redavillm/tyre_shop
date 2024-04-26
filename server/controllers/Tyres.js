const Tyres = require("../models/Tyres");

const list = async (req, res, next) => {
  try {
    res.json({
      count: await Tyres.countDocument(),
      items: await Tyres.find(),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list,
};
